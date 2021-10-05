<template>
<div>
    <SideBar/>
      <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Dashboard</h2>
						<p class="text-light">Hello! How are you doing today!</p>
					</div>	
					<div class="input-group search-area2 d-xl-inline-flex mb-2 me-4">
						<button class="input-group-text"><i class="flaticon-381-search-2 text-primary"></i></button>
						<input type="text" class="form-control" placeholder="Search here...">
					</div>
					<div class="dropdown custom-dropdown mb-2 period-btn">
						<div class="btn btn-sm  d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false" role="button">
							<svg class="primary-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.167 5.83362H21.0003V3.50028C21.0003 3.19087 20.8774 2.89412 20.6586 2.67533C20.4398 2.45653 20.143 2.33362 19.8336 2.33362C19.5242 2.33362 19.2275 2.45653 19.0087 2.67533C18.7899 2.89412 18.667 3.19087 18.667 3.50028V5.83362H9.33362V3.50028C9.33362 3.19087 9.2107 2.89412 8.99191 2.67533C8.77312 2.45653 8.47637 2.33362 8.16695 2.33362C7.85753 2.33362 7.56079 2.45653 7.34199 2.67533C7.1232 2.89412 7.00028 3.19087 7.00028 3.50028V5.83362H5.83362C4.90536 5.83362 4.01512 6.20237 3.35874 6.85874C2.70237 7.51512 2.33362 8.40536 2.33362 9.33362V10.5003H25.667V9.33362C25.667 8.40536 25.2982 7.51512 24.6418 6.85874C23.9854 6.20237 23.0952 5.83362 22.167 5.83362Z" fill="#ff6600"/>
								<path d="M2.33362 22.1669C2.33362 23.0952 2.70237 23.9854 3.35874 24.6418C4.01512 25.2982 4.90536 25.6669 5.83362 25.6669H22.167C23.0952 25.6669 23.9854 25.2982 24.6418 24.6418C25.2982 23.9854 25.667 23.0952 25.667 22.1669V12.8336H2.33362V22.1669Z" fill="#ff6600"/>
							</svg>
							<div class="text-left ms-3">
								<span class="d-block text-black text-start">Change Periode</span>
								<small class="d-block text-light">August 28th - October 28th, 2021</small>
							</div>
							<i class="fa fa-caret-down text-light scale5 ms-3"></i>
						</div>
						<div class="dropdown-menu dropdown-menu-end">
							<a class="dropdown-item" href="javascript:void(0);">October 29th - November 29th, 2021</a>
							<a class="dropdown-item" href="javascript:void(0);">July 27th - Auguts 27th, 2021</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0">{{staffs}}</h2>
											<svg class="ms-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Staffs</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<div id="widgetChart1" class="chart-primary"></div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0"> ₦{{earnings}}</h2>
											<svg class="ms-2" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 -4.76837e-06C0.222201 -4.76837e-06 -0.670134 2.15428 0.589795 3.41421L7.78218 10.6066C8.56323 11.3876 9.82956 11.3876 10.6106 10.6066L17.803 3.41421C19.0629 2.15428 18.1706 -4.76837e-06 16.3888 -4.76837e-06H2.00401Z" fill="#FF3131"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Sales</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<div id="widgetChart2">
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<div class="d-flex align-items-center">
											<h2 class="chart-num font-w600 mb-0">{{all_orders}}</h2>
											<svg class="ms-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
											</svg>
										</div>
										<div>
											<h5 class="text-black font-w500 mb-0">Deliveries</h5>
										</div>
									</div>
									<div class="card-body pt-0">
										<canvas id="widgetChart3" height="60"></canvas>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-xxl-6 col-sm-6 ">
								<div class="card">
									<div class="card-body pt-sm-4 pt-3 d-flex align-items-center justify-content-between">
										<div class="me-3">
											<div class="d-flex align-items-center">
												<h2 class="chart-num font-w600 mb-0">45242</h2>
											</div>
											<div>
												<h5 class="text-black font-w500 mb-3 mt-2">Event Held</h5>
											</div>
											<div>
												<p class="text-primary fs-14 mb-0">
													<svg class="me-2 primary-icon" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns=	"http://www.w3.org/2000/svg">
														<path d="M2.00401 11.1924C0.222201 11.1924 -0.670134 9.0381 0.589795 7.77817L7.78218 0.585786C8.56323 -0.195262 9.82956 -0.195262 10.6106 0.585786L17.803 7.77817C19.0629 9.0381 18.1706 11.1924 16.3888 11.1924H2.00401Z" fill="#ff6600"/>
													</svg>
													2.4%
													<span class="op-6 text-light">than Last Week</span>
												</p>
											</div>
										</div>
										<div>
											<div class="d-inline-block position-relative donut-chart-sale">
												<span class="donut1" data-peity='{ "fill": ["rgb(14, 138, 116,1)", "rgba(240, 240, 240)"],   "innerRadius": 35, "radius": 10}'>5/8</span>
												<small class="text-black">66%</small>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					
					</div>
					<div class="col-xl-12">
						<div class="row">
							<div class="col-xl-6">
								<div class="card">
									<div class="card-header border-0 pb-0 flex-wrap">
										<h4 class="fs-20 font-w500">Deliveries Breakdown</h4>
										<div class="card-action coin-tabs">
											<ul class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a class="nav-link active" data-bs-toggle="tab" href="#bikeBicycle">
														Bike & Bicycle
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link " data-bs-toggle="tab" href="#vanTruck">
														Van & Truck
													</a>
												</li>
												<li class="nav-item">
													<a class="nav-link " data-bs-toggle="tab" href="#Drones">
														Drones
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card-body pt-2">
										<div class="tab-content">
											<div class="tab-pane fade active show" id="bikeBicycle">
												<div class="d-sm-flex d-block align-items-center justify-content-center">
													<div class="col-xl-6 col-xxl-5 text-center">
														<div id="donutChart2" class="donutChart2 d-inline-block"></div>
													</div>	
													<div class="col-xl-6 col-xxl-7">
														<p class="fs-12 mt-3"></p>
														<div class="d-flex  mt-4">
															<div class="me-4">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">{{bikeBicyclePendingOrders}}</h4>
																<span class="fs-14">Pending Deliveries</span>
															</div>
															<div class="me-4">
																<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#ff6600"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">{{bikeBicycleSuccessfulOrders}}</h4>
																<span class="fs-14">Successfull Deliveries </span>
															</div>
															<div class="">
																<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
																</svg>
																<h4 class="fs-18 text-black mb-0 font-w600">{{bikeBicycleCanceledOrders}}</h4>
																<span class="fs-14">Cancelled Deliveries</span>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="tab-pane fade " id="vanTruck">
											<div class="d-sm-flex d-block align-items-center justify-content-center">
												<div class="col-xl-6 col-xxl-5 text-center">
													<div id="donutChart2" class="donutChart2 d-inline-block"></div>
												</div>	
												<div class="col-xl-6 col-xxl-7">
													<p class="fs-12 mt-3"></p>
													<div class="d-flex  mt-4">
														<div class="me-4">
															<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{vanTruckPendingOrders}}</h4>
															<span class="fs-14">Pending Deliveries</span>
														</div>
														<div class="me-4">
															<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#ff6600"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{vanTruckSuccessfulOrders}}</h4>
															<span class="fs-14">Successfull Deliveries </span>
														</div>
														<div class="">
															<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{vanTruckCanceledOrders}}</h4>
															<span class="fs-14">Cancelled Deliveries</span>
														</div>
													</div>
												</div>
											</div>
											</div>
											<div class="tab-pane fade " id="Drones">
											<div class="d-sm-flex d-block align-items-center justify-content-center">
												<div class="col-xl-6 col-xxl-5 text-center">
													<div id="donutChart2" class="donutChart2 d-inline-block"></div>
												</div>	
												<div class="col-xl-6 col-xxl-7">
													<p class="fs-12 mt-3"></p>
													<div class="d-flex  mt-4">
														<div class="me-4">
															<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#FB3E7A"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{DronesPendingOrders}}</h4>
															<span class="fs-14">Pending Deliveries</span>
														</div>
														<div class="me-4">
															<svg class="primary-icon" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#ff6600"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{DronesSuccessfulOrders}}</h4>
															<span class="fs-14">Successfull Deliveries </span>
														</div>
														<div class="">
															<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="20" height="8" rx="4" fill="#C8C8C8"/>
															</svg>
															<h4 class="fs-18 text-black mb-0 font-w600">{{DronesCanceledOrders}}</h4>
															<span class="fs-14">Cancelled Deliveries</span>
														</div>
													</div>
												</div>
											</div>
											</div>

										</div>

										
									</div>
								</div> 
							</div>
							<div class="col-xl-6">
								<div class="card" style="background-color: #473b52;">
									<div class="card-body">
										<div class="d-sm-flex d-block pb-sm-3 align-items-end mb-2">
											<div class="me-auto pe-3 mb-3 mb-sm-0">
												<span class="chart-num-3 font-w200 d-block mb-sm-3 mb-2 text-white">Deliveries Made Today</span>
												<h2 class="chart-num-2 text-white mb-0">456,502<span class="fs-18 me-2 ms-3">pcs</span></h2>
											</div>
											<div class="d-flex flex-wrap mb-3 mb-sm-0">
												<svg width="87" height="58" viewBox="0 0 87 58" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M18.4571 37.6458C11.9375 44.6715 4.81049 52.3964 2 55.7162H68.8125C77.6491 55.7162 84.8125 48.5528 84.8125 39.7162V2L61.531 31.9333C56.8486 37.9536 48.5677 39.832 41.746 36.4211L37.3481 34.2222C30.9901 31.0432 23.2924 32.4352 18.4571 37.6458Z" fill="url(#paint0_linear)"/>
													<path d="M2 55.7162C4.81049 52.3964 11.9375 44.6715 18.4571 37.6458C23.2924 32.4352 30.9901 31.0432 37.3481 34.2222L41.746 36.4211C48.5677 39.832 56.8486 37.9536 61.531 31.9333L84.8125 2" stroke="white" stroke-width="4" stroke-linecap="round"/>
													<defs>
													<linearGradient id="paint0_linear" x1="43.4062" y1="8.71453" x2="46.7635" y2="55.7162" gradientUnits="userSpaceOnUse">
													<stop stop-color="white" offset="0"/>
													<stop offset="1" stop-color="white" stop-opacity="0"/>
													</linearGradient>
													</defs>
												</svg>
												<div class="ms-3">
													<p class="fs-20 mb-0 font-w500 text-white">+4%</p>
													<span class="fs-12 text-white">than last day</span>
												</div>
											</div>
										</div>
										<div class="progress style-1" style="height:15px;">
											<div class="progress-bar bg-white progress-animated" style="width: 55%; height:15px;" role="progressbar">
												<span class="sr-only">55% Complete</span>
												<span class="bg-white arrow"></span>
												<span class="font-w600 counter-bx text-black"><strong class="counter font-w400">985pcs Left</strong></span>
											</div>
										</div>
										<p class="fs-12 text-white pt-4"> We do the hard work for you, searching and getting you the right customer that pays.</p>
										<a href="https://mytransporter.io/" class="text-white">View detail<i class="las la-long-arrow-alt-right scale5 ms-3"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-xxl-8 mb-3" >
						<div class="row">
							<div class="col-xl-12">
								
									<div class="card event-bx" >
										<div class="card-header border-0 mb-0">
											<h4 class="fs-20">Pending Orders</h4>
										</div>
										<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
										<perfect-scrollbar>
											<div class="card-body pt-0" id="EventListContent">
												
												<div class="media event-list pb-3 border-bottom mb-3" v-for="order in pending_orders" :key="order">
													
													<div class="media-body">
														<h4 class="fs-18 mb-sm-0 mb-2"><a href="javascript:void(0);" class="text-black">{{order.item_description}}</a></h4>
														<span class="fs-14 d-block mb-sm-3 mb-2 text-secondary">{{order.pickup_location}}</span>
														<p class="fs-12">{{order.extra_description}}</p>
													</div>
													<div class="media-footer">
														<div class="text-center">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-money" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">₦{{order.transport_fee}}</div>
														</div>
														<div class="text-center"  v-if="order.transport_type.name === 'TRUCK'">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-truck" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">Truck Delivery</div>
														</div>
														<div class="text-center"  v-if="order.transport_type.name === 'BIKE'">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-motorcycle" aria-hi dden="true"></i>
															</span>
															<div class="fs-12 text-primary">Bike Delivery</div>
														</div>
														<div class="text-center"  v-if="order.transport_type.name === 'DRONE'">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-truck" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">Drone Delivery</div>
														</div>
														<div class="text-center"  v-if="order.transport_type.name === 'BICYCLE'">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-bicycle" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">Bicycle Delivery</div>
														</div>
															<div class="text-center"  v-if="order.transport_type.name === 'VAN'">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-bicycle" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">Van Delivery</div>
														</div>
														<div class="text-center">
															<span class="ticket-icon-1 mb-3">
																<i class="fa fa-clock-o" aria-hidden="true"></i>
															</span>
															<div class="fs-12 text-primary">{{order.expected_pickup_time}}</div>
														</div>
														<div class="text-center">
															<span class="ticket-icon-1 mb-3">
																<div class="btn sharp btn-primary tp-btn" data-bs-toggle="dropdown">
																	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><circle fill="#000000" cx="12" cy="5" r="2"/><circle fill="#000000" cx="12" cy="12" r="2"/><circle fill="#000000" cx="12" cy="19" r="2"/></g></svg>
																</div>
																<div class="dropdown-menu dropdown-menu-end">
																	<a class="dropdown-item" @click="approveOrder(order.reference)">Approve Order</a>
																	<a class="dropdown-item" @click="rejectOrder(order.reference)">Reject Order</a>
																	<!-- <a class="dropdown-item" href="#">Option 3</a> -->
																</div>
															</span>
															<div class="fs-12 text-primary">Action</div>
														</div>
													</div>
												</div>
											</div>
										</perfect-scrollbar>
									</div>
							
							</div>
								</div>	
					</div>
					<div class="col-xl-3 col-xxl-4">
						<div class="row">
							<div class="col-xl-12">
								<div class="card overflow-hidden">
									<div class="card-body">
										<div class="text-center">
											<div class="profile-photo">
												<img src="images/wallet.svg" width="60" class="img-fluid" alt="">
											</div>
											<h3 class="mt-4 mb-1">Wallet</h3>
											<!-- <p class="text-muted">Senior Manager</p> -->
											<router-link :to="'/transactions'"><a class="btn btn-outline-primary btn-rounded mt-3 px-5" >Withdraw</a></router-link>

											<div class="modal fade modal fade bd-example-modal-lg" id="exampleModalCenter">
												<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title"><b>My Credit Cards</b></h5>
															<button type="button" class="btn-close" data-bs-dismiss="modal">
															</button>
														</div>
														
														<div class="modal-footer">
															<button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
															<button type="button" class="btn btn-primary">Withdraw</button>
														</div>
													</div>
												</div>
											</div>
											
										</div>
									</div>
									
									<div class="card-footer pt-0 pb-0 text-center">
										<div class="row">
											<div class="col-6 pt-3 pb-3 border-end">
												<h3 class="mb-1">₦{{pending_wallet_balance}}</h3><span>Pending</span>
											</div>
											<div class="col-6 pt-3 pb-3 border-end">
												<h3 class="mb-1">₦{{wallet_balance}}</h3><span>Available</span>
											</div>
											<!-- <div class="col-4 pt-3 pb-3">
												<h3 class="mb-1">₦45</h3><span>Referral</span>
											</div> -->
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
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import SideBar from '../components/SideBar.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Api from './Api'
export default ({
    name:'Dashboard',
    components:{SideBar,  PerfectScrollbar, PulseLoader},
    data(){
        return{
			pending_orders: [],
			orders : [],
			all_orders: '',
			earnings: '',
			wallet_balance: JSON.parse(localStorage.getItem('wallet_balance')),
			pending_wallet_balance: JSON.parse(localStorage.getItem('pending_wallet_balance')),
			staffs: '',
			loading: false
        }
    },
	props: {
		color: 'black',
		
	},
	methods: {
		getPendingOrders(){
			this.loading = true
			const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
			Api.axios_instance.post(Api.baseUrl+'/merchant/portal/orders/get/', {merchant_id:merchant_token})
			.then(response =>{
				this.pending_orders = response.data.pending_orders
				this.all_orders = response.data.orders.count
				this.earnings = response.data.earnings
				console.log(response.data);
			})
			.catch(err => {
				console.log(err.response);
			})
			.finally(() => {
				this.loading = false
			})
			Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/get/', {merchant_id:merchant_token})
			.then(res => {
				this.staffs = res.data.length
			})
		},
		approveOrder(order_reference){
			console.log(order_reference);
			const postData = {
				merchant_id: JSON.parse(localStorage.getItem('merchant_id')),
				order_reference: order_reference
			}
			Api.axios_instance.post(Api.baseUrl+'/merchant/portal/orders/accept', postData)
			.then(response => {
				this.$toast.success({
                        title:'Awesome!!!',
                        message:'Order approved',
                })
			})
			.catch(err => {
				console.log(err.response);
			})
		},
		rejectOrder(order_reference){
			const postData = {
				merchant_id: JSON.parse(localStorage.getItem('merchant_id')),
				order_reference: order_reference
			}
			Api.axios_instance.post(Api.baseUrl+'/merchant/portal/orders/reject', postData)
			.then(response => {
				this.$toast.success({
                        title:'Awesome!!!',
                        message:'Order rejected',
                })
			})
			.catch(err => {
				// if(err.response){

				// }
			})
		}
	},
	mounted(){
		this.getPendingOrders()
	},
	computed: {
		bikeBicyclePendingOrders: function () {
			return this.pending_orders.filter(order => order.transport_type.name === 'BIKE' || order.transport_type.name === 'BICYCLE').length
		},
		bikeBicycleSuccessfulOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'BIKE' && order.status.name === 'Completed' || order.transport_type.name === 'BICYCLE' && order.status.name === 'Completed').length
		},
		bikeBicycleCanceledOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'BIKE' && order.status.name === 'Cancel' || order.transport_type.name === 'BICYCLE' && order.status.name === 'Cancel').length
		},
		vanTruckPendingOrders: function () {
			return this.pending_orders.filter(order => order.transport_type.name === 'VAN' || order.transport_type.name === 'TRUCK').length
		},
		vanTruckSuccessfulOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'VAN' && order.status.name === 'Completed' || order.transport_type.name === 'TRUCK' && order.status.name === 'Completed').length
		},
		vanTruckCanceledOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'VAN' && order.status.name === 'Cancel' || order.transport_type.name === 'TRUCK' && order.status.name === 'Cancel').length
		},
		DronesPendingOrders: function () {
			return this.pending_orders.filter(order => order.transport_type.name === 'DRONES').length
		},
		DronesSuccessfulOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'DRONES' && order.status.name === 'Completed').length
		},
		DronesCanceledOrders: function (){
			return this.orders.filter(order => order.transport_type.name === 'DRONES' && order.status.name === 'Cancel').length
		},
		
	}
})
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>