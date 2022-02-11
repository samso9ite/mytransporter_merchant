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
                                            <label class="mb-1"><strong>Password</strong></label>
                                            <input type="password" class="form-control" name="password" v-model="password" id="PasswordShow" required>
                                              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" style="color:#929496" @click="passwordToggle()" ></span>
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
    name: 'ConfirmPwd',
    data(){
        return{
            errors: '',
            Password: '',
            loading: false
        }
    },
    methods:{
        submitForm(e){
            const token = this.$route.params.token
            const data = {password:this.password, token:token}
            Api.axios_instance.post(Api.baseUrl+'/auth/user/password_reset/confirm/', data)
            .then(response =>{
                this.$router.push('/')
                console.log(response.data);
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
        },
        passwordToggle(){
            var x = document.getElementById("PasswordShow");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
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
.field-icon {
  float: right;
  /* margin-left: -20px; */
  margin-top: -2.3em;
  position: relative;
  z-index: 2;
}
</style>