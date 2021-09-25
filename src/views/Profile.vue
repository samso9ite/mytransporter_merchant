<template>
<div>
    <SideBar />
    <div class="content-body">
            <div class="container-fluid">
				
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">App</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
					</ol>
                </div>
                <!-- row -->
                <div class="row">
                    <div class="col-lg-8">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <div class="profile-head">
                               
                                <div class="profile-info">
									<div class="profile-photo">
										<img src="images/profile/profile.png" class="img-fluid rounded-circle" alt="">
									</div>
									<div class="profile-details">
										<div class="profile-name px-3 pt-2">
											<h4 class="text-primary mb-0">Otedola Logistics</h4>
											<p>Managing Director</p>
										</div>
										<div class="profile-email px-2 pt-2">
											<h4 class="text-muted mb-0">info@otedolalogistics.com</h4>
											<p>Email</p>
										</div>
										<!-- <div class="dropdown ms-auto">
											<a href="#" class="btn btn-primary light sharp" data-bs-toggle="dropdown" aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg></a>
											<ul class="dropdown-menu dropdown-menu-end">
												<li class="dropdown-item"><i class="fa fa-user-circle text-primary me-2"></i> View profile</li>
												<li class="dropdown-item"><i class="fa fa-users text-primary me-2"></i> Add to btn-close friends</li>
												<li class="dropdown-item"><i class="fa fa-plus text-primary me-2"></i> Add to group</li>
												<li class="dropdown-item"><i class="fa fa-ban text-primary me-2"></i> Block</li>
											</ul>
										</div> -->
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-xl-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="profile-tab">
                                    <div class="custom-tab-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item"><a href="#my-posts" data-bs-toggle="tab" class="nav-link active show">Set Team Members</a>
                                            </li>
                                           
                                            <li class="nav-item"><a href="#profile-settings" data-bs-toggle="tab" class="nav-link">Account Setting</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div id="my-posts" class="tab-pane fade active show">
												<div class="pt-3">
                                                    <div class="settings-form">
                                                        <!-- <h4 class="text-primary">Account Setting</h4> -->
														<br>
                                                        <form>
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">First  Name</label>
                                                                    <input type="email" placeholder="Email" class="form-control">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Lastname</label>
                                                                    <input type="password" placeholder="Password" class="form-control">
                                                                </div>
                                                            </div>
															<div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Email</label>
                                                                    <input type="email" placeholder="Email" class="form-control">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Contact Nmber</label>
                                                                    <input type="password" placeholder="Password" class="form-control">
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label">Address</label>
                                                                <input type="text" placeholder="1234 Main St" class="form-control">
                                                            </div>
															<div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Referee Name</label>
                                                                    <input type="email" placeholder="Email" class="form-control">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Referee Number</label>
                                                                    <input type="password" placeholder="Password" class="form-control">
                                                                </div>
                                                            </div>
															<div class="mb-3">
                                                                <label class="form-label">Referee Address</label>
                                                                <input type="text" placeholder="1234 Main St" class="form-control">
                                                            </div>
                                                            <!-- <div class="mb-3">
                                                                <div class="form-check custom-checkbox">
																	<input type="checkbox" class="form-check-input" id="gridCheck">
																	<label class="form-check-label form-label" for="gridCheck"> Check me out</label>
																</div>
                                                            </div> -->
                                                          
                                                        </form>
														<div class="row" >
															<div class="col-lg-6">
																<button type="button" class="btn btn-rounded btn-primary"><span
																	class="btn-icon-start text-primary"><i class="fa fa-plus"></i>
																</span>Add New</button>
															</div>
															<div class="col-lg-6" style="float: right;">
																<button class="btn btn-primary btn-rounded " type="submit">
																	Save Team</button>
															</div>
														</div>
														<br>
                                                    </div>
													
                                                </div>
												<div class="col-lg-8"></div>
												
                                            </div>
                                          
                                            <div id="profile-settings" class="tab-pane fade">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                        <form>
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Email</label>
                                                                    <input type="email" placeholder="Email" class="form-control">
                                                                </div>
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">Password</label>
                                                                    <input type="password" placeholder="Password" class="form-control">
                                                                </div>
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label">Address</label>
                                                                <input type="text" placeholder="1234 Main St" class="form-control">
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label">Address 2</label>
                                                                <input type="text" placeholder="Apartment, studio, or floor" class="form-control">
                                                            </div>
                                                            <div class="row">
                                                                <div class="mb-3 col-md-6">
                                                                    <label class="form-label">City</label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                                <div class="mb-3 col-md-4">
                                                                    <label class="form-label">State</label>
                                                                    <select class="form-control default-select wide" id="inputState">
                                                                        <option selected="">Choose...</option>
                                                                        <option>Option 1</option>
                                                                        <option>Option 2</option>
                                                                        <option>Option 3</option>
                                                                    </select>
                                                                </div>
                                                                <div class="mb-3 col-md-2">
                                                                    <label class="form-label">Zip</label>
                                                                    <input type="text" class="form-control">
                                                                </div>
                                                            </div>
                                                            <!-- <div class="mb-3">
                                                                <div class="form-check custom-checkbox">
																	<input type="checkbox" class="form-check-input" id="gridCheck">
																	<label class="form-check-label form-label" for="gridCheck"> Check me out</label>
																</div>
                                                            </div> -->
                                                            <button class="btn btn-rounded btn-primary" type="submit">Save
                                                               </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
									<!-- Modal -->
									<div class="modal fade" id="replyModal">
										<div class="modal-dialog modal-dialog-centered" role="document">
											<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title">Post Reply</h5>
													<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
												</div>
												<div class="modal-body">
													<form>
														<textarea class="form-control" rows="4">Message</textarea>
													</form>
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-danger light" data-bs-dismiss="modal">btn-close</button>
													<button type="button" class="btn btn-primary">Reply</button>
												</div>
											</div>
										</div>
									</div>
                                </div>
                            </div>
                        </div>
                    </div>

					<!-- -->
                </div>
            </div>
        </div>
</div>   
</template>

<script>
import SideBar from '../components/SideBar.vue'
    export default({
        name: 'Profile',
        components: {SideBar}
    })
</script>