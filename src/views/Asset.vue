<template>
<div>
    <SideBar/>
    <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
                 <div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active" ><a href="/asset">Asset</a></li>
					</ol>
                </div>
				<div class="row">

                    <div class="col-xl-10">
                        <div class="card">
                            <div class="card-body">
                                
                                <div class="row">
                                    <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                        </button>
                                        <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                </div>
                                    <h3 class="mb-3" style="margin-bottom:30px">SET ALL {{$route.params.type}} DETAILS</h3><br><br>
                                    <!-- <AssetForm v-for="asset in assets" :key="asset" v-on:selectTeams="getTeams"/> -->
                                     <div class="col-lg-4 order-lg-2 mb-4">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span class="text-muted">Upload bike pictures</span>
                                            <span class="badge badge-primary badge-pill">1</span>
                                        </h4>
                                    <form ref="image"> 
                                        <ul class="list-group mb-3">
                                            <li class="list-group-item d-flex justify-content-between lh-condensed">
												<div class="input-group mb-3">
													<span class="input-group-text">Full Picture</span>
													<div class="form-file">
                                                         <input type="file" id="file" ref="file" class="form-file-input form-control" v-on:change="handleFileUpload()">
														<!-- <input type="file" class="form-file-input form-control" v-on:change="handleFileUpload()"> -->
													</div>
												</div>
                                              </li>
                                        </ul>
                                    </form>
        </div>
        <div class="col-lg-8 order-lg-1">
            
         <form ref="textDetails">
                <div class="row">
                    <div class="mb-3">
                        <label for="email"  class="form-label" v-if="transport-type === 'BICYCLE'">Asset Number</label>
                         <input type="email" class="form-control" id="email" placeholder="XXX-XXX-XXX"  required v-model="asset_no" >
                        <div class="invalid-feedback">
                            Please enter a valid plate number 
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">Asset Color </label>
                        <input type="text" class="form-control" placeholder="Green" required v-model="asset_color">
                        <div class="invalid-feedback">
                            Bajaj
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName"  class="form-label">Asset Manufacturer </label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required v-model="asset_manufacturer">
                        <div class="invalid-feedback">
                            
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Year Purchased </label>
                        <input type="year" class="form-control" required v-model="asset_year"> 
                        <div class="invalid-feedback">
                            2020
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName"  class="form-label">Assigned User </label>
                        <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="assigned_user" >
                            <option v-for="team in teams" :key="team" :value="team.user.uid">{{team.user.first_name}} {{team.user.last_name}}</option>
                        </select>
                    </div>
                     <div class="col-lg-12">
                        <label class="form-label">Asset Description</label>  
                        <textarea class="form-control" placeholder="Type your message..." v-model="asset_description"></textarea>
                    </div>
                </div>
                <hr class="mb-4">
                
            </form>
        </div>
            </div>
        </div>
        <div class="col-lg-12">
            <button class="btn btn-primary btn-lg btn-block" @click="updateAsset()" v-if="['Update'].includes($route.name)"> Update Details  </button>
            <button class="btn btn-primary btn-lg btn-block" @click="createAsset()" v-else-if="['Asset'].includes($route.name)"> Save Details  </button>
            
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
import AssetForm from '../components/AssetForm.vue'
import Api from "./Api.js"
export default ({
  name: 'Asset',
  components: { SideBar, AssetForm },
  data(){
    return{
        teams: [],
        update_asset_id: '',
        all_assets: [],
        asset: '',
        file: '',
        back_img: '',
        asset_no: '',
        asset_color: '',
        asset_manufacturer: '',
        asset_year:  '',
        asset_description: '',
        transport_type: '',
        assigned_user: '',
        create: false,
        assets: [{
          
        }],
        errors: []
    }
  },

methods: {
    getTeams(){
        const merchant = JSON.parse(localStorage.getItem('merchant_id'))
        Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/get/', {merchant_id: merchant})
        .then(response => {
            this.teams = response.data
        })
    },
    getAssetDetails(){
        const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
        this.getTeams()
        console.log(this.teams);
        this.update_asset_id = this.$route.params.id
        Api.axios_instance.post(Api.baseUrl+'/merchant/portal/assets/get', {merchant_id:merchant_token})
            .then(res => {
                this.all_assets = res.data
                this.asset = this.all_assets.filter(asset => asset.asset_id === this.update_asset_id)[0]
                this.asset_no = this.asset.asset_no
                this.file = this.asset.image
                this.asset_color = this.asset.asset_colour
                this.asset_manufacturer = this.asset.asset_manufacturer
                this.asset_year = this.asset.asset_year
                this.assigned_year = this.asset.assigned_year
                this.asset_description = this.asset.asset_description
                this.transport_type = this.asset.transport_type
                let default_user = this.teams.filter(team => team.email_address === this.asset.assigned_user)
                this.assigned_user= default_user[0].user.uid
            })
    },
    // assign_user(){
        
    // }
    handleFileUpload(){
        this.file = this.$refs.file.files[0];
        },
  
    createAsset(){
        const merchant = JSON.parse(localStorage.getItem('merchant_id'))
            this.transport_type = this.$route.params.type
            const formData = new FormData()
                formData.append('image', this.file)
                formData.append('asset_no', this.asset_no)
                formData.append('asset_manufacturer', this.asset_manufacturer)
                formData.append('asset_year', this.asset_year)
                formData.append('assigned_year', this.assigned_year)
                formData.append('asset_description', this.asset_description)
                formData.append('transport_type', this.transport_type)
                formData.append('assigned_user', this.assigned_user)
                formData.append('merchant_id', merchant)
                formData.append('asset_colour', this.asset_color)
        Api.axios_instance.post(Api.baseUrl+'/merchant/portal/assets/addorupdate', formData)
        .then(res => {
             this.$toast.success({
                title:'Success',
                message:'Asset Added',
            })
            this.$refs.image.reset(); 
            this.$refs.textDetails.reset(); 
        })
        .catch(err => {
            console.log(err.response)
        })
    },
    

    updateAsset(){
        const merchant = JSON.parse(localStorage.getItem('merchant_id'))
        this.update_asset_id = this.$route.params.id
        const formData = new FormData()
            formData.append('image', this.file)
            formData.append('asset_no', this.asset_no)
            formData.append('asset_manufacturer', this.asset_manufacturer)
            formData.append('asset_year', this.asset_year)
            formData.append('asset_description', this.asset_description)
            formData.append('transport_type', this.transport_type)
            formData.append('assigned_user', this.assigned_user)
            formData.append('merchant_id', merchant)
            formData.append('asset_id', this.update_asset_id)
            formData.append('asset_colour', this.asset_color)
        Api.axios_instance.post(Api.baseUrl+'/merchant/portal/assets/addorupdate', formData)
        .then(res => {
            console.log(res.data);
             this.$toast.success({
                title:'Success',
                message:'Asset Updated',
            })
            this.$router.push('/asset-list')
            this.getAssetDetails()
       })
        .catch(err => {
            if(error.response){
                for(const property in error.response.data){
                    this.errors.push(`${error.response.data[property]}`)
                }
            }
            // console.log(err.response)
        })
    },
    clearErrors(){
        this.errors.splice(0);
    },
},
mounted: async function(){
    await this.getTeams()
    this.getAssetDetails()
}
})
</script>