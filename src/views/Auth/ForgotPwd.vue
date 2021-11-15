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
                                             <div class="input-group mb-3">
                                                 <span class="col-lg-3">                                   
                                                    <select class="default-select btn-color sel_style wide" name="country" v-model="country" required>
                                                    <option v-for="i in codes" :value="i.country" :key="i.code">{{i.code}}</option>
                                                 </select>
                                            </span>
										    <input type="text" class="form-control" placeholder="" name="phone" v-model='phone' required>

                                        </div>
                                        </div>
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
    export default({
        name: 'ForgotPwd',
        data(){
            return{
                phone: '',
                errors: [],
                country: 'NG',
                countryCod : '',
                codes: [{country: "NG", code:"+234"}, {country:"South Africa", code: "+235"}, {country:"Ghana", code: "+233"}],
                loading: false
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
                let phoneData = this.countryCod + this.phone
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
.btn-color{
    background-color: rgb(241 235 235 / 70%);   
}
</style>