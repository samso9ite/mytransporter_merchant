<template>
    <div>
        <SideBar />
          <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row">
                    <div class="col-xl-10">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-4 order-lg-2 mb-4">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span class="text-muted">Upload bike pictures</span>
                                            <span class="badge badge-primary badge-pill">1</span>
                                        </h4>
                                        <ul class="list-group mb-3">
                                            <li class="list-group-item d-flex justify-content-between lh-condensed">
												<div class="input-group mb-3">
													<span class="input-group-text">Front View</span>
													<div class="form-file">
														<input type="file" class="form-file-input form-control">
													</div>
												</div>
                                              </li>
                                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                                <div class="input-group mb-3">
													<span class="input-group-text">Back View</span>
													<div class="form-file">
														<input type="file" class="form-file-input form-control">
													</div>
												</div>
                                            </li>
                                           
                                        </ul>

                                        <!-- <form>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Promo code">
												<button type="submit" class="input-group-text">Redeem</button>
                                            </div>
                                        </form> -->
                                    </div>
                                    <div class="col-lg-8 order-lg-1">
                                        <h4 class="mb-3">Bike Details </h4>
                                        <form class="needs-validation" novalidate="">
                                            <div class="row">
												<div class="mb-3">
													<label for="email"  class="form-label">Plate Number </label>
													<input type="email" class="form-control" id="email" placeholder="you@example.com">
													<div class="invalid-feedback">
														Please enter a valid plate number 
													</div>
												</div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="firstName" class="form-label">Bike Make </label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                                                    <div class="invalid-feedback">
                                                        Bajaj
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="lastName"  class="form-label">Purchased Date <span
														class="text-muted">(Optional)</span></label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                                                    <div class="invalid-feedback">
                                                       
                                                    </div>
                                                </div>
                                            </div>
											<hr class="mb-4">
                                           
                                        </form>
                                    </div>
                                </div>


								<div class="row">
                                    <div class="col-lg-4 order-lg-2 mb-4">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span class="text-muted">Upload bike pictures</span>
                                            <span class="badge badge-primary badge-pill">2</span>
                                        </h4>
                                        <ul class="list-group mb-3">
                                            <li class="list-group-item d-flex justify-content-between lh-condensed">
												<div class="input-group mb-3">
													<span class="input-group-text">Front View</span>
													<div class="form-file">
														<input type="file" class="form-file-input form-control">
													</div>
												</div>
                                              </li>
                                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                                <div class="input-group mb-3">
													<span class="input-group-text">Back View</span>
													<div class="form-file">
														<input type="file" class="form-file-input form-control">
													</div>
												</div>
                                            </li>
                                           
                                        </ul>

                                        <!-- <form>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Promo code">
												<button type="submit" class="input-group-text">Redeem</button>
                                            </div>
                                        </form> -->
                                    </div>
                                    <div class="col-lg-8 order-lg-1">
                                        <!-- <hx4 class="mb-3">Bike Rate Setting</h4> -->
                                        <form class="needs-validation" novalidate="">
                                            <div class="row">
												<div class="mb-3">
													<label for="email"  class="form-label">Plate Number </label>
													<input type="email" class="form-control" id="email" placeholder="you@example.com">
													<div class="invalid-feedback">
														Please enter a valid plate number 
													</div>
												</div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="firstName" class="form-label">Bike Make </label>
                                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                                                    <div class="invalid-feedback">
                                                        Bajaj
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="lastName"  class="form-label">Purchased Date <span
														class="text-muted">(Optional)</span></label>
                                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                                                    <div class="invalid-feedback">
                                                       
                                                    </div>
                                                </div>
                                            </div>
					 						<hr class="mb-4">
                                           
                                        </form>
										<div class="col-lg-2">
											<button type="button" class="btn btn-rounded btn-primary"><span
												class="btn-icon-start text-primary"><i class="fa fa-plus"></i>
											</span>Add</button>
										</div>
                                    </div>
									
									
                                </div>
								<div class="row" style="margin-top: 2em;">
									<h4 class="mb-3">Bike Rate Settings </h4>
									<div class="basic-form">
										<form>
											<div class="row">
												<div class="col-sm-4">
													<input type="text" class="form-control" placeholder="Kilometre">
												</div>
												<div class="col-sm-4 mt-2 mt-sm-0">
													<input type="text" class="form-control" placeholder="Price">
												</div>
												<!-- <div class="col-sm-2 mt-2 mt-sm-0">
													<input type="text" class="form-control" placeholder="Zip">
												</div> -->
											</div>
										</form>
									</div>
								</div>
								</div>

						
							
                        </div>
							<div class="col-lg-12">
								<button class="btn btn-primary btn-lg btn-block" type="submit"> Set Rate  </button>
								
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
        name: 'Rate',
        components: {SideBar}
    })
</script>
