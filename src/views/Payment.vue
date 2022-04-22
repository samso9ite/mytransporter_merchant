<template>
<div>
	<SideBar />
		<!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
			<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item"><a href="/orders">Payment History</a></li>
					</ol>
                </div>
				<div class="row mb-4 align-items-center">
					<div class="col-xl-12">
						
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
												<p class="mb-0 fs-12">Total Transactions</p>
												<h4 class="mb-0 font-w600  fs-22">{{total}}</h4>
											</div>
										</div>
									</div>
									<div class="col-xl-7 col-xxl-12 col-lg-12">
										<div class="row align-items-center">
											<div class="col-xl-4 col-md-4 col-sm-4 my-2">
												<div class="media align-items-center style-2">
													<span class="me-3">
														<svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3124 0.990819C30.1459 1.71561 30.234 2.97887 29.5092 3.81239L20.7578 13.8765C19.359 15.4851 16.9444 15.7141 15.2681 14.397L11.1176 11.1359L3.87074 17.9564C3.06639 18.7135 1.80064 18.6751 1.04361 17.8708C0.286573 17.0664 0.324929 15.8007 1.12928 15.0436L8.3761 8.22309C9.817 6.86695 12.0329 6.76812 13.5888 7.99062L17.7394 11.2518L26.4908 1.18767C27.2156 0.354158 28.4788 0.266024 29.3124 0.990819Z" fill="#FB3E7A"/>
														</svg>
													</span>
													<div class="media-body ml-1">
														<p class="mb-0 fs-12">Successfull Payments</p>
														<h4 class="mb-0 font-w600  fs-22">{{successfull_transactions}}</h4>
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
														<p class="mb-0 fs-12">Failed Transactions</p>
														<h4 class="mb-0 font-w600 fs-22"> 
															<svg class="ml-2" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M0 6L6 2.62268e-07L12 6" fill="#13B497"></path>
															</svg>
															{{failed_transactions}}
														</h4>
													</div>
												</div>
											</div>

											
										</div>
									</div>
									<div class="col-xl-2 col-xxl-12 my-2" v-on:click="toggle()">
										<div class="dropdown d-inline-block" v-on:click="toggle()">
											<div class="dropdown-toggle mb-0 fs-18 "  v-on:click="toggle()">
												<span class="font-w400 text-primary" v-on:click="toggle()">Filter by status</span>
											</div>
											<div class="dropdown-menu dropdown-menu-left" :class="toggleDropdown" >
												<a class="dropdown-item"  @click="change_status(2)"> Successfull Transactions</a>
												<a class="dropdown-item"  @click="change_status(1)">Failed Transactions</a>
											</div>
										</div>
									</div>
								</div>							
							</div>
						</div>
					</div>
					<!-- <div class="col-xl-3 align-self-start mt-3 mt-xl-0 Generate">
						<a href="/" class="btn btn-secondary d-block"><i class="fa fa-money scale5 me-3"></i>Generate Report</a>
					</div>	 -->
				</div>

				<div class="row">
					<div class="col-xl-6 col-xxl-6">
						<div class="col-xl-12">
							<div class="card overflow-hidden">
								<div class="card-body">
									<div class="text-center">
										<div class="profile-photo">
											<img src="images/wallet.svg" width="60" class="img-fluid" alt="">
										</div>
										<h3 class="mt-4 mb-1">Wallet</h3>
										<!-- <p class="text-muted">Senior Manager</p> -->
										<a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Withdraw</a> 	<a class="btn btn-outline-primary btn-rounded mt-3 px-5" data-bs-toggle="modal" data-bs-target="#fundWallet">Top Up</a>
										<div class="modal fade modal fade bd-example-modal-lg" id="exampleModalCenter">
											<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title"><b>Input Amount</b></h5>
														<button type="button" class="btn-close" data-bs-dismiss="modal">
														</button>
													</div>
													<div class="modal-body">
														<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
															<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
															</button>
															<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
														</div>
													<div class="basic-form" v-if="all_account">
													<div class="col-lg-12">
														<perfect-scrollbar>
														<div class="table-responsive" >
															<table class="table header-border  verticle-middle" > 
																<tbody >
																	<tr v-for="bank in all_account" :key="bank" class="bank" :class="{'bank_active' : bank.id  === id}" @click="select_account(bank.id)">
																		<td>{{bank.account_name}}</td>
																		<td style="color:#ff6600"><strong>{{bank.account_number}}</strong></td>
																		<td>{{bank.bank_name}}</td>
																		<!-- <td>
																			<div class="form-check">
																				<input class="form-check-input" type="radio" name="accnt" v-model="accnt" :value="bank.id" checked>
																			</div>
																		</td> -->
																	</tr>
																</tbody>
															</table>
														</div>
														</perfect-scrollbar>
													</div>
													<div class="row">
														<div class="mb-2 col-lg-8" >
															<label class="sr-only">Amount</label>
															<input type="text" class="form-control" placeholder="Amount" name="amount" v-model="amount">
														</div>
														<div class="col-lg-4">
															<button  class="btn btn-primary mb-2 btn-bg" @click="withdraw" :disabled="loading">Withdraw </button>
														</div>
													</div>
													<br>
												</div>
													<h3 v-else> Please Add a Bank Account </h3>		
													</div>
													
												</div>
											</div>
										</div>

										<div class="modal fade modal fade bd-example-modal-lg" id="fundWallet"> 
											<div class=" modal-dialog modal-dialog-centered  modal-lg" role="document">
												<div class="modal-content">
													<div class="modal-header">
														<h5 class="modal-title"><b>Input Amount</b></h5>
														<button type="button" class="btn-close" data-bs-dismiss="modal">
														</button>
													</div>
													<div class="modal-body">
														<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
															<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
															</button>
															<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
														</div>
													<div class="basic-form">
													
													<div class="row">
														<div class="mb-2 col-lg-8" >
															<label class="sr-only">Amount</label>
															<input type="text" class="form-control" placeholder="Amount" name="amount" v-model="amount">
														</div>
														<div class="col-lg-4">
															<button  class="btn btn-primary mb-2 btn-bg" @click="payWithPaystack" :disabled="loading">Top Up Wallet </button>
														</div>
													</div>
													<br>
												</div>
													</div>
												</div>
											</div>
										</div> 
										
									</div>
								</div>
								
								<div class="card-footer pt-0 pb-0 text-center">
									<div class="row">
										<div class="col-4 pt-3 pb-3 border-end">
											<h3 class="mb-1">₦{{pending_balance}}</h3><span>Pending Balance</span>
										</div>
										<div class="col-4 pt-3 pb-3 border-end">
											<h3 class="mb-1">₦{{wallet_balance}}</h3><span>Available</span>
										</div>
										<div class="col-4 pt-3 pb-3">
											<h3 class="mb-1">₦0.00</h3><span>Refund</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	

					<div class="col-xl-6 col-xxl-6">
						<div class="card col-lg-12" style="background-color:#473b52">	
							<div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
										<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
										</button>
										<span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
								</div>
						<div class="card-header border-0 pb-0 align-items-center justify-content-center" v-if="all_account.length">
							<div class="table-responsive" >
							<table class="table table-responsive-md" style="color:#fff"> 
								<tbody >
									<tr v-for="bank in all_account" :key="bank">

										<td>{{bank.account_name}}</td>
										<td style="color:#ff6600"><strong>{{bank.account_number}}</strong></td>
										<td>{{bank.bank_name}}</td>
										<td>
											<div class="d-flex">
												<!-- <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fa fa-pencil"></i></a> -->
												<a href="#" class="btn btn-primary shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
							<div class="accordion accordion-primary" id="accordion-one" style="color:white">
									<div class="accordion-item">
											<button type="button" class="btn btn-rounded" style="color:white" @click="getAllBanks" data-bs-toggle="collapse" data-bs-target="#collapseOne"><span
													class="btn-icon-start text-primary" ><i class="fa fa-plus"></i>
												</span>Add Bank Account
											</button>
										<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
										<div class="accordion-body-text">
											<div class="row">
												<div class="col-sm-6">
													<select class="default-select form-control wide mb-3" v-model="bank_code">
														<option v-for="bank in all_banks" :key="bank" :value="bank.code" >{{bank.name}}</option>
													</select>
												</div>
												<div class="col-sm-6 mt-2 mt-sm-0">
													<input type="text" class="form-control" placeholder="Account Number" v-model="account_number" v-on:input="verifyAccount" required>
												</div>
												<h5 class="text-center" style="color:white" v-if="accnt_name"> Verify Account: {{accnt_name}} </h5> 
											</div>
											<a class="btn btn-outline-primary btn-rounded mt-3 px-5" style="color:white; border-color:white" @click="addAccount" :disabled="loading">Add Account</a>
											</div>
										</div>
									</div>
								</div>
						
							</div>
						</div>
						<div class="card-header border-0 pb-0" v-else>
							<div class="col-lg-12" >
								<h3 style="color:white">Bank account hasn't been added</h3>
								
						
							<div class="accordion accordion-primary" id="accordion-one" style="color:white">
									<div class="accordion-item">
											<button type="button" class="btn btn-rounded" style="color:white" @click="getAllBanks" data-bs-toggle="collapse" data-bs-target="#collapseOne"><span
													class="btn-icon-start text-primary" ><i class="fa fa-plus"></i>
												</span>Add Bank 
											</button>
										<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
										<div class="accordion-body-text">
											<div class="row">
												<div class="col-sm-6">
													<select class="default-select form-control wide mb-3" v-model="bank_code">
														<option v-for="bank in all_banks" :key="bank" :value="bank.code" >{{bank.name}}</option>
													</select>
												</div>
												<div class="col-sm-6 mt-2 mt-sm-0">
													<input type="text" class="form-control" placeholder="Account Number" v-model="account_number" v-on:input="verifyAccount" required>
												</div>
												<h5 class="text-center" style="color:white" v-if="accnt_name"> Verify Account: {{accnt_name}} </h5> 
											</div>
											<a class="btn btn-outline-primary btn-rounded mt-3 px-5 " style="color:white; border-color:white" @click="addAccount">Add Account</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
					</div>
			
					<div class="col-12">
					<div class="card">
						<div class="card-body">
								<div class="row">
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
										<th>Ref</th>
										<th>Channel</th>
										<th> Description</th>
										<th>Date</th>
										<th>Amount</th>
										<th>Status</th>
										<th v-if="status == 1"> Action </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="transaction in payments" :key='transaction'>
										<td>
											<div class="form-check checkbox-secondary">
											  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
											  <label class="form-check-label" for="flexCheckDefault2">
											  </label>
											</div>
										</td>
											<td>{{transaction.transaction_reference}}</td>
											<td>{{transaction.payment_channel}}</td>
											<td class="wspace-no">{{transaction.transaction_description}}</td>
											<td>{{transaction.transaction_date}}</td>
											<td><a href="javascript:void(0);" class="btn btn-secondary light btn-sm">₦ {{transaction.transaction_amount}}</a></td>
											<td><span class="badge light badge-secondary">{{transaction.transaction_status.transaction_status_name}}</span></td>
									</tr>
								</tbody>
								<tfoot > 
									<tr> <td style="text-align:center;" colspan="10"> <h3>Total Amount: <span class="badge light badge-secondary" style="margin-right:10px; font-size:17px"> ₦{{totalAmount}}</span> </a> </h3>  </td> </tr>
								</tfoot>
							</table>
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
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import Api from './Api'
    export default({
        name: 'Payment',
        components: {SideBar, PerfectScrollbar},
		data(){
			return{
				toggleActiveDropdown: false,
				payments : [],
				total: '',
				id: '',
				all_payments: [],
				banks: [],
				all_banks: [],
				account_name: '',
				verified_accnt_num: '',
				bank_name: '',
				bank_id: '',
				bank_code: '',
				amount: '',
				accnt: '',
				loading: false,
				errors: [],
				accnt_num: '',
				scriptLoaded: null,
				url: '',
				total_amount: 0
			}
		},
		created() {
			this.scriptLoaded = new Promise(resolve => {
				this.loadScript(() => {
					resolve();
				});
			});
		},
		methods: {
		toggle(){
		this.toggleActiveDropdown = !this.toggleActiveDropdown
		console.log("Showing");
		},
			loadScript(callback) {
            const script = document.createElement("script");
            script.src = "https://js.paystack.co/v1/inline.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            if (script.readyState) {
                // IE
                script.onreadystatechange = () => {
                    if (
                        script.readyState === "loaded" ||
           	 			script.readyState === "complete"
                    ) {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                // Others
                script.onload = () => {
                    callback();
                };
            }
        },
        isDynamicSplit() {
            return this.split.constructor === Object && Object.keys(this.split).length > 0;
        },
	    payWithPaystack() {
			this.scriptLoaded &&
        	this.scriptLoaded.then(() => {
            const paystackOptions = {
                key: 'pk_live_7f774de7bb00dc0e58ac0ddb8aeaba8dd3f4dab3',
				email: JSON.parse(window.localStorage.getItem('email')),
                firstname: JSON.parse(window.localStorage.getItem('name)')),
                lastname: JSON.parse(window.localStorage.getItem('name')),
				amount: this.amount,
                ref: Math.random().toString(36),
				callback: response => {
					const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
					const data = {token:response.reference, amount:this.amount, merchant_id:merchant_token}
					Api.axios_instance.post(Api.baseUrl+'/payment/wallet/fund/paystack', data)
					.then(response => {
						$('#fundWallet').modal('hide')
						this.wallet_balance()
						this.$toast.success({
							title:'Awesome!!!',
							message:'Topup Successful',
						})
					})
					.catch(err => {
						console.log(err.response)
					})
                  
                },
                onClose: () => {
                    this.close();
                },
            };
            if (this.embed) {
                paystackOptions.container = "paystackEmbedContainer";
            }
            const handler = window.PaystackPop.setup(paystackOptions);
            if (!this.embed) {
                handler.openIframe();
            }
        });
        },
			select_account(accnt){
				this.id = accnt
			},
			getPaymentHistory(){
				const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
				Api.axios_instance.post(Api.baseUrl +'/merchant/portal/payment/history', {merchant_id: merchant_token})
				.then(response => {
					this.all_payments = response.data.results
					this.payments = response.data.results
					this.total = response.data.count
				}
				)
				.catch(err => {
					console.log(err.response)
				})
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/profile/get', {merchant_id:merchant_token})
				.then((res => {
					const data = {
						pending_wallet_balance: res.data.pending_wallet_balance,
						wallet_balance: res.data.wallet_balance
					}
					this.$store.commit('storeProfile', data)
				}))
			},
			
			change_status(status){
				this.status = status
				this.payments = this.all_payments
				this.payments = this.payments.filter(payment => payment.transaction_status.id === status)
				this.total_amount = 0
				this.toggle()
				
			},
			getBanks(){
				const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
				console.log(merchant_token);
				Api.axios_instance.post(Api.baseUrl +'/merchant/portal/bank_account/get', {merchant_id: merchant_token})
				.then(response => {
					this.$store.commit('get_banks', {banks:response.data})
				})
				.catch(err => {
					console.log(err.response);
				})
			},
			getAllBanks(){
				Api.axios_instance.get(Api.baseUrl +'/merchant/portal/bank_account/get/banks')
				.then(response => {
				this.all_banks = response.data
				})
				.catch(err => {
				})
			},
			verifyAccount(){
				const formData = {
					merchant_id : JSON.parse(localStorage.getItem('merchant_id')),
					account_number: this.account_number,
					bank_code: this.bank_code
				}
				Api.axios_instance.post(Api.baseUrl +'/merchant/portal/bank_account/verify', formData)
				.then(res => {
					this.account_name = res.data.data.account_name
					this.verified_accnt_num = res.data.data.account_number
					this.bank_name = res.data.data.bank_name
					this.bank_id = res.data.data.bank_id
					})
				.catch(err => {
					console.log(err.response)
				})
				
			},
			addAccount(){
				this.loading = true
				this.bank_name= this.all_banks.filter(bank => bank.code === this.bank_code)
				const formData = {
					merchant_id: JSON.parse(localStorage.getItem('merchant_id')),
					account_number: this.verified_accnt_num,
					account_name: this.account_name,
					bank_name: this.bank_name[0].name,
					bank_id: this.bank_id,
					bank_code: this.bank_code
				}
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/bank_account/add', formData)
				.then(res => {
					console.log(res.data)
					this.$toast.success({
                        title:'Awesome!!!',
                        message:'New Bank Account Added',
                    })
					$('#collapseOne').collapse('hide');
					this.getBanks()
				})
				.catch(error => {
					  if(error.response){
						this.errors = []
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                    }
				})
				.finally(() => {
				this.loading = false;
			});
			},
			withdraw(){
				this.loading = true
				const formData ={
					merchant_id: JSON.parse(localStorage.getItem('merchant_id')),
					bank_account: this.id,
					amount: this.amount
				}
				Api.axios_instance.post(Api.baseUrl+'/merchant/portal/bank_account/withdraw', formData)
				.then(res => {
					this.$toast.success({
                        title:'Awesome!!!',
                        message:'Withdrawal Successful',
                    })
				})
				.catch(error => {
					if(error.response){
					for(const property in error.response.data){
						this.errors.push(`${property}:${error.response.data[property]}`)
					}
				}
					
				})
				.finally(() => {
					this.loading = false
				})
			},
		},
		mounted(){
			this.getPaymentHistory()
			this.getBanks()
		},
		computed: {
			toggleDropdown: function(){
				return this.toggleActiveDropdown ? "show" : ""
			},
			accnt_name: function(){
				return this.account_name
			},
			all_account: function(){
				return this.$store.state.banks
			},
			successfull_transactions: function(){
				return this.all_payments.filter(payment => payment.transaction_status.id === 2).length
			},
			failed_transactions: 
				function (){
					return this.all_payments.filter(payment => payment.transaction_status.id === 1).length
			},
			wallet_balance: function (){
				return this.$store.state.user.wallet_balance
			},
			pending_balance: function (){
				return this.$store.state.user.pending_wallet_balance
			},
			totalAmount: function(){
				this.payments.map(payment => (
					this.total_amount += parseFloat(payment.transaction_amount)
				))
				return this.total_amount.toFixed(2)
			}
				
		}
    })
</script>

<style>
	.btn-secondary:hover {
		background-color: #ff6600 !important;
		border-color: #ff6600;
	}
	.modal { 
   background-color: rgba(76, 175, 80, 0.3)
}
.bank_active{
	background-color: #473b52;
	color:#fff !important;
	border-radius:15px
}
.bank:hover{
	background-color: #473b52;
	color:#fff !important;
	cursor:pointer;
	border-radius:15px
}
.modal { 
   background-color: rgba(0, 0, 0, 0.5)
}

</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>