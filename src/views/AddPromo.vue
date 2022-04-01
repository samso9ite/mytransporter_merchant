<template>
<div>
    <SideBar />
    <div class="content-body">
            <div class="container-fluid">
				
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active" ><a href="/promo">Promo</a></li>
					</ol>
                </div>
                <!-- row -->
                
                <div class="row">
                    
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="profile-tab">
                                    <div class="custom-tab-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item"><a href="#profile-settings" data-bs-toggle="tab" class="nav-link active show"> Promo Section </a>
                                            </li>
                                        </ul>
                                        <!-- <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                        </div> -->
                                        <div class="tab-content">
                                            
                                          
                                            <div id="profile-settings" class="tab-pane fade active show">
                                                <div class="pt-3">
                                                    <div class="settings-form">
                                                            <div class="row">
                                                                  <div class="mb-3 col-md-4">
                                                                    <label class="form-label"> Start Date</label>
                                                                    <datetime type="datetime" v-model="start_date"  input-class="form-control" ></datetime>
                                                                </div>
                                                                <div class="mb-3 col-md-4">
                                                                    <label class="form-label">End Date</label>
                                                                    <datetime type="datetime" v-model="expiry_date"  input-class="form-control" class="theme-orange"></datetime>
                                                                    <!-- <input type="datetime" placeholder="Expiry Date" class="form-control" v-model="end_date"> -->
                                                                </div>
                                                                   <div class="mb-3 col-md-4">
                                                                    <label class="form-label">Promo Type</label>
                                                                    <!-- <input type="number" placeholder="Phone number" class="form-control" v-model="phone"> -->
                                                                     <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="promo_type">
                                                                        <option value=""> --- Please Select --- </option>
                                                                        <option value="Discount"> Discount </option>
                                                                         <option value="Priced"> Priced </option>
                                                                    </select>
                                                                </div>
                                                               
                                                            </div>
                                                              <div class="row">
                                                                <div class="col-lg-3 ">  
                                                                   <label class="form-label"> Value Type </label>
                                                                    <!-- <input type="number" placeholder="Phone number" class="form-control" v-model="phone"> -->
                                                                     <select class=" form-control wide" id="inlineFormCustomSelect" v-model="value_type">
                                                                        <option value=""> --- Please Select --- </option>
                                                                        <option value="Percentage"> Percentage </option>
                                                                         <option value="Amount"> Amount </option>
                                                                    </select>
                                                                </div>
                                                                 <div class="mb-3 col-md-3">
                                                                    <label class="form-label">Usage Type</label>
                                                                    <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="usage_type">
                                                                        <option value=""> --- Please Select --- </option>
                                                                        <option value="One-time"> One Time </option>
                                                                         <option value="Once-a-day"> Once a day </option>
                                                                    </select>
                                                                </div>
                                                                 <div class="mb-3 col-md-3">
                                                                    <label class="form-label">Value</label>
                                                                    <input type="number" class="form-control" v-model="value">
                                                                </div>

                                                                <div class="mb-3 col-md-3">
                                                                   <label class="form-label">Promo Code</label>
                                                                   <input type="text" class="form-control" v-model="code">
                                                                </div>
    
                                                            </div>
                                                                </div>
                                                               
                                                            </div>
                                                            <br><br>
                                                            <div class="text-center">
                                                            <button style="width:30%" class="btn btn-rounded btn-large btn-primary" type="submit" v-if="update" @click="update_promo(promo_id)">Update Promo  </button>
                                                            <button style="width:30%" class="btn btn-rounded btn-large btn-primary" type="submit" @click="create_promo" v-else>Save Promo  </button>
                                                            </div>
                                                        <!-- </form> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
                            </div>
                        </div>
                    </div>
                
               <div class="col-12" style="margin-left:2.5em; margin-right:10em">
					<div class="card">
						<div class="card-body">
								<div class="row">
					<div class="col-lg-12">
                        <!-- <div class="container-fluid"> -->
						<div class="table-responsive table-hover fs-14">
							<table class="table mb-4 dataTablesCard card-table" id="orderTable">
								<thead>
									<tr>
										<th>Start Date</th>
										<th>End Date</th>
										<th> Promo Code</th>
										<th>Promo Type</th>
										<th>Value Type</th>
										<th>Usage type</th>
                                        <th>Value</th>
                                        <th>Edit </th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="promo in promos" :key="promo">
											<td>{{promo.start_date}}</td>
											<td> {{promo.expiry_date}}</td>
											<td>{{promo.code}} </td>
											<td>{{promo.promo_type}} </td>
                                            <td>{{promo.value_type}} </td>
                                            <td>{{promo.usage_type}} </td>
                                            <td>{{promo.Value}} </td>
                                            <td>
											<div class="d-flex">
												<!-- <a  data-bs-toggle="modal" :data-bs-target="`#changePermission` + promo.promo_id" > -->
                                                <div @click="update_promotion(promo.promo_id)">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#FF7B31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													</svg>
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
                </div>
            </div>
        </div>
</div>   
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Api from './Api'
import { Datetime } from 'vue-datetime';
    export default({
        name: 'AddPromo',
        components: {SideBar,  datetime: Datetime},
        data(){
			return {
                start_date: '',
                expiry_date: '',
                usage_type: '',
                promo_type: '',
                value_type: '',
                value:'',
                code:'',
                loading: false,
                errors: [],
                promo_id: '',
                promos: [], 
                update: false
            }
		},
        methods: {
            create_promo(){
               const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
                this.loading = true
                const data = {start_date:this.start_date, expiry_date:this.expiry_date, value:this.value, promo_type:this.promo_type, value_type:this.value_type, code:this.code, usage_type:this.usage_type, merchant_id:merchant_token}
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/promo/addorupdate', data)
                .then(response => {
                    this.$toast.success({
                        title:'Awesome!!!',
                        message:'Promo Has Been Created',
                    })
                    this.get_promo()
                })
                .catch(err => {
                    console.log(err.response);
                })
                .finally(() => {
                    this.loading = false
                })
            },
            
            get_promo(){
                const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
                this.loading=true
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/promo/get', {merchant_id: merchant_token})
                .then(response => {
                    console.log(response.data);
                    this.promos = response.data
                   })
                .catch(error =>{
                    console.log(error.response);
                })
            },
            update_promotion(id){
                let selected_promo = this.promos.filter(promo => promo.promo_id === id)
                this.start_date = selected_promo[0].start_date
                this.expiry_date = selected_promo[0].expiry_date
                this.promo_id = selected_promo[0].promo_id
                this.promo_type = selected_promo[0].promo_type
                this.usage_type = selected_promo[0].usage_type
                this.value_type = selected_promo[0].value_type
                this.value = selected_promo[0].value
                this.update = true
                this.promo_id = selected_promo[0].promo_id
                this.loading=true
            },

            update_promo(promo_id){
                const merchant_token = JSON.parse(localStorage.getItem('merchant_id'))
                const data = {start_date:this.start_date, expiry_date:this.expiry_date, promo_id:this.promo_id, value:this.value, promo_type:this.promo_type, value_type:this.value_type, code:this.code, usage_type:this.usage_type, merchant_id:merchant_token}
                this.loading=true
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/promo/addorupdate', data)
                .then(response => {
                    this.$toast.success({
                        title:'Awesome!!!',
                        message:'Promo Has Been Updated',
                    })
                    this.get_promo()
                })
                .catch(err => {
                    console.log(err.response);
                })
                .finally(() => {
                    this.loading = false
                })
            },
        },
        mounted(){
            this.get_promo()
        }
    })
</script>
<style scoped>
  .vdatetime-popup__header {
    padding: 18px 30px;
    background: #ff5430;
    color: #fff;
    font-size: 32px;
}
.vdatetime-calendar__month__day--selected > span > span, .vdatetime-calendar__month__day--selected:hover > span > span {
    color: #fff;
    background: #ff5430;
}
.vdatetime-time-picker__item--selected {
    color: #ff5430;
    font-size: 32px;
}
    .modal { 
   background-color: rgba(0, 0, 0, 0.5)
}
</style>    