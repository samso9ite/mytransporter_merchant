<template>
    <div>
        <SideBar />
          <div class="content-body" >
			  	<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/quick-tour">Quick Tour</a></li>
					</ol>
                </div>
          			<div class="col-xl-12 col-xxl-12"  > 
						<!-- <div class="row"> -->
							
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title" style="font-size:23px">Getting Started With MyTransporter</h4>
                            </div>
                            <div class="card-body">
                            	<div class="row" style="">
									<div class="col-lg-6 col-md-12 col-sm-12">
										<div class="row">
									<div class="media event-card p-3 rounded align-items-center">	
										<span class="me-3 bgl-primary text-primary">
										<img src="../statics/dashboard_1.png" width="80%"/>
										</span>

													<div class="media-body event-size">
														<span class="fs-18 d-block mb-1 text-primary" ><b>Dashboard</b></span>
														<span class="fs-18 font-w500 event-size-1">Dashboard gives a quick overiew of all actions being performed on the platoform and also enables you accept and reject orders quickly. It gives a breakdown of orders.</span>
													</div>
												</div>
												<br><br>
												<div class="media event-card p-3 rounded align-items-center" style="margin-top:30px">	
													<span class="me-3 bgl-primary text-primary">
														<img src="../statics/settings.png" />
													</span>
													<div class="media-body event-size">
														<span class="fs-18 d-block mb-1 text-primary"><b> Set Rate</b></span>
														<span class="fs-18 font-w500 event-size-1">Set the rate of all registered transport channels per kilometre, also get to update the rate anytime.</span>
													</div>
												</div>

												<div class="media event-card p-3 rounded align-items-center" style="margin-top:30px">	
													<span class="me-3 bgl-primary text-primary">
														<img src="../statics/wallet_1.png" />
													</span>
													<div class="media-body event-size">
														<span class="fs-18 d-block mb-1 text-primary"><b>Payments</b></span>
														<span class="fs-18 font-w500 event-size-1">Get an overiew of all transactions also a list of all transactions that has taken place. Add your bank account for withdrawal, also make withdrawal through this section.</span>
													</div>
												</div>

												<div class="media event-card p-3 rounded align-items-center" style="margin-top:30px">	
													<span class="me-3 bgl-primary text-primary">
														<img src="../statics/team_1.png"/>
														</span>
													<div class="media-body event-size">
														<span class="fs-18 d-block mb-1 text-primary"><b>Teams</b></span>
														<span class="fs-18 font-w500 event-size-1">Get to add staffs to manage your orders assigning role to the staff registered.</span>
													</div>
												</div>

												<div class="media event-card p-3 rounded align-items-center" style="margin-top:30px">	
													<span class="me-3 bgl-primary text-primary">
														<img src="../statics/settings.png"/>
														</span>
													<div class="media-body event-size">
														<span class="fs-18 d-block mb-1 text-primary"><b>Settings</b></span>
														<span class="fs-18 font-w500 event-size-1">Get to update the company details from this section, adding company's logo and other vital details about the company.</span>
													</div>
												</div>
											<span style="margin-top:30px"><router-link :to="'/rate'"> <button class="btn btn-rounded btn-large btn-primary" >Set Transport Rate </button> </router-link> </span>
									
										</div>
									</div>
									<div class="col-lg-5" >
										<img src="../statics/Page2.png"  width="90%"/>
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
export default({
    name: 'QuickTour',
    components: {SideBar}
})
</script>