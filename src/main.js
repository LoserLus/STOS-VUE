import {createApp, inject} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons'

import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import './mock/index.js'
axios.defaults.withCredentials = true;


const app=createApp(App)

for (const [key, component] of Object.entries(icons)) {
    app.component(key, component)
}
app.use(store)
app.use(VueAxios,axios)
app.use(router)
app.use(ElementPlus)
app.use(VueCookies)
app.mount('#app')
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