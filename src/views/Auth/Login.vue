<template>
<div class="root">
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
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                    </div>
                                    <form @submit.prevent="submitForm">
                                        <div class="mb-3" v-if="phone_active">
                                            <label class="mb-1"><strong>Phone Number </strong></label>
                                            <div class="input-group mb-3">
                                                <VuePhoneNumberInput v-model="phone_number" ref="phone_number" required default-country-code="NG" size="lg" :preferred-countries="['NG', 'AE', 'DM', 'CM', 'PG', 'KE']" />
                                            </div>
                                            <p @click="set_phone_active()"  style="padding-top:20px"> Switch to email</p>
                                        </div>

                                        <div class="mb-3" v-else>
                                            <label class="mb-1"><strong> Email </strong></label>
                                            <div class="input-group mb-3">
                                                <input type="email" class="form-control" name="email" v-model="email" placeholder="youremail@gmail.com">
                                            </div>
                                            <p @click="set_phone_active()" > Switch to phone</p>
                                        </div>
                                    
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Password</strong></label>
                                               <VuePassword
                                                v-model="password"
                                                :disableStrength = true
                                                />
                                            <!-- <input type="password" class="form-control" name="password" v-model="password" id="PasswordShow" required>
                                              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" style="color:#929496" @click="passwordToggle()" ></span> -->
                                        </div>
                                        <div class="row d-flex justify-content-between mt-4 mb-2">
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
import Api from "../Api.js";
import VuePhoneNumberInput from 'vue-phone-number-input'
import VuePassword from 'vue-password';
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
    export default({
        name: "Login",
        components: {VuePhoneNumberInput, VuePassword},
        data(){
            return{
                password: '',
                errors: [],
                email: '',
                phone_active: false,
                phone_number:'',
                loading: false,
               }
        },
        methods: {
            set_phone_active(){
                this.phone_active = !this.phone_active
            },
            submitForm(e){
                this.loading = true
                let formData;
                if (this.phone_active){
                    let phoneData = this.$refs.phone_number.phoneFormatted.replace(/\s/g, "");
                    formData = {password: this.password, email: phoneData} 
                }
                else{
                     formData = {password: this.password, email: this.email} 
                }
                Api.axios_instance.post(Api.baseUrl+'/merchant/portal/login', formData)
                .then(response => {
                    window.localStorage.setItem('token', JSON.stringify(response.data.token))
                    window.localStorage.setItem('merchant_id', JSON.stringify(response.data.merchants[0].merchant.merchant_id))
                    window.localStorage.setItem('isAuthenticated', true)
                    window.localStorage.setItem('is_verified', JSON.stringify(response.data.merchants[0].merchant.is_verified))
                    const data = {
                      logo: response.data.merchants[0].merchant.logo,
                        username : response.data.merchants[0].merchant.name,
                        email: response.data.merchants[0].merchant.email,
                        wallet_balance:  response.data.merchants[0].merchant.wallet_balance,
                        is_verified:  response.data.merchants[0].merchant.is_verified,
                        pending_wallet_balance : response.data.merchants[0].merchant.pending_wallet_balance,
                        has_added_asset: response.data.merchants[0].merchant.has_added_asset,
                        has_added_team: response.data.merchants[0].merchant.has_added_team,
                        has_set_profile: response.data.merchants[0].merchant.has_set_profile,
                        has_set_rate: response.data.merchants[0].merchant.has_set_rate
                    }
                    this.$store.commit('profileDetails', data)
                    if(response.data.merchants[0].merchant.is_verified){
                        this.$router.push('/dashboard')
                    }
                    else if (response.data.merchants[0].merchant.is_verified === false){
                        this.$router.push('/headsup')
                    }
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
              },
               clearErrors(){
                    this.errors.splice(0);
            },
        }
    }) 
</script>
<style scoped>
.form-control{
    height: 50px;
    border-radius: 4px;
}
.vue-phone-number-input{
    border-radius: 20px !important;
    width: 100%;
    height: 20px !important
}
.checking{
    height: 70px !important
}
.input-tel.lg {
    height: 80px !important
}
.bg {
  /* The image used  */
  background-image: url("../../statics/bg13.png");
 background-blend-mode: overlay;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.btn-color{
    background-color: rgb(241 235 235 / 70%);   
}
@media only screen and (max-width: 1400px)
.form-control {
    height: auto !important;
}

.field-icon {
  float: right;
  margin-top: -2.3em;
  position: relative;
  z-index: 2;
}
</style>
 