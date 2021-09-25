<template>
    <div>
        <SideBar />
         <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">Dashboard</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Order List</a></li>
					</ol>
                </div>
			<div class="row mb-4 align-items-center">
					<div class="col-xl-9">
						<div class="card m-0 ">
							<div class="card-body px-4 py-3 py-lg-2">
								<div class="row align-items-center">
									<div class="col-xl-3 col-xxl-12 col-lg-12 my-2">
										<div class="media align-items-center style-2">
											<span class="me-3">
												<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="3.54545" height="26" rx="1.77273" transform="matrix(-1 0 0 1 24.8181 0)" fill="#FB3E7A"/>
													<rect width="3.54545" height="18.9091" rx="1.77273" transform="matrix(-1 0 0 1 17.7272 7.09088)" fill="#FB3E7A"/>
													<rect width="3.54545" height="8.27273" rx="1.77273" transform="matrix(-1 0 0 1 10.6362 17.7273)" fill="#FB3E7A"/>
													<rect width="4" height="16" rx="2" transform="matrix(-1 0 0 1 4 10)" fill="#FB3E7A"/>
												</svg>
											</span>
											<div class="media-body ml-1">
												<p class="mb-0 fs-12">Total Income</p>
												<h4 class="mb-0 font-w600  fs-22">₦126,000</h4>
											</div>
										</div>
									</div>
									<div class="col-xl-7 col-xxl-12 col-lg-12">
										<div class="row align-items-center">
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect width="3.54545" height="26" rx="1.77273" transform="matrix(-1 0 0 1 24.8181 0)" fill="#FB3E7A"/>
															<rect width="3.54545" height="18.9091" rx="1.77273" transform="matrix(-1 0 0 1 17.7272 7.09088)" fill="#FB3E7A"/>
															<rect width="3.54545" height="8.27273" rx="1.77273" transform="matrix(-1 0 0 1 10.6362 17.7273)" fill="#FB3E7A"/>
															<rect width="4" height="16" rx="2" transform="matrix(-1 0 0 1 4 10)" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Successfull Deliveries</p>
														<h4 class="mb-0 font-w600  fs-22">16,000</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3124 0.990819C30.1459 1.71561 30.234 2.97887 29.5092 3.81239L20.7578 13.8765C19.359 15.4851 16.9444 15.7141 15.2681 14.397L11.1176 11.1359L3.87074 17.9564C3.06639 18.7135 1.80064 18.6751 1.04361 17.8708C0.286573 17.0664 0.324929 15.8007 1.12928 15.0436L8.3761 8.22309C9.817 6.86695 12.0329 6.76812 13.5888 7.99062L17.7394 11.2518L26.4908 1.18767C27.2156 0.354158 28.4788 0.266024 29.3124 0.990819Z" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Pending Deliveries</p>
														<h4 class="mb-0 font-w600  fs-22">765 Person</h4>
													</div>
												</div>
											</div>
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#C8C8C8"/>
															<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 0.686289C14.7205 0.233951 13.3682 0 11.9999 0V3.93696C13.4442 3.93696 14.8619 4.32489 16.105 5.06021C17.3481 5.79553 18.3708 6.85124 19.0664 8.117C19.7619 9.38277 20.1047 10.8121 20.0589 12.2557C20.0131 13.6992 19.5804 15.104 18.806 16.3231C18.0317 17.5422 16.9441 18.531 15.6569 19.186C14.3697 19.8411 12.9302 20.1384 11.4888 20.0468C10.0475 19.9553 8.65715 19.4783 7.46319 18.6656C6.26922 17.853 5.31544 16.7346 4.70154 15.4273L1.13794 17.1007C1.71955 18.3393 2.50612 19.4639 3.45939 20.4297C4.00364 20.9811 4.60223 21.4807 5.24803 21.9203C7.02498 23.1297 9.09416 23.8396 11.2393 23.9759C13.3845 24.1121 15.5268 23.6697 17.4425 22.6948C19.3582 21.7199 20.9768 20.2483 22.1293 18.4339C23.2818 16.6195 23.9257 14.5289 23.9939 12.3805C24.062 10.2321 23.5519 8.10484 22.5167 6.22104C21.4816 4.33724 19.9595 2.76605 18.1094 1.6717C17.4371 1.27398 16.7304 0.944541 15.9999 0.686289Z" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Cancelled Deliveries</p>
														<h4 class="mb-0 font-w600 fs-22">72
															<svg class="ml-2" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M0 6L6 2.62268e-07L12 6" fill="#13B497"></path>
															</svg>
														</h4>
													</div>
												</div>
											</div>

											
										</div>
									</div>
									<div class="col-xl-2 col-xxl-12 my-2">
										<div class="dropdown d-inline-block">
											<div class="dropdown-toggle mb-0 fs-18 " data-bs-toggle="dropdown">
												<span class="font-w400 text-primary">Select  Type</span>
											</div>
											<div class="dropdown-menu dropdown-menu-left">
												<a class="dropdown-item" href="javascript:void(0);">Successfull Orders</a>
												<a class="dropdown-item" href="javascript:void(0);">Pending Orders</a>
												<a class="dropdown-item" href="javascript:void(0);">Cancelled Orders</a>
											</div>
										</div>
									</div>
								</div>							
							</div>
						</div>
					</div>
					<div class="col-xl-3 align-self-start mt-3 mt-xl-0 Generate">
						<a href="#" class="btn btn-secondary d-block"><i class="fa fa-file-text-o scale5 me-3"></i>Generate Order Report</a>
					</div>	
				</div>
				<div class="col-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Successfull Orders</h4>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								<table id="example4" class="display" style="min-width: 845px">
									<thead>
										<tr>
											<th>Roll No</th>
											<th>Customer Name</th>
											<th>Customer number</th>
											<th>Item Delivered </th>
											<th>Rider </th>
											<th>Status </th>
											<th>Date</th>
											<th>Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>01</td>
											<td>Tiger Nixon</td>
											<td>#54605</td>
											<td>Library</td>
											<td>Cash</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/04/25</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>02</td>
											<td>Garrett Winters</td>
											<td>#54687</td>
											<td>Library</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2011/07/25</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>03</td>
											<td>Ashton Cox</td>
											<td>#35672</td>
											<td>Tuition</td>
											<td>Cash</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2009/01/12</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>04</td>
											<td>Cedric Kelly</td>
											<td>#57984</td>
											<td>Annual</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2012/03/29</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>05</td>
											<td>Airi Satou</td>
											<td>#12453</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2008/11/28</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>06</td>
											<td>Brielle Williamson</td>
											<td>#59723</td>
											<td>Tuition</td>
											<td>Cash</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2012/12/02</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>07</td>
											<td>Herrod Chandler</td>
											<td>#98726</td>
											<td>Tuition</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2012/08/06</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>08</td>
											<td>Rhona Davidson</td>
											<td>#98721</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2010/10/14</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>09</td>
											<td>Colleen Hurst</td>
											<td>#54605</td>
											<td>Annual</td>
											<td>Cheque</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2009/09/15</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>10</td>
											<td>Sonya Frost</td>
											<td>#98734</td>
											<td>Tuition</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2008/12/13</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>11</td>
											<td>Jena Gaines</td>
											<td>#12457</td>
											<td>Tuition</td>
											<td>Cash</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2008/12/19</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>12</td>
											<td>Quinn Flynn</td>
											<td>#36987</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2013/03/03</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>13</td>
											<td>Charde Marshall</td>
											<td>#98756</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2008/10/16</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>14</td>
											<td>Haley Kennedy</td>
											<td>#98754</td>
											<td>Library</td>
											<td>Cash</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2012/12/18</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>15</td>
											<td>Tatyana Fitzpatrick</td>
											<td>#65248</td>
											<td>Annual</td>
											<td>Cheque</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2010/03/17</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>16</td>
											<td>Michael Silva</td>
											<td>#75943</td>
											<td>Tuition</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2012/11/27</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>17</td>
											<td>Paul Byrd</td>
											<td>#87954</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2010/06/09</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>18</td>
											<td>Gloria Little</td>
											<td>#98746</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2009/04/10</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>19</td>
											<td>Bradley Greer</td>
											<td>#98674</td>
											<td>Annual</td>
											<td>Cash</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2012/10/13</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>20</td>
											<td>Dai Rios</td>
											<td>#69875</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2012/09/26</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>21</td>
											<td>Jenette Caldwell</td>
											<td>#54678</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/09/03</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>22</td>
											<td>Yuri Berry</td>
											<td>#98756</td>
											<td>Tuition</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2009/06/25</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>23</td>
											<td>Caesar Vance</td>
											<td>#86754</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2011/12/12</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>24</td>
											<td>Doris Wilder</td>
											<td>#34251</td>
											<td>Annual</td>
											<td>Cash</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2010/09/20</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>25</td>
											<td>Angelica Ramos</td>
											<td>#65874</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2009/10/09</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>26</td>
											<td>Gavin Joyce</td>
											<td>#54605</td>
											<td>Female</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2010/12/22</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>27</td>
											<td>Jennifer Chang</td>
											<td>#54605</td>
											<td>Tuition</td>
											<td>Cheque</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2010/11/14</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>28</td>
											<td>Brenden Wagner</td>
											<td>#45687</td>
											<td>Library</td>
											<td>Cheque</td>
											<td><span class="badge light badge-danger">Udpaid</span></td>
											<td>2011/06/07</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>29</td>
											<td>Fiona Green</td>
											<td>#23456</td>
											<td>Tuition</td>
											<td>Cash</td>
											<td><span class="badge light badge-success">Paid</span></td>
											<td>2010/03/11</td>
											<td><strong>120$</strong></td>
										</tr>
										<tr>
											<td>30</td>
											<td>Shou Itou</td>
											<td>#54605</td>
											<td>Annual</td>
											<td>Credit Card</td>
											<td><span class="badge light badge-warning">Panding</span></td>
											<td>2011/08/14</td>
											<td><strong>120$</strong></td>
										</tr>
									</tbody>
								</table>
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
    export default({
        name: 'Orders',
        components: {SideBar}
    })
</script>