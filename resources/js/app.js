require("./bootstrap");
import axios from 'axios';
import VueAxios from 'vue-axios';


// import {
//     Form,
//     HasError,
//     AlertError
// } from "vform";

// window.Form = Form;
// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

window.Vue = require("vue");
import VueRouter from "vue-router";
Vue.use(VueAxios, axios);
// axios.defaults.baseURL = '/api';

Vue.use(VueRouter);

let routes = [{
        path: "/dashboard",
        name: "dashboard",
        component: require("./components/Dashboard.vue").default
    },
    {
        path: "/profile",
        name: "profile",
        component: require("./components/Profile.vue").default
    },
    {
        path: '/user',
        name: "user",
        component: require('./components/Users.vue').default
    }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

// Vue.filter("capitalize", function (value) {
//     if (!value) return "";
//     value = value.toString();
//     return value.charAt(0).toUpperCase() + value.slice(1);
// });

// Vue.filter("theDate", function (created) {
//     return moment(created).format("MMMM Do, YYYY");
// });


const app = new Vue({
    el: "#app",

    router,
});
