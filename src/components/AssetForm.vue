<template>
    <div>
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
        </div>
        <div class="col-lg-8 order-lg-1">
            
            <form >
                <div class="row">
                    <div class="mb-3">
                        <label for="email"  class="form-label">Plate Number </label>
                        <input type="email" class="form-control" id="email" placeholder="XXX-XXX-XXX"  required>
                        <div class="invalid-feedback">
                            Please enter a valid plate number 
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">Asset Color </label>
                        <input type="text" class="form-control" placeholder="Green" required>
                        <div class="invalid-feedback">
                            Bajaj
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName"  class="form-label">Asset Manufacturer </label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required >
                        <div class="invalid-feedback">
                            
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Year Purchased </label>
                        <input type="year" class="form-control" required>
                        <div class="invalid-feedback">
                            2020
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName"  class="form-label">Assigned User </label>
                        <select class="me-sm-2 default-seBusiness Ownerlect form-control wide" id="inlineFormCustomSelect" v-model="assigned_user">
                            <option value="BIKE" v-for="team in teams" :key="team">{{team.user.first_name}} {{team.user.last_name}}</option>
                        </select>
                    <div class="invalid-feedback">
                            
                    </div>
                    </div>
                </div>
                <hr class="mb-4">
                
            </form>
        </div>
            </div>
        </template>

    <script>
        import Api from "../views/Api.js"
        export default ({
            name: 'AssetForm',
            props: {
                initialAsset: Object
            },
            data(){
                return{
                Asset: this.initialAsset,
                teams: [],
                assigned_user: ''
                }
            },

            method: {
                getTeams(){
                    const merchant = JSON.parse(localStorage.getItem('merchant_id'))
                    Api.axios_instance.post(Api.baseUrl+'/merchant/portal/team/get/', {merchant_id: merchant})
                    .then(response => {
                        console.log(response.data)
                        this.teams = response.data
                    })
                }
            },
            mounted(){
                this.getTeams()
            }
        })
    </script>