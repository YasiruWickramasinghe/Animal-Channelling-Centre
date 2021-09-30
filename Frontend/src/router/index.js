import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "Home",
        component: () => import( /* webpackChunkName: "home" */ '../views/Home/Home.vue')
    },
    {
        path: "/daycare-reg",
        name: "daycare-reg",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare.vue')
    },
    {
        path: "/daycare-packs",
        name: "daycare-packs",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-packages.vue')
    },
    {
        path: "/daycare-receipt",
        name: "daycare-receipt",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-receipt.vue')
    },
    {
        path: "/daycare-details",
        name: "daycare-details",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-details.vue')
    },
    {
        path: "/daycare-update",
        name: "daycare-update",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-update.vue')
    },
    {
        path: "/daycare-confirm",
        name: "daycare-confirm",
        component: () => import( /* webpackChunkName: "home" */ '../views/Daycare/Daycare-confirm.vue')
    },

    //Channelling Routers
    {
        path: '/ch_usercard',
        name: 'ChViewChannel',
        component: () => import('../views/Channel/ChViewChannel.vue')
    },
    {
        path: '/ch_appointment:id',
        name: 'ChApp',
        component: () => import('../views/Channel/ChAppointment.vue')
    },
    {
        path: '/ch_formslot',
        name: 'ChNewChannelform',
        component: () => import('../views/Channel/ChNewChannel.vue')
    },
    {
        path: '/ch_manageslot',
        name: 'ChSlotManage',
        component: () => import('../views/Channel/CHMangeSlot.vue')
    },
    {
        path: '/ch_avachannel',
        name: 'ChAvaChannel',
        component: () => import('../views/Channel/ChAvailableChannel.vue')
    },
    {
        path: '/ch_avaslot',
        name: 'ChAvaSlot',
        component: () => import('../views/Channel/ChAvailableSlot.vue')
    },
    {
        path: '/ch_report',
        name: 'ChReport',
        component: () => import('../views/Channel/ChReport.vue')
    },
    {
        path: '/ch_request',
        name: 'ChChannelReq',
        component: () => import('../views/Channel/ChRequest.vue')
    },
    {
        path: '/ch_updateslot:id',
        name: 'ChUpdateSlot',
        component: () => import('../views/Channel/ChUpdateChannel.vue')
    },

    {
        path: '/ch_appointment',
        name: 'ChApp',
        component: () => import('../views/Channel/ChAppointment.vue')
    },
    {
        path: '/ch_formslot',
        name: 'ChNewChannelform',
        component: () => import('../views/Channel/ChNewChannel.vue')
    },
    {
        path: '/ch_manageslot',
        name: 'ChSlotManage',
        component: () => import('../views/Channel/CHMangeSlot.vue')
    },

    // Pet Management Routes
    {
        path: '/petdisplay',
        name: 'petdisplay',
        component: () => import('../views/Pet/Pet Management/Pet Display.vue')
    },
    // Dog Management Routes
    {
        path: '/dogcreate',
        name: 'dogcreate',
        component: () => import('../views/Pet/Dog Management/Dog Create.vue')
    },
    {
        path: '/dogdisplay',
        name: 'dogdisplay',
        component: () => import('../views/Pet/Dog Management/Dog Display.vue')
    },
    {
        path: '/dogupdate',
        name: 'dogupdate',
        component: () => import('../views/Pet/Dog Management/Dog Update.vue')
    },
    {
        path: '/dogbreedcreate',
        name: 'dogbreedcreate',
        component: () => import('../views/Pet/Dog Management/Dog Breed Create.vue')
    },
    {
        path: '/dogbreeddisplay',
        name: 'dogbreeddisplay',
        component: () => import('../views/Pet/Dog Management/Dog Breed Display.vue')
    },
    {
        path: '/dogbreedupdate',
        name: 'dogbreedupdate',
        component: () => import('../views/Pet/Dog Management/Dog Breed Update.vue')
    },
    // Cat Management Routes
    {
        path: '/catcreate',
        name: 'catcreate',
        component: () => import('../views/Pet/Cat Management/Cat Create.vue')
    },
    {
        path: '/catdisplay',
        name: 'catdisplay',
        component: () => import('../views/Pet/Cat Management/Cat Display.vue')
    },
    {
        path: '/catupdate',
        name: 'catupdate',
        component: () => import('../views/Pet/Cat Management/Cat Update.vue')
    },
    {
        path: '/catbreedcreate',
        name: 'catbreedcreate',
        component: () => import('../views/Pet/Cat Management/Cat Breed Create.vue')
    },
    {
        path: '/catbreeddisplay',
        name: 'catbreeddisplay',
        component: () => import('../views/Pet/Cat Management/Cat Breed Display.vue')
    },
    {
        path: '/catbreedupdate',
        name: 'catbreedupdate',
        component: () => import('../views/Pet/Cat Management/Cat Breed Update.vue')
    },
    // user routes
    {
        path: "/UserProfile",
        name: "UserProfile",
        component: () => import('../views/User/User.vue')
    },
    {
        path: "/SignIn",
        name: "SignIn",
        component: () => import('../views/User/SignInView.vue')
    },
    {
        path: "/SignUp",
        name: "SignUp",
        component: () => import('../views/User/SignUpView.vue')
    },
    {
        path: "/UserManagement",
        name: "UserManagement",
        component: () => import('../views/User/UserManagement.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes
})

export default router