<template>
    <div>
        <SideBar />
          <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
                <div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active" ><a href="/rate">Transport Rate</a></li>
					</ol>
                </div>
				<div class="row">
                    <div class="col-xl-8">     
						<div class="row">
							 <div class="col-xl-4 col-xxl-6 col-sm-6 "  v-for="type in Rates" :key="type">
								<div class="card">
									<div class="card-body pt-sm-4 pt-3 d-flex align-items-center justify-content-between" >
										<div class="me-3">
											 <img src="../statics/scooter.svg" width="80" v-if="type.transport_type.code === 'BIKE'"/>
                                             <img src="../statics/bicycle.svg" width="80" v-if="type.transport_type.code === 'BICYCLE'"/>
                                             <img src="../statics/shipped.svg" width="80" v-if="type.transport_type.code === 'VAN'"/>
											 <img src="../statics/shipped.svg" width="80" v-if="type.transport_type.code === 'TRUCK'"/>
                                             <img src="../statics/drone.svg" width="80" v-if="type.transport_type.code === 'DRONE'"/>
                                             <img src="../statics/scooter.svg" width="80" v-if="type.transport_type.code === 'CAR'"/>
											<div>
												<h5 class="text-black font-w500 mb-3 mt-2">Delivery Rate</h5>
											</div>
											<div>
												<p class="text-primary fs-14 mb-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" fill="#ff6600" v-if="type.is_active === true"/> <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" fill="#ff6600" v-if="type.is_active === false"/></svg>
													 <strong> ₦{{type.rate}}</strong>
													<span class="op-6 text-light"> Per Kilometre</span>
												</p>
											</div>
										</div>
										<div>
											<div class="d-inline-block position-relative donut-chart-sale">
												<small class="text-black" v-if="type.transport_type.code === 'BIKE'">Bike </small>
                                                <small class="text-black" v-if="type.transport_type.code === 'BICYCLE'">Bicycle </small>
                                                <small class="text-black" v-if="type.transport_type.code === 'TRUCK'">Truck </small>
                                                <small class="text-black" v-if="type.transport_type.code === 'VAN'">Van </small>
                                                <small class="text-black" v-if="type.transport_type.code === 'DRONE'">Drone </small>
                                                <small class="text-black" v-if="type.transport_type.code === 'CAR'">Car </small>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
                     <div class="col-xl-4">
                          <div class="card card-body px-3 pt-3 pb-0">
                               <div class="custom-tab-1">
                                     <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                    </div>
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item"><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show">Set Rate</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="profile-settings" class="tab-pane fade active show">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                        <form @submit.prevent="update_profile">
                                                            <div class="row col-mb-3">
                                                           
                                                                <div class="row" style="margin-top:2em">
                                                                    <div class="col-lg-5">
                                                                    <h5 style="margin-top:1em"> Transport Type:</h5>
                                                                    </div> 
                                                                    <div class="col-lg-7">
                                                                        <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="transport_type"  @change="rateChange">
                                                                           <option value="" selected disabled>---Select Transport Type---</option>
                                                                            <option :value="type.transport_type.code" v-for="(type, index) in Rates" :key="index">{{type.transport_type.code}}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="row"  style="margin-top:1em">
                                                                    <div class="col-lg-5">
                                                                    <h5 style="margin-top:1em"> Amount:</h5>
                                                                    </div> 
                                                                    <div class="col-lg-7">

                                                                        <input type="number" class="form-control" placeholder="0.00" v-model="rate" required>
                                                                    </div>
                                                                </div>
                                                                <div class="row"  style="margin-top:1em">
                                                                    <div class="col-lg-5">
                                                                    <h5 style="margin-top:1em">Lowest Capped Amount:</h5>
                                                                    </div> 
                                                                    <div class="col-lg-7">

                                                                        <input type="number" class="form-control" placeholder="0.00" v-model="capped_amount" required>
                                                                    </div>
                                                                </div>
                                                                <div class="row " style="margin-top:2em; ">
                                                                    <div class="col-lg-12">    
                                                                   <div class="form-check">
                                                                       <label class="form-check-label">
                                                                           <h5>Set Active Status</h5>
                                                                        </label>
                                                                        <input class="form-check-input" type="checkbox" v-model="is_active">
                                                                        
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                             </div>
                                                            <div class="row text-center" style="margin-top:2em">
                                                                <div class="col-lg-2"></div>
                                                                    <div class="col-lg-8 text-center">
                                                                        <a class="btn btn-secondary btn-lg btn-block text-white dz-load-more" @click="updateRate">Update Settings</a>
                                                                    </div>
                                                                <div class="col-lg-2"></div>
                                                            </div>
                                                        </form>
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
        name: 'Rate',
        components: {SideBar},
        data(){
            return{
                rate: '',
                transport_type: '',
                is_active: false,
                types: [],
                selectedRate: 0.00,
                selectedRateActive: '',
                capped_amount: 0.00,
                errors: []
            }
        },
        methods: {
            updateRate(){
                const formData = {
                    rate: this.rate,
                    transport_type_code: this.transport_type,
                    is_active: this.is_active,
                    merchant_id : JSON.parse(localStorage.getItem('merchant_id')),
                    lowest_capped_amount: this.capped_amount
                }
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/rate/update', formData)
                .then(response => {
                    this.$toast.success({
                        title:'Awesome!!!',
                        message:'Rate has been updated',
                    })
                    if (this.$store.state.user.is_verified == false){
                        this.$router.push('/headsup')
                   }
                   this.getRates()
                  })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${error.response.data[property]}`)
                        }
                    }
                })
            },
            rateChange(){
                let check = this.types.filter(type => type.transport_type.code === this.transport_type)
                this.is_active = check[0].is_active
                this.rate = check[0].rate
                this.capped_amount = check[0].lowest_capped_amount
            },
            getRates(){
                const merchant_id = JSON.parse(localStorage.getItem('merchant_id'))
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/trasnport_types/get', {merchant_id:merchant_id})
                .then(response => { 
                    this.types = response.data
                    this.$store.commit('getRates', {all_rate:response.data})
			    })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${error.response.data[property]}`)
                        }
                    }
                })
            },
            clearErrors(){
                this.errors.splice(0);
            },
        },
        mounted(){
            this.getRates()
        },
        computed:{
	         Rates: function(){
			   return this.$store.state.all_rate
		   }
        }

    })
</script>
<style scoped>
	.donut-chart-sale small, .donut-chart-sale .small {
		position: relative !important;
	}
    .btn-secondary:hover {
    background-color: #ff6600;
    border-color: #ff5430;
}
</style>
