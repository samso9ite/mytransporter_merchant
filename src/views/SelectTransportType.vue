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
                    <div class="col-xl-12">
                        
						<div class="row">
							 <div class="col-xl-4 col-xxl-6 col-sm-6 "  v-for="type in types" :key="type">
								<div class="card typeStyle">
                                    <router-link :to="{name:'Asset', params:{type: type.transport_type.code}}">
                                        <div class="card-body pt-sm-4 pt-3 d-flex align-items-center justify-content-between typeStyle" >
                                            <div class="me-3">
                                                <img src="../statics/scooter.svg" width="80" v-if="type.transport_type.code === 'BIKE'"/>
                                                <img src="../statics/bicycle.svg" width="80" v-if="type.transport_type.code === 'BICYCLE'"/>
                                                <img src="../statics/shipped.svg" width="80" v-if="type.transport_type.code === 'VAN'"/>
                                                <img src="../statics/shipped.svg" width="80" v-if="type.transport_type.code === 'TRUCK'"/>
                                                <img src="../statics/drone.svg" width="80" v-if="type.transport_type.code === 'DRONE'"/>
                                                <img src="../statics/scooter.svg" width="80" v-if="type.transport_type.code === 'CAR'"/>
                                                
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
                                    </router-link>
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
import Api from "./Api.js"
export default {
    name:'SelectTransportType',
    components: {SideBar},
    data(){
        return{
            types: ''
        }
    },
    methods:{
       getTransportTypes(){
            const merchant_id = JSON.parse(localStorage.getItem('merchant_id'))
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/trasnport_types/get', {merchant_id:merchant_id})
                .then(response => { 
                    console.log(response.data);
                    this.types = response.data
                    console.log(this.types);
			    })
                .catch(err => { })
        },
    },
    mounted(){
        this.getTransportTypes()
        }
}
</script>

<style scoped>
	.donut-chart-sale small, .donut-chart-sale .small {
		position: relative !important;
	}
    .typeStyle :hover{
        background-color: #ff6600;
        border-radius: 10px;
        color: white;
    }
</style>