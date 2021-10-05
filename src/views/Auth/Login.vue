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
                                            <input type="number" class="form-control" name="phone" v-model="phone">
                                        </div>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" v-model="password">
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
                                           <button type="submit" class="btn btn-primary btn-block">Sign Me In</button>
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
                errors: []
            }
        },
        methods: {
            submitForm(e){
                const formData= {password: this.password, email: this.phone}
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
                    window.location.href='/dashboard'
                    // this.$store.commit('set_user_details', data)
                })
                .catch(error =>{
                    if(error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${property}:${error.response.data[property]}`)
                        }
                        console.log(error.response);
                    }
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
</style>
