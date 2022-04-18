<template>

    <div>
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
                                     <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close" @click="clearErrors">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                        </div>
									<div class="text-center mb-3">
										<a href="index.html"><img src="../../statics/fav.png" alt=""></a>
									</div>
                                    <h4 class="text-center mb-4">Partner Signup</h4>
                                    <form @submit.prevent="register">
                                        <div class="mb-3">
                                            <label class="mb-1" ><strong>Company Name</strong></label>
                                            <input type="text" class="form-control" placeholder="Company Name" name="company_name" v-model="company_name" required>
                                        </div>
                                          <div class="mb-3">
                                            <label class="mb-2"><strong>Transport Type</strong></label>
                                            <div class="row">
                                               <Multiselect v-model="transport_types" :options="options" :multiple="true" class="form-class" />
                                        </div>
                                        </div>
                                         <label class="mb-3"><strong>First & Last Name</strong></label>
                                         <div class="input-group">
											<!-- <span class="input-group-text">Firstname</span> -->
                                            <input type="text" class="form-control" placeholder="First Name" v-model="first_name" required>
                                            <input type="text" class="form-control" placeholder="Last Name" v-model="last_name" required>
                                        </div>
                                        <label class="mb-3"><strong>Mobile Number</strong></label>
                                                <div class="input-group mb-3">
                                                <VuePhoneNumberInput v-model="phone_number"  ref="phone_number" default-country-code="NG" size="lg" :preferred-countries="['NG', 'AE', 'DM', 'CM', 'PG', 'KE']" required/>

                                        </div>
                                        <br>
                                        <div class="mb-3">
                                            <label class="mb-1"><strong>Email</strong></label>
                                            <input type="email" class="form-control" placeholder="hello@example.com" name="email" v-model="email" required>
                                        </div>
                                       
                                        <div class="mb-3">
                                            <label class="mb-1" ><strong>Password</strong></label>
                                             <VuePassword
                                                v-model="password"
                                                :disableStrength= true
                                                />
                                            <!-- <input type="password" class="form-control"  v-model="password" name="password" id="PasswordShow" required >
                                             <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" style="color:#929496" @click="passwordToggle()" ></span> -->
                                   
                                        </div>
                                       <div class="row d-flex justify-content-between mt-4 mb-2">
                                            <div class="mb-3">
                                               <div class="form-check custom-checkbox ms-1">
													<input type="checkbox" class="form-check-input" id="basic_checkbox_1" required>
													<label class="form-check-label" for="basic_checkbox_1">Accept <a href="https://mytransporter.io/merchant_terms.html" target="_blank">Terms & Condition</a></label>
												</div>
                                            </div>
                                        </div>
                                        <div class="text-center mt-4">
                                            <button  class="btn btn-primary btn-block" :disabled="loading">Sign me up</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        <p>Already have an account? <a class="text-primary" ><router-link :to="'/'"> Sign in </router-link> </a></p>
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
import Multiselect from 'vue-multiselect'
import VuePassword from 'vue-password';
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
export default {
    name:"Register",
    data(){
        return{
            company_name:'',
            last_name:'',
            email:'',
            password:'',
            phone_number:'',
            first_name:'',
            transport_types: null,
            options: ['BIKE', 'TRUCK'],
            errors: [],
            loading: false
        }
    },
    components: { Multiselect, VuePhoneNumberInput, VuePassword },
    methods: {
        // passwordToggle(){
        // /8/     var x = document.getElementById("PasswordShow");
        //     if (x.type === "password") {
        //         x.type = "text";
        //     } else {
        //         x.type = "password";
        //     }
        // },
        register(e){
            this.loading = true
            let phoneData = this.$refs.phone_number.phoneFormatted.replace(/\s/g, "");
            const formData = {
                phone: phoneData,
                email:this.email,
                password: this.password,
                name: this.company_name,
                last_name: this.last_name,
                first_name: this.first_name,
                // country: this.country,
                transport_types: this.transport_types
            }
            Api.axios_instance.post(Api.baseUrl+'/merchant/portal/register', formData)
            .then(response => {
                this.$store.commit('store_merchant_id', {merchant_id:response.data.merchant_id})
                this.$toast.success({
                        title:'Awesome!!!',
                        message:'Account Created',
                    })
                this.$router.push('/activate')
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
       
        computed: {
            countryCode(){
                return this.codes.filter(code => {
                    this.countryCode = code.country
                    return code.country
                })
            }
        }
    }
}
</script>

<style scoped>
.multiselect_tags {
    min-height: 55px !important;
    background: #ff6600 !important;    
    margin-right: 20px !important;
    width :  95% 
}
.multiselect * {
    margin-right: 28px !important;
}

.btn-color{
    background-color: rgb(241 235 235 / 70%);   
}
.vue-phone-number-input{
    border-radius: 20px !important;
    width: 100%;
    height: 20px !important
}
.bg {
  /* The image used */
  background-image: url("../../statics/bg13.png");
 background-blend-mode: overlay;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.multiselect__content-wrapper {
    margin-right: 90% !important 
}
a:hover {
    color: #ff6600;
}
.field-icon {
  float: right;
  /* margin-left: -20px; */
  margin-top: -2.3em;
  position: relative;
  z-index: 2;
}
.form-control{
    border-radius: 0px !important
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>