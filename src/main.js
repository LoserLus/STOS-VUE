import {createApp, inject} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
axios.defaults.withCredentials = true;


const app=createApp(App).use(store).use(VueAxios,axios).use(router).use(ElementPlus).use(VueCookies).mount('#app')
//App.config.globalProperties.$cookies = VueCookies

router.beforeEach((to,from,next)=>{
    if(to.path == '/login' || to.path == '/register'||to.path=='/'){
        next();
    }else{
        //console.log(app.$cookies.keys("session_id"));
        if(!app.$cookies.isKey("session_id")) {
            alert('您还没有登录，请先登录');
            next('/login');
        }
        else
            next();
    }
})