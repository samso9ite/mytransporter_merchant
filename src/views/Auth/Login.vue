<template>
<div class="root">
    <!-- <video autoplay muted loop id="myVideo">
        <source src="../../statics/video_preview_h264.mp4" type="video/mp4">
      </video> -->
    <div class="authincation h-100 ontop bg">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<a href="index.html"><img src="../../statics/fav.png" alt=""></a>
									</div>
                                    <h4 class="text-center mb-4">Sign in your account</h4>
                                     <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                        </div>
                                    <form @submit.prevent="submitForm">
                                          <div class="mb-3">
                                            <label class="mb-1"><strong>Mobile Number</strong></label>
                                             <div class="input-group mb-3">
                                                 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide" name="country" v-model="country" required>
                                                    <option v-for="i in codes" :value="i.country" :key="i.code">{{i.code}}</option>
                                                 </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="" name="phone" v-model='phone' required>

                                        </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" v-model="password" required>
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3">
                                               <div class="form-check custom-checkbox ms-1">
													<input type="checkbox" class="form-check-input" id="basic_checkbox_1">
													<label class="form-check-label" for="basic_checkbox_1">Remember my preference</label>
												</div>
                                            </div>
                                            <div class="mb-3">
                                               <router-link :to="'/forgot-pwd'"> Forgot Password? </router-link>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                           <button type="submit" class="btn btn-primary btn-block" :disabled="loading">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p><router-link :to="'/register'"> Don't have an account?   Sign up</router-link></p>
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
import Api from "../Api.js"
    export default({
        name: "Login",
        data(){
            return{
                password: '',
                phone: '',
                country: 'NG',
                errors: [],
                phoneData :'',
                loading: false,
                countryCod : '',
                codes: [{country: "NG", code:"+234"}, {country:"South Africa", code: "+235"}, {country:"Ghana", code: "+233"}],
            }
        },
        methods: {
            submitForm(e){
                this.loading = true
                     var output =  this.codes.filter(code => {
                return code.country == this.country
              })
            if (output[0].country === this.country){
                this.countryCod = output[0].code
            }
            this.phoneData = this.countryCod + this.phone
                const formData = {password: this.password, email: this.phoneData}
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/login', formData)
                .then(response => {
                    console.log(response.data)
                    window.localStorage.setItem('token', JSON.stringify(response.data.token))
                    window.localStorage.setItem('merchant_id', JSON.stringify(response.data.merchants[0].merchant.merchant_id))
                    window.localStorage.setItem('email', JSON.stringify(response.data.merchants[0].merchant.email))
                    window.localStorage.setItem('logo', JSON.stringify(response.data.merchants[0].merchant.logo))
                    window.localStorage.setItem('name', JSON.stringify(response.data.merchants[0].merchant.name))
                    window.localStorage.setItem('wallet_balance', JSON.stringify(response.data.merchants[0].merchant.wallet_balance))
                    window.localStorage.setItem('pending_wallet_balance', JSON.stringify(response.data.merchants[0].merchant.pending_wallet_balance))
                    window.localStorage.setItem('isAuthenticated', true)
                    this.$router.push('/dashboard')
                })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${error.response.data[property]}`)
                        }
                    }
                })
                .finally(() => {
                    this.loading = false
                })
              }
        }
    }) 
</script>
<style scoped>
.bg {
  /* The image used */
  background-image: url("../../statics/bg13.png");
 background-blend-mode: overlay;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
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
@media only screen and (max-width: 1400px)
.form-control {
    height: auto !important;
}
</style>
