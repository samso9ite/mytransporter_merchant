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
                                        <img src="../statics/1_1.png" align="left"  style="margin-right:20px !important"/> <br> Get to set the rate of all your registered transport channels per kilometre.<br><br><router-link :to="'/rate'" target="_blank"> <a style="color: #ff6600"> <b>Set Rate Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a></router-link>
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
                                        <img src="../statics/2.png" align="left"  style="margin-right:20px !important"/> <br> Set the company's  logo and other vital details about the company from this <br><br><router-link :to="'/profile'" target="_blank"> <a  style="color: #ff6600"> <b>Set Profile Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a></router-link>
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
                                        <img src="../statics/3.png" align="left"  style="margin-right:20px !important"/> <br> Get to add staffs to manage your orders assigning role to the staff registered.<br><br><router-link :to="'/teams'" target="_blank"> <a style="color: #ff6600"> <b>Add Team Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a></router-link>
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
                                        <img src="../statics/4.png" align="left"  style="margin-right:20px !important"/> <br> Add one or more bank accounts to receive payments when orders are completed.<br><br><router-link :to="'/transactions'" target="_blank"> <a style="color: #ff6600"> <b>Add Account Now <i class="fa fa-arrow-right" aria-hidden="true"></i> </b></a></router-link>
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
           account: false
       }
   }
})
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .column {
    width: 50%;
  }
}
</style>