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
                                            <a href="index.html">
                                                <img  src="../../statics/fav.png"  /></a>
                                        </div>
                                        <h4 class="text-center mb-4">Validate Reset Token</h4>
                                         <div class="alert alert-danger alert-dismissible alert-alt fade show" v-if="errors.length">
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                                            </button>
                                            <span v-for="error in errors" :key="error"><strong>{{error}}</strong></span>
                                        </div>
                                        <form @submit.prevent="submitForm">
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Enter Token </strong></label>
                                                  <vue-otp-2
                                                    length="4"
                                                    join-character="-"
                                                    inputmode="numeric"
                                                    pattern="[0-9]*"
                                                    @onComplete="complete" 
                                                    />
                                                <!-- <input type="number" class="form-control" name="token" v-model="token" required> -->
                                            </div>
                                            <div class="text-center">
                                                <button class="btn btn-primary btn-block" :disabled="loading">SUBMIT</button>
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
import Api from "../Api.js"
export default ({
    name: 'ValidateResetToken',
    data(){
        return{
            errors: '',
            loading: false
        }
    },
    methods:{
        complete(value){
            let all_token = value
            let user_token = all_token.toString().replace(/,/g, "")
            Api.axios_instance.post(Api.baseUrl+'/auth/user/password_reset/validate_token/', {token:user_token})
            .then(response =>{
                this.$router.push('/confirm-password-reset/' + this.token)
            })
            .catch(error => {
                if (error.response){
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
<style scoped >
.sel_style{
     height: 55px;
     margin-right:-1%;
     border-radius: 20px 0px 0px 20px;
     padding-top:7px;
     font-weight:700
}
.btn-color{
    background-color: rgb(241 235 235 / 70%);   
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
</style>