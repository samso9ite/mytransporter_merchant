<template>
    <div>
        <SideBar />
          <div class="content-body" >
			  	<div class="container-fluid">
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/dashboard">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/headsup">Headsup</a></li>
					</ol>
                </div>
                <div class="row">
                    <h3 > Getting Started with MyTransporter </h3>
                    <p style="margin-bottom: 35px" > Five easy steps to get you started </p>
                     <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Set Transport Rate </h4>
                            </div>
							<div class="card-body">
                                <div class="row">
                                    <div class="" >
                                        <img src="../statics/1_1.png" align="left"  style="margin-right:20px !important"/> <br> Get to set the rate of all your registered transport channels per kilometre.<br><br> <a :class="has_set_rate ? 'has_set_rate' : 'defaultClass'"  @click="routeRate"> <b>Set Rate Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a>
                                       
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                   <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Set Company Profile </h4>
                            </div>
							<div class="card-body">
                                <div class="row">
                                    <div class="" >
                                        <img src="../statics/2.png" align="left"  style="margin-right:20px !important"/> <br> Set the company's  logo and other vital details about the company from this <br><br> <a :class="has_set_profile ? 'has_set_profile' : 'defaultClass'"  @click="routeProfile"> <b>Set Profile Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                     <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add Team Members </h4>
                            </div>
							<div class="card-body">
                                <div class="row">
                                    <div class="" >
                                        <img src="../statics/3.png" align="left"  style="margin-right:20px !important"/> <br> Get to add staffs to manage your orders assigning role to the staff registered.<br><br><a :class="has_added_team ? 'has_added_team' : 'defaultClass'"  @click="routeTeams"> <b>Add Team Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                     </div>
                </div>
                 <div class="row">
                     <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add Bank Account </h4>
                            </div>
							<div class="card-body">
                                <div class="row">
                                    <div class="" >
                                        <img src="../statics/4.png" align="left"  style="margin-right:20px !important"/> <br> Add one or more bank accounts to receive payments when orders are completed.<br><br> <a :class="has_set_transactions ? 'has_added_team' : 'defaultClass'"  @click="routeTransactions"> <b>Add Account Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a>
                                    </div>
                                    <!-- <div>
                                         <p> </p>
                                    </div> -->
                                </div>
                               
                            </div>
                        </div>
                    </div>
                   <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Start Receiving Orders </h4>
                            </div>
							<div class="card-body">
                                <div class="row">
                                    <div class="" >
                                        <img src="../statics/5.png" align="left"  style="margin-right:20px !important"/> <br> Awesome!!! You can start receiving orders as all settings has been done. <br><br><router-link :to="'/dashboard'"> <a style="color: #ff6600"> <b>Start Receiving Orders <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a></router-link>
                                    </div>
                                    <!-- <div>
                                         <p> </p>
                                    </div> -->
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
export default ({
   name: 'Headsup',
   components: {
       SideBar
   },
   data(){
       return{
           tensport_rate: false,
           profile: false,
           team: false,
           account: false,
           disabled: true,
           has_added_asset: this.$store.state.user.has_added_asset,
           has_added_team: this.$store.state.user.has_added_team,
           has_set_profile: this.$store.state.user.has_set_profile,
           has_set_rate: this.$store.state.has_set_rate
       }
   },
   methods: {
        routeRate(){
            if (this.has_set_rate == false ){
                this.$router.push('/rate')
            }
        },
        routeProfile(){
            if(this.has_set_profile == false ){
                this.$router.push('/profile')
            }
        },
        routeTeams(){
            if(this.has_added_team == false){
                this.$router.push('/teams')
            }
        },
        routeTransactions(){
            this.$router.push('/transactions')
        },
        routeDashboard(){
            this.$router.push('/dashboard')
        }
   }
})

</script>

<style scoped>
.has_set_rate {
    color: grey;
}
.has_set_rate {
    color: grey;
}
.has_set_profile {
    color: grey;
}
.defaultClass{
    color: #ff6600;
    cursor: pointer
}
@media screen and (max-width: 500px) {
  .column {
    width: 50%;
  }
}

</style>