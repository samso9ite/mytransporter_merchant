<template>
<div>
    <SideBar />
    <div class="content-body">
            <div class="container-fluid">
				
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">App</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
					</ol>
                </div>
                <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                               
                                <div class="profile-info">
									<div class="profile-photo">
										<img :src="logo" class="img-fluid rounded-circle" alt="">
									</div>
									<div class="profile-details">
										<div class="profile-name px-3 pt-2">
											<h4 class="text-primary mb-0">{{name}}</h4>
											<p>RC {{rc_number}}</p>
										</div>
										<div class="profile-email px-2 pt-2">
											<h4 class="text-muted mb-0">{{email}}</h4>
											<p>{{website}}</p>
										</div>
										
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="profile-tab">
                                    <div class="custom-tab-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item"><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Account Setting</a>
                                            </li>
                                        </ul>
                                        <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                        </div>
                                        <div class="tab-content">
                                            
                                          
                                            <div id="profile-settings" class="tab-pane fade active show">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                            <div class="row">
                                                                  <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Name</label>
                                                                    <input type="text" placeholder="Name" class="form-control" v-model="name">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Email</label>
                                                                    <input type="email" placeholder="Email" class="form-control" v-model="email">
                                                                </div>
                                                               
                                                            </div>
                                                              <div class="row mb-3" style="margin-top:15px">
                                                                   <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Mobile Number</label>
                                                                    <input type="number" placeholder="Phone number" class="form-control" v-model="phone">
                                                                </div>
                                                                <div class="col-lg-6 ">  
                                                                    <label class="form-label">Upload Company Logo</label>
                                                                     <div class="input-group mb-3 ">
                                                                    <span class="input-group-text">Upload</span>
                                                                    <div class="form-file">
                                                                        <input type="file" id="file" ref="file" class="form-file-input form-control" v-on:change="handleFileUpload()">
                                                                    </div>
                                                                </div>
                                                                </div>
                                                               
                                                            </div>
                                                           
                                                               <div class="row">
                                                                    <div class="col-lg-6">
                                                                    <label class="form-label">Office Address</label>
                                                                    <GmapAutocomplete placeholder="Input office address" class="form-control" @place_changed="setAddress" > </GmapAutocomplete>
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">State</label>
                                                                    <input type="text" class="form-control" v-model="state">
                                                                </div>
                                                               
                                                            </div>
                                                            <div class="row col-mb-3">
                                                                 <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Website</label>
                                                                    <input type="text" class="form-control" v-model="website">
                                                                </div>
                                                                <div class="col-lg-6">
                                                                     <label class="form-label">About the Company</label>  
                                                                    <textarea class="form-control" placeholder="Type your message..." v-model="description"></textarea>
                                                                </div>
                                                            </div>
                                                            <br>
                                                            <button class="btn btn-rounded btn-large btn-primary" type="submit" @click="update_profile">Update Profile  </button>
                                                        <!-- </form> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>   
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Api from './Api'
    export default({
        name: 'Profile',
        components: {SideBar},
       data(){
			return {
                name: '',
                email: '',
                website: '',
                address: '',
                phone: '',
                state:'',
                logo:'',
                rc_number: '',
                pending_wallet_balance: '',
                wallet_balance: '',
                latitude: '',
                longitude: '', 
                description: '',
                errors: []  ,
                file:''
			}
		},
        methods: {
             handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            update_profile(){
                const merchant = JSON.parse(localStorage.getItem('merchant_id'))
                const formData = new FormData()
                formData.append('address', this.address)
                formData.append('name', this.name)
                formData.append('state', this.state)
                formData.append('address', this.email)
                formData.append('merchant_id', merchant)
                formData.append('description', this.description)
                formData.append('latitude', this.latitude)
                formData.append('longitude', this.longitude)
                formData.append('website', this.website)
                formData.append('logo', this.file)
                console.log(formData.get('merchant_id'))
                console.log(formData.get('website'))
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/profile/update', formData)
                .then(response => {
                    this.$toast.success({
                        title:'Success',
                        message:'Profile Updated',
                    })
                    get_users_details()
                })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data.detail}`)
                        }
                    }
                   
                })
            },
           
            get_users_details(){
                const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/profile/get', {merchant_id: merchant_token})
                .then(response => {
                    this.name = response.data.name
                    this.address = response.data.address
                    this.email = response.data.email
                    this.state = response.data.state
                    this.website = response.data.website
                    this.rc_number = response.data.rc_number
                    this.logo = response.data.logo
                    this.phone = response.data.phone
                    this.description = response.data.description
                })
                .catch(error =>{
                })
            },
            setAddress(place){
                this.address = place.formatted_address
                this.latitude =  place.geometry.location.lat()
                this.longitude =  place.geometry.location.lng()
          }
        },
        mounted(){
            this.get_users_details()
        }
    })
</script>