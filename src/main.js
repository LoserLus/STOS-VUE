import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAxios from 'vue-axios'


createApp(App).use(store).use(VueAxios,axios).use(router).use(ElementPlus).mount('#app')
