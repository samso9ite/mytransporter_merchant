<template>
<div>
    <SideBar />
    <div class="content-body">
            <div class="container-fluid">
				
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active" ><a href="/rate">Profile</a></li>
					</ol>
                </div>
                <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                               
                                <div class="profile-info">
									<div class="profile-photo">
                                       <img :src="logo" class="img-fluid rounded-circle" alt="" v-if="logo">
                                       <img src="../statics/avatar.png" v-else />
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
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
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
                                                                    <VuePhoneNumberInput v-model="phone" ref="phone_number" required default-country-code="NG" size="lg" :preferred-countries="['NG', 'AE', 'DM', 'CM', 'PG', 'KE']" />
                                                              
                                                                    <!-- <input type="number" placeholder="Phone number" class="form-control" v-model="phone"> -->
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
                                                           
                                                            <div class="row col-mb-3">
                                                                <div class="col-lg-6">
                                                                    <label class="form-label">Office Address</label>
                                                                    <GmapAutocomplete placeholder="Address" class="form-control" @place_changed="setAddress" :value="this.address" > </GmapAutocomplete>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                     <label class="form-label">About the Company</label>  
                                                                    <textarea class="form-control" placeholder="Type your message..." v-model="description"></textarea>
                                                                </div>
                                                               
                                                            </div>

                                                            <div class="row col-mb-3" style="margin-top:10px">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Country </label>
                                                                    <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="country">
                                                                        <option value="" selected disabled>---Select Country ---</option>
                                                                        <option :value="country">Nigeria</option>
                                                                    </select>
                                                                    <!-- <country-select v-model="country" :country="country"  topCountry="NG" class="form-control"  /> -->
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <label class="form-label">State</label>  
                                                                    <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="state"  @change="onChange($event)">
                                                                        <option value="" selected disabled>---Select State ---</option>
                                                                        <option value="Lagos">Lagos </option>
                                                                        <option value="Ibadan">Ibadan </option>
                                                                        <option value="Abeokuta">Abeokuta </option>
                                                                        <option value="Abuja">Abuja </option>
                                                                        <option value="Jos">Jos </option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="row col-mb-3">
                                                                 <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Website</label>
                                                                    <input type="text" class="form-control" v-model="website">
                                                                </div>
                                                               
                                                            </div>
                                                            <br>
                                                            <button class="btn btn-rounded btn-large btn-primary" type="submit" @click="update_profile">Update Profile  </button>
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
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import VuePhoneNumberInput from 'vue-phone-number-input'
    export default({
        name: 'Profile',
        components: {SideBar, VuePhoneNumberInput},
       data(){
			return {
                name: '',
                email: '',
                website: '',
                address: '',
                phone: '',
                state:'',
                country: '',
                logo:'',
                state_code: '',
                rc_number: '',
                pending_wallet_balance: '',
                wallet_balance: '',
                latitude: '',
                longitude: '', 
                description: '',
                errors: []  ,
                file:'',
                region: '',
			}
		},
        watch: {
            stateCode () {
                this.onChange(this.state)
            }
        },
        methods: {
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            onChange(event){
                if(event.target.value == "Lagos"){
                    this.state_code = "LA"
                }
                else if(event.target.value == "Abuja"){
                    this.state_code = "ABJ"
                }
                else if(event.target.value == "Jos"){
                    this.state_code = "JO"
                }
                 else if(event.target.value == "Ibadan"){
                    this.state_code = "IB"
                }
                 else if (event.target.value == "Abeokuta"){
                    this.state_code = "AB"
                }
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
                    this.latitude = response.data.latitude
                    this.longitude = response.data.longitude
                })
                .catch(error =>{
                    console.log(error.response);
                })
            }, 
            select_region(){
                this.state_code = this.region
            },
            update_profile(){
                const merchant = JSON.parse(localStorage.getItem('merchant_id'))
                let formData ;
                if (this.$store.state.user.has_set_profile){
                    console.log(merchant);
                    console.log("Has profile added");
                    const formData = new FormData()
                    formData.append('address', this.address)
                    formData.append('name', this.name)
                    formData.append('state', this.region)
                    formData.append('email', this.email)
                    formData.append('merchant_id', merchant)
                    formData.append('description', this.description)
                    formData.append('latitude', this.latitude)
                    formData.append('longitude', this.longitude)
                    formData.append('website', this.website)
                    formData.append('country', this.country)
                    formData.append('logo', this.file)
                    formData.append('state_code', this.state_code)
                    console.log(formData);
                    console.log(formData);
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
                }
                else{
                    console.log(merchant);
                    console.log("Doesn't have profile added");
                    const formData = new FormData()
                    formData.append('address', this.address)
                    formData.append('name', this.name)
                    formData.append('state', this.region)
                    formData.append('address', this.email)
                    formData.append('merchant_id', merchant)
                    formData.append('description', this.description)
                    formData.append('latitude', this.latitude)
                    formData.append('longitude', this.longitude)
                    formData.append('website', this.website)
                    formData.append('country', this.country)
                    formData.append('logo', this.file)
                    formData.append('state_code', this.state_code)
                    formData.append('has_set_profile', true)
                    Api.axios_instance.post(Api.baseUrl+'/merchant/portal/profile/update', formData)
                    .then(response => {
                        this.$toast.success({
                            title:'Success',
                            message:'Profile Updated',
                        })
                        console.log(response.data);
                        get_users_details()
                    })
                    .catch(error =>{
                        if(error.response){
                            for(const property in error.response.data){
                                this.errors.push(`${property}:${error.response.data.detail}`)
                            }
                        }
                    
                    })
                }
            
            },
            clearErrors(){
                this.errors.splice(0);
            },
            setAddress(place){
                this.address = place.formatted_address
                this.latitude =  place.geometry.location.lat()
                this.longitude =  place.geometry.location.lng()
            },
           
        },
        mounted(){
            this.get_users_details()

        }
    })
</script>
<style scoped>
    .img-fluid {
        width: 100px;
        height: 100px;
    }
</style>