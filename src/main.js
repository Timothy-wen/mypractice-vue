import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 导入后台管理全局样式表
import './assets/css/global.css'
import './assets/css/iconfont.css'
import './assets/css/index.css'
import './assets/css/me.css'
//import './plugins/element.js'
const app = createApp(App)
app.use(router)
app.mount('#app')