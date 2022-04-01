<template>
    <div>
        <SideBar/>
           <div class="content-body" >
            <!-- row -->
			<div class="container-fluid" >
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item "><a href="/">Dashboard</a></li>
						<li class="breadcrumb-item active"><a href="/notifications">Notifications</a></li>
					</ol>
                </div>
				<div class="row">
				<div class="col-xl-8 col-xxl-8">
					<div class="col-xl-12">
						<div class="card overflow-hidden">
							<div class="card-body">
                                 <div id="DZ_W_Todo1" class="widget-media dz-scroll ">
                                    <ul class="timeline">
                                        <li v-for="notification in notifications" :key="notification">
                                            <div class="timeline-panel">
                                                <div class="media me-2 media-primary">
													<i class="fa fa-bell"></i>
												</div>
												<div class="media-body">
													<h5 class="mb-1">{{notification.title}}</h5>
                                                    <p>{{notification.message}}</p>
													<small class="d-block">{{moment(notification.time).fromNow()}} </small>
												</div>
												<div class="dropdown">
                                                    <span class="badge light badge-secondary" style="margin-right:20px" v-if="notification.checked == true">Unread</span>
                                                    <span class="badge light badge-success" style="margin-right:20px" v-if="notification.checked == false">Read</span>
												</div>
											</div>
                                        </li>
                                    </ul>
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

<script >
import SideBar from '../components/SideBar.vue'
import moment from 'moment'
import Api from "./Api.js"
export default ({
    name: 'Notifications',
    components: {SideBar},
    data(){
        return{
            notifications: [],
            page:1
        }
    },
    created: function () {
        this.moment = moment;
    },
    methods: {
        all_notifications(){
            Api.axios_instance.get(Api.baseUrl+'/notification/user/fetch')
            .then(response => {
               this.notifications = response.data
            })
        }
    },
    mounted(){
        this.all_notifications()
    }
})
</script>
