<template>
<div>
    <SideBar />
     <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="form-head mb-4 d-flex flex-wrap align-items-center">
					<div class="me-auto">
						<h2 class="font-w600 mb-0">Teams List</h2>
						<p class="text-light">List of all team members </p>
					</div>	
				</div>
				<div class="row mb-4 align-items-center">
					<div class="col-xl-3 col-lg-4 mb-4 mb-lg-0">
						<a href="javascript:void(0);" class="btn btn-secondary  btn-lg btn-block rounded text-white" data-bs-toggle="modal" data-bs-target="#addNewRider">+New Team</a>
						<!-- Add Order -->
						<div class="modal" id="addNewRider" >
							<div class="modal-dialog" role="document" >
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">Create New Team</h5>
										<a href="javascript:void(0);" class="btn-close" data-bs-dismiss="modal"></a>
									</div>
									<div class="modal-body">
										<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
                                        </div>
										<form>
											<div class="mb-3">
												<label class="text-black font-w500">First Name</label>
												<input type="text" class="form-control" v-model="first_name" placeholder="First Name" required>
											</div>
											<div class="mb-3">
												<label class="text-black font-w500">Last Name</label>
												<input type="text" class="form-control" v-model="last_name" required>
											</div>
												<label class="text-black font-w500">Phone Number</label>
                                                 
											 <div class="input-group mb-3">
												 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide" name="country" v-model="country">
                                                    <option value="Nigeria">+234</option>
                                                    <option value="United">+236</option>
                                                    <option value="+34">+237</option>
                                                </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="XXXX XXXXX XXXX" name="phone" v-model='phone' required>
                                        </div>
											<div class="mb-3">
												<label class="text-black font-w500">Email</label>
												<input type="text" class="form-control" v-model="email_address" placeholder="example@gmail.com">
											</div>
											   <div class="col-auto my-3">
                                                <label class="text-black font-w500">Role</label>
                                                <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="permission">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Business Owner</option>
                                                    <option value="2">Admin</option>
                                                    <option value="3">Staff</option>
													<option value="4">Customer Support</option>
                                                </select>
                                            </div>
											<div class="mb-3">
												<label class="text-black font-w500">Password</label>
												<input type="text" class="form-control" v-model="password" required>
											</div>
											<div class="form-group">
												<button type="button" class="btn btn-primary" @click="createTeam">Create</button>
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
										<svg class="me-2 user-ico mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0)">
											<path d="M21 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V22.008C2.00287 20.4622 2.52021 18.9613 3.47044 17.742C4.42066 16.5227 5.74971 15.6544 7.248 15.274C7.46045 15.2219 7.64959 15.1008 7.78571 14.9296C7.92182 14.7583 7.9972 14.5467 8 14.328V13.322L6.883 12.206C6.6032 11.9313 6.38099 11.6036 6.22937 11.2419C6.07776 10.8803 5.99978 10.4921 6 10.1V5.96201C6.01833 4.41693 6.62821 2.93765 7.70414 1.82861C8.78007 0.719572 10.2402 0.0651427 11.784 5.16174e-06C12.5992 -0.00104609 13.4067 0.158488 14.1603 0.469498C14.9139 0.780509 15.5989 1.2369 16.1761 1.81263C16.7533 2.38835 17.2114 3.07213 17.5244 3.82491C17.8373 4.5777 17.999 5.38476 18 6.20001V10.1C17.9997 10.4949 17.9204 10.8857 17.7666 11.2495C17.6129 11.6132 17.388 11.9426 17.105 12.218L16 13.322V14.328C16.0029 14.5469 16.0784 14.7586 16.2147 14.9298C16.351 15.1011 16.5404 15.2221 16.753 15.274C18.251 15.6548 19.5797 16.5232 20.5298 17.7424C21.4798 18.9617 21.997 20.4624 22 22.008V23C22 23.2652 21.8946 23.5196 21.7071 23.7071C21.5196 23.8946 21.2652 24 21 24ZM4 22H20C19.9954 20.8996 19.6249 19.8319 18.9469 18.9651C18.2689 18.0983 17.3219 17.4816 16.255 17.212C15.6125 17.0494 15.0423 16.6779 14.6341 16.1558C14.2259 15.6337 14.0028 14.9907 14 14.328V12.908C14.0001 12.6428 14.1055 12.3885 14.293 12.201L15.703 10.792C15.7965 10.7026 15.8711 10.5952 15.9221 10.4763C15.9731 10.3574 15.9996 10.2294 16 10.1V6.20001C16.0017 5.09492 15.5671 4.03383 14.7907 3.24737C14.0144 2.46092 12.959 2.01265 11.854 2.00001C10.8264 2.04117 9.85379 2.47507 9.1367 3.21225C8.41962 3.94943 8.01275 4.93367 8 5.96201V10.1C7.99979 10.2266 8.0249 10.352 8.07384 10.4688C8.12278 10.5856 8.19458 10.6914 8.285 10.78L9.707 12.2C9.89455 12.3875 9.99994 12.6418 10 12.907V14.327C9.99724 14.9896 9.77432 15.6325 9.3663 16.1545C8.95827 16.6766 8.3883 17.0482 7.746 17.211C6.67872 17.4804 5.73137 18.0972 5.05318 18.9642C4.37498 19.8313 4.00447 20.8993 4 22Z" fill="#000"/>
											</g>
											<defs>
											<clipPath id="clip0">
											<rect width="24" height="24" fill="white"/>
											</clipPath>
											</defs>
										</svg>
										<div class="media-body">
											<p class="mb-1 fs-12 ">Total Team Members</p>
											<h3 class="mb-0 font-w600 fs-22">{{teams.length}} Staffs</h3>
										</div>
									</div>
									<div>
										<!-- <a href="javascript:void(0);" class="btn btn-outline-primary rounded"><i class="fa fa-check-square me-2 scale4" aria-hidden="true"></i>Active</a> -->
										<!-- <a href="javascript:void(0);" class="btn btn-outline-warning rounded ms-2">Edit</a>
										<a href="javascript:void(0);" class="btn btn-danger rounded ms-2">Delete</a> -->
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
										<th> Name</th>
										<th>Designation</th>
										<th>Address</th>
										<th>Phone</th>
										<th> Email</th>
										<th>Gender </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="team in teams" :key="team">
										<td>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
											  <label class="form-check-label" for="flexCheckDefault1">
											  </label>
											</div>
										</td>
										<td>{{team.user.first_name}} {{team.user.last_name}}</td>
										<td>{{team.permission.name}}</td>
										<td>{{team.user.address}}</td>
										<td>{{team.user.phone}} </td>
										<td>{{team.user.email}}</td>
										<td>{{team.user.gender}}</td>
										<td>
											<div class="d-flex">
												<a  data-bs-toggle="modal" data-bs-target="#changePermission">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#FF7B31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
												</a>
												<a href="javascript:void(0);" class="ms-4">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M3 6H5H21" stroke="#FF3131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
														<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#FF3131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>

												</a>

												<div class="modal fade" id="changePermission">
													<div class="modal-dialog" role="document">
														<div class="modal-content">
															<div class="modal-header">
																<a href="javascript:void(0);" class="btn-close" data-bs-dismiss="modal"></a>
															</div>
															<div class="modal-body profile">
																	<div class="text-center">
																		<img src="../statics/avatar.png" class="img-fluid rounded-circle" alt="">
																	</div>
																	<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
																	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
																	</button>
																	<span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
																</div>
																	<div class="col-auto my-3">
																		<select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="permission">
																			<option value="1">Business Owner</option>
																			<option value="2">Admin</option>
																			<option value="3">Staff</option>
																			<option value="4">Customer Support</option>
																		</select>
																	</div>
																	<div class="form-group text-center">
																		<button type="button" class="btn btn-primary" @click="changePermission(team.user.email)">Change Permission</button>
																	</div
																	>
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
        name: 'Teams',
        components: {SideBar},
		data(){
			return{
				teams: [],
				first_name: '',
				last_name: '',
				country: 'Nigeria',
				email_address: '',
				phone: '',
				password: '',
				permission: 1,
				errors: []
			}
		},

		methods: {
			getTeams(){
				const merchant = JSON.parse(localStorage.getItem('merchant_id'))
				console.log(merchant);
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/get/', {merchant_id: merchant})
                .then(response => {
					this.teams = response.data
				})
			},
			createTeam(){
				const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
				const formData = {
					first_name:this.first_name, last_name: this.last_name, phone: this.phone, country: this.country, password:this.password,
					email_address: this.email_address, merchant_id: merchant_token, permission: this.permission
				}
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/user/register', formData) 
				.then(response => {
					this.$toast.success({
                        title:'Awesome!!!',
                        message:'Staff Account Created',
                    })
					$('#addNewRider').modal('hide')
				})
				.catch(error => {
					if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                    }
				})
			},
			changePermission(email){
				const formData = {
					merchant_id : JSON.parse(localStorage.getItem('merchant_id')),
					email_address : email,
					permission: this.permission
				}	
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/update/permission', formData)
				.then(response => {
						this.$toast.success({
                        title:'Awesome!!!',
                        message:'Staff Account Updated',
                    })
					$('#changePermission').modal('hide')
				})
				.catch(error => {
					if(error.response){
					for(const property in error.response.data){
						this.errors.push(`${property}:${error.response.data.detail}`)
					}
				}
				})
			}
		},
		mounted() {
			this.getTeams()
		}
    })
</script>
<style scoped>
	.sel_style{
     height: 55px;
     width: 100%;
     margin-right:-1%;
     border-radius: 20px 0px 0px 20px;
     padding-top:7px;
     font-weight:400;
     border-color: transparent;
    padding: 5px;
	}
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