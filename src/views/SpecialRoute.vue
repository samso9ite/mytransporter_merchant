<template>
<div>
    <SideBar />
     <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Special Routes</h2>
						<p class="text-light">List of all special routes </p>
					</div>	
				</div>
				<div class="row mb-4 align-items-center">
					<div class="col-xl-3 col-lg-4 mb-4 mb-lg-0">
						<a href="javascript:void(0);" class="btn btn-secondary  btn-lg btn-block rounded text-white" data-bs-toggle="modal" data-bs-target="#addNewRoute">+ Create Special Route</a>
						<!-- Add Order -->
						<div class="modal" id="addNewRoute" >
							<div class="modal-dialog" role="document" >
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">Create New Route</h5>
										<a href="javascript:void(0);" class="btn-close" data-bs-dismiss="modal"></a>
									</div>
									<div class="modal-body">
										<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
                                        </div>
										<form>
											<div class="mb-3">
												<label class="text-black font-w500">Land Mark One</label>
												<input type="text" class="form-control" v-model="landmark_one" placeholder="Idumota Lagos" required>
											</div>
											<div class="mb-3">
												<label class="text-black font-w500">Land Mark Two</label>
												<input type="text" class="form-control" v-model="landmark_two" placeholder="Isale Eko" required>
											</div>
											
											<div class="mb-3">
												<label class="text-black font-w500">Price</label>
												<input type="number" class="form-control" v-model="price" placeholder="1500">
											</div>
											 
											
											<div class="form-group">
												<button type="button" class="btn btn-primary" @click="createRoute">Create</button>
											</div
											>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-lg-8">
						<div class="card m-0 ">
							<div class="card-body py-3 py-md-2">
								<div class="d-sm-flex  d-block align-items-center">
									<div class="d-flex mb-sm-0 mb-3 me-auto align-items-center">
										<i class="fa fa-map-marker"> </i>
										<div class="media-body">
											<p class="mb-1 fs-12 ">Total Special Routes </p>
											<h3 class="mb-0 font-w600 fs-22">{{routes.length}} Routes</h3>
										</div>
									</div>
									<div>
								</div>
								</div>							
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="table-responsive rounded">
							<table id="example5" class="table Rider-table display mb-4 fs-14 card-table">
								<thead>
									<tr>
										<th>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="checkAll">
											  <label class="form-check-label" for="checkAll">
											  </label>
											</div>
										</th>
										<th>Landmark One</th>
										<th>Landmark Two</th>
										<th>Price</th>
										<th> Last Updated</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="route in routes" :key="route">
										<td>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
											  <label class="form-check-label" for="flexCheckDefault1">
											  </label>
											</div>
										</td>
										<td>{{route.landmark_one}}</td>
										<td>{{route.landmark_two}}</td>
										<td>{{route.price}}</td>
										<td>{{route.last_updated}}</td>
										<td>
											<div class="d-flex" >
												<a  data-bs-toggle="modal" :data-bs-target="`#routeUpdate` + route.route_id" class="">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#FF7B31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
												
												<div class="modal fade" :id="'routeUpdate' + route.route_id">
													<div class="modal-dialog" role="document">
														<div class="modal-content">
															<div class="modal-header">
																<h4>Update Route</h4>
																<a href="javascript:void(0);" class="btn-close" data-bs-dismiss="modal"></a>
															</div>
																<div class="modal-body">
																	<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
																		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
																		</button>
																		<span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
																	</div>
																	<form>
																		<div class="mb-3">
																			<label class="text-black font-w500">Land Mark One</label>
																			<input type="text"  class="form-control"  :value="landmark_one_update=route.landmark_one" placeholder="Idumota Lags" @input="landmark_one_update=$event.target.value" required>
																		</div>
																		<div class="mb-3">
																			<label class="text-black font-w500">Land Mark Two</label>
																			<input type="text" class="form-control" ref="landmark_two" :value="landmark_two_update=route.landmark_two" @input="landmark_two_update=$event.target.value" placeholder="Isale Eko" required>
																		</div>
																		
																		<div class="mb-3">
																			<label class="text-black font-w500">Price</label>
																			<input type="number" class="form-control" ref="price" :value="price_update=route.price" @input="price_update=$event.target.value" placeholder="1500">
																		</div>
																		
																		
																		<div class="form-group">
																			<button type="button" class="btn btn-primary" @click="updateRoute(route.route_id)">Update Route</button>
																		</div
																		>
																	</form>
																</div>
														</div>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
            </div>
			
        </div>
</div>   
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Api from "./Api"
    export default({
        name: 'AddSpecialRoute',
        components: {SideBar},
		data(){
			return{
				landmark_one: '',
				landmark_one_update: '',
				landmark_two_update: '',
				landmark_two: '',
				price: '',
				price_update: '',
				route_id: '',
				routes: [],
				errors: []		
			}
		},

		methods: {	
			getRoutes(){
				const merchant = JSON.parse(localStorage.getItem('merchant_id'))
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/special/routes/get', {merchant_id: merchant})
                .then(response => {
					console.log(response.data);
					this.routes = response.data
					console.log(this.routes);
				})
			},
			createRoute(){
				const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
				const formData = {
					landmark_one: this.landmark_one, landmark_two: this.landmark_two, merchant_id: merchant_token, price: this.price
				}
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/special/routes/addorupdate', formData) 
				.then(response => {
					console.log(response.data);
					this.$toast.success({
                        title:'Awesome!!!',
                        message:'Special Route Created',
                    })
					$('#addNewRoute').modal('hide')
					this.getRoutes()
				})
				.catch(error => {
					if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                    }
				})
			},
			updateRoute(route_id){
				const formData = {
					merchant_id : JSON.parse(localStorage.getItem('merchant_id')),
					landmark_one : this.landmark_one_update,
					landmark_two: this.landmark_two_update,
					price: this.price_update,
					route_id: route_id
				}	
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/special/routes/addorupdate', formData)
				.then(response => {
						this.$toast.success({
                        title:'Awesome!!!',
                        message:'Route has been updated',
                    })
					$('#routeUpdate').modal('hide')
				})
				.catch(error => {
					if(error.response){
					for(const property in error.response.data){
						this.errors.push(`${property}:${error.response.data.detail}`)
					}
				}
				})
			},
			clearErrors(){
                this.errors.splice(0);
            },
		},
		mounted() {
			this.getRoutes()
		}
    })
</script>


<style scoped>
	
	.btn-color{
		background-color: rgb(241 235 235 / 70%);   
	}
	.btn-secondary:hover {
		background-color: #ff6600 !important;
		border-color: #ff6600;
	}
	.modal { 
		background-color: rgba(0, 0, 0, 0.5)
	}

</style>