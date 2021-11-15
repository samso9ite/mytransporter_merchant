<template>
<div>
    <SideBar/>
         <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item"><a href="/asset-list">Asset List</a></li>
					</ol>
                </div>
				<!-- <div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Order List</h2>
						<p class="text-light">View All Orders</p>
					</div>	
				</div> -->

				<router-link :to="'/select-transport-type'"> <button class="btn btn-rounded btn-large btn-primary" type="submit"> Add Asset  </button></router-link>
				<div class="row mb-4 align-items-center">
    			<div class="col-lg-12">
						<div class="table-responsive table-hover fs-14">
							<table class="table mb-4 dataTablesCard card-table" id="orderTable">
								<thead>
									<tr>
										<th>
											<div class="form-check checkbox-secondary" >
											  <input class="form-check-input" type="checkbox" value="" id="checkAll">
											  <label class="form-check-label" for="checkAll">
											  </label>
											</div>
										</th>
										<th>Transport Type</th>
										<th>Asset Number</th>
										<th>Manufacturer </th>
										<th> Color</th>
										<th>Year</th>
										<th>User</th>
										<th>Description</th>
										<th>Picture</th>
										<th> Action </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="asset in assets" :key="asset">
										<td>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
											  <label class="form-check-label" for="flexCheckDefault2">
											  </label>
											</div>
										</td>
										<td> {{asset.transport_type}} </td>
										<td> {{asset.asset_no}}</td>
										<td>{{asset.asset_manufacturer}}</td>
										<td class="wspace-no">{{asset.asset_colour}}</td>
										<td>{{asset.asset_year}}</td>
										<td>{{asset.assigned_user}}</td>
										<td>{{asset.asset_description}}</td>
										<td>
											<div class="d-flex">
												<a data-bs-toggle="modal" :data-bs-target="`#viewDetails`+asset.asset_id"  class="btn  shadow btn-xs sharp me-1" style="color:#ff6600"><i class="fa fa-eye"></i></a>
											</div>
										</td>
										<td> 
											<div class="d-flex">
												 <router-link :to="{path:'/assetUpdate/'+ asset.asset_id}"> <a>
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#FF7B31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
                                                </router-link>
											</div>
										</td>
										<div class="modal fade" :id="'viewDetails'+asset.asset_id">
								    <div class="modal-dialog modal-xl" role="document">
									<div class="modal-content">
										<div class="modal-header">
											<a href="javascript:void(0);" class="btn-close" data-bs-dismiss="modal" ></a>
										</div>
										<div class="modal-body profile">
											<div class="text-center">
												<img :src="asset.image" alt="" v-if="asset.image !== null">
												<h3> </h3>
											</div>
										</div>
                                        </div>
                                    </div>
							            </div>
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
import Api from './Api'
    export default({
        name: 'AssetList',
        components: {SideBar},
        data(){
            return{
                assets: []
            }
        },
        methods: {
            getAssetList(){
                const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
			    Api.axios_instance.post(Api.baseUrl+'/merchant/portal/assets/get', {merchant_id:merchant_token})
                .then(res => {
                    this.assets = res.data
                    console.log(res.data);
                    
                })
                .catch(err => {
                    console.log(err.response)
                })
            }
        },
        mounted(){
            this.getAssetList()
        }
    })
</script>