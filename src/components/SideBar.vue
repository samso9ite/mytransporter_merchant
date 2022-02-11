 <template>
   <div id="main-wrappeer" :class="toggleBurger">
        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <router-link :to="'/dashboard'"> <a class="brand-logo">
           		<img src="../statics/icon_svgs.svg"/>
			</a>

			</router-link>
            <div class="nav-control" v-on:click="toggleClass()">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->
	
		<div class="chatbox">
			<div class="chatbox-btn-close"></div>
			<div class="custom-tab-1">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
					</li>
				</ul>
				
			</div>
		</div>

		<!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							<div class="input-group search-area d-xl-inline-flex d-none">
								<button class="input-group-text"><i class="flaticon-381-search-2 text-primary"></i></button>
								<input type="text" class="form-control" placeholder="Search here...">
							</div>
                        </div>
                        <ul class="navbar-nav header-right">
                            <li class="nav-item dropdown notification_dropdown">
                                <router-link :to="'/notifications'">
									<a class="nav-link  ai-icon"  role="button" >
									<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12.638 4.9936V2.3C12.638 1.5824 13.2484 1 14.0006 1C14.7513 1 15.3631 1.5824 15.3631 2.3V4.9936C17.3879 5.2718 19.2805 6.1688 20.7438 7.565C22.5329 9.2719 23.5384 11.5872 23.5384 14V18.8932L24.6408 20.9966C25.1681 22.0041 25.1122 23.2001 24.4909 24.1582C23.8709 25.1163 22.774 25.7 21.5941 25.7H15.3631C15.3631 26.4176 14.7513 27 14.0006 27C13.2484 27 12.638 26.4176 12.638 25.7H6.40705C5.22571 25.7 4.12888 25.1163 3.50892 24.1582C2.88759 23.2001 2.83172 22.0041 3.36039 20.9966L4.46268 18.8932V14C4.46268 11.5872 5.46691 9.2719 7.25594 7.565C8.72068 6.1688 10.6119 5.2718 12.638 4.9936ZM14.0006 7.5C12.1924 7.5 10.4607 8.1851 9.18259 9.4045C7.90452 10.6226 7.18779 12.2762 7.18779 14V19.2C7.18779 19.4015 7.13739 19.6004 7.04337 19.7811C7.04337 19.7811 6.43703 20.9381 5.79662 22.1588C5.69171 22.3603 5.70261 22.6008 5.82661 22.7919C5.9506 22.983 6.16996 23.1 6.40705 23.1H21.5941C21.8298 23.1 22.0492 22.983 22.1732 22.7919C22.2972 22.6008 22.3081 22.3603 22.2031 22.1588C21.5627 20.9381 20.9564 19.7811 20.9564 19.7811C20.8624 19.6004 20.8133 19.4015 20.8133 19.2V14C20.8133 12.2762 20.0953 10.6226 18.8172 9.4045C17.5391 8.1851 15.8073 7.5 14.0006 7.5Z" fill="#759791"/>
										</svg>
										<span class="badge light text-white bg-secondary rounded-circle">{{notifications_count}}</span>
									</a>
								</router-link>
                            </li><li class="nav-item dropdown notification_dropdown">
                                <router-link :to="'/quick-tour'">
									<span style="font-size: 30px !important"><i class="fa fa-info-circle" aria-hidden="true" ></i></span>
									</a>
								</router-link>
                            </li>
    					   <li class="nav-item dropdown header-profile"  v-on:click="toggle()"> 
                                <a class="nav-link" role="button" data-bs-toggle="dropdown ">
									<div class="header-info me-3">
										<span class="fs-16 font-w600 ">{{name}}</span>
										<small class="text-end fs-14 font-w400">Merchant</small>
									</div>

                                    <img :src="logo" width="20" alt="" v-if="logo" />
									<img src="../statics/avatar.png" v-else />
                                </a>
                                <div class="dropdown-menu dropdown-menu-end " :class="toggleDropdown">
                                    <a class="dropdown-item ai-icon" @click="logout">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        <span class="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li> 
						</ul>
                    </div>
				</nav>
			</div>
		</div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav">
            <div class="deznav-scroll">
				<ul class="metismenu" id="menu">
					
                    <li>
						<router-link :to="'/dashboard'"> 
							<a class=" ai-icon"  aria-expanded="false">
								<i class="flaticon-025-dashboard"></i>
								<span class="nav-text">Dashboard</span>
							</a>
						</router-link>
                    </li>
					<li>
						<router-link :to="'/teams'"> 
							<a  class="ai-icon" aria-expanded="false">
								<i class="fa fa-user-circle-o" aria-hidden="true"></i>
								<span class="nav-text">Teams</span>
							</a>
						</router-link>
					</li>
                    <li>
						<router-link :to="'/orders'"> 
							<a class="ai-icon"  aria-expanded="false">
								<i class="flaticon-043-menu"></i>
									<span class="nav-text">Orders</span>
							</a>
						</router-link>
                    </li>
                    <li>
						<router-link :to="'/transactions'"> 
							<a class="ai-icon" aria-expanded="false">
								<i class="fa fa-money" aria-hidden="true"></i>
								<span class="nav-text">Payment</span>
							</a>
						</router-link>
                    </li>
					<li>
						<router-link :to="'/profile'"> 
							<a class="ai-icon" aria-expanded="false">
								<i class="fa fa-cog" aria-hidden="true"></i>
									<span class="nav-text">Settings</span>
							</a>
						</router-link>
                    </li>
                    <li>
						<router-link :to="'/rate'"> 
							<a class="ai-icon"  aria-expanded="false">
								<i class="fa fa-cogs" aria-hidden="true"></i>
									<span class="nav-text">Set Rate</span>
							</a>
						</router-link>
                    </li>
					<li>
						<router-link :to="'/promo'"> 
							<a class="ai-icon" aria-expanded="false">
								<i class="fa fa-plus-circle" aria-hidden="true"></i>
								<span class="nav-text">Promo </span>
							</a>
						</router-link>
                    </li>
					<li>
						<router-link :to="'/asset-list'"> 
							<a class="ai-icon" aria-expanded="false">
								<i class="fa fa-motorcycle" aria-hidden="true"></i>
								<span class="nav-text">All Asset</span>
							</a>
						</router-link>
                    </li>
                   
                </ul>
				<div class="plus-box">
					<p class="fs-16 font-w500 mb-4" style="color: white;">Get goods delivered in minutes</p>
					<a class="text-white fs-14" href="javascript:void(0);">Learn more</a>
				</div>
				<div class="copyright">
					<p><strong>MyTransporter Dashboard</strong> © 2021 All Rights Reserved</p>
				</div>
			</div>
        </div>
   </div>
</template>
        
<script>
    export default{
        name:'SideBar',
        data(){
            return{
				name: this.$store.state.user.username,
				email: this.$store.state.user.email,
				logo: this.$store.state.user.logo,
				notifications: '',
				toggleActive: false,
				toggleActiveDropdown: false
			}
        },
		methods: {
			logout(){
				localStorage.clear();
				window.location.href="/"
			},
			toggleClass(){
				this.toggleActive = !this.toggleActive 
			},
			toggle(){
				this.toggleActiveDropdown = !this.toggleActiveDropdown
			}
		}, 
		computed: {
			notifications_count: function(){
			return this.$store.state.notifications.length },
			toggleBurger: function(){
				return this.toggleActive ? "menu-toggle" : ""
			},
			toggleDropdown: function(){
				return this.toggleActiveDropdown ? "show" : ""
			}
		}
		
	}
</script>

<style scoped>
a.router-link-active.router-link-exact-active{
	background-color: #ff6600c9  !important; 
	color: white !important;
	font-weight: 600 !important;
}
</style>