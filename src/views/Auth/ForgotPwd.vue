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
										<a href=""><img src="../../statics/fav.png" alt=""></a>
									</div>
                                    <h4 class="text-center mb-4">Forgot Password</h4>
                                     <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}<br></strong></span>
                                    </div>
                                    <form @submit.prevent="submitForm">
                                          <div class="mb-3">
                                            <label class="mb-1"><strong>Mobile Number</strong></label>
                                              <VuePhoneNumberInput v-model="phone_number" :class="checking" ref="phone_number" default-country-code="NG" size="lg" :preferred-countries="['NG', 'AE', 'DM', 'CM', 'PG', 'KE']" required="true" />
                                            </div>
                                            <br><br>
                                         <div class="text-center">
                                           <button type="submit" class="btn btn-primary btn-block" :disabled="loading">Reset Password</button>
                                        </div>
                                    </form>
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
   import Api from  '../Api'
   import VuePhoneNumberInput from 'vue-phone-number-input'
   import 'vue-phone-number-input/dist/vue-phone-number-input.css'
    export default({
        name: 'ForgotPwd',
        data(){
            return{
                phone_number: '',
                errors: [],
                loading: false
            }
        },
        components: {VuePhoneNumberInput},
        methods: {
            submitForm(e){
               
                let phoneData = this.$refs.phone_number.phoneFormatted.replace(/\s/g, "");
                    Api.axios_instance.post(Api.baseUrl+'/auth/user/password_reset/', {phone:phoneData})
                    .then(res => {
                        this.$router.push('validate-token')
                        this.$toast.success({
                        title:'Awesome!!!',
                        message:'Token has been sent',
                    })
                    })
                    .catch(error => {
                        if (error.response){
                        for(const property in error.response.data){
                            this.errors.push(`${error.response.data[property]}`)
                        }
                    }
                        console.log(error);
                    })
                    .finally( () => {
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
.vue-phone-number-input{
    border-radius: 20px !important;
    width: 100%;
    height: 20px !important
}
.btn-color{
    background-color: rgb(241 235 235 / 70%);   
}
</style>