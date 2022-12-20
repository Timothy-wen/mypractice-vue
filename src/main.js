import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 导入后台管理全局样式表，改：前三个有问题不生效
import './assets/css/global.css'
import './assets/css/iconfont.css'
import './assets/css/index.css'
import './assets/css/me.css'

//Element包完整引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//markdownw文本编辑
import mavonEditor from 'mavon-editor'
//import 'mavon-editor/dist/css/index.css'

//代码高亮插件
import prismCss from './assets/lib/prism/prism.css'
//直接导入报错击伤了*as
import * as prismjs from './assets/lib/prism/prism'

//密码加密
import JSEncrypt from 'jsencrypt'

// 导入 NProgress 进度条包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(router)
app.use(prismCss)
app.use(prismjs)
app.use(mavonEditor)
app.use(ElementPlus)
app.mount('#app')

//v2直接挂载在原型Vue上，v3用app.config.globalProperties：
//https://blog.csdn.net/lixilai_rjkf/article/details/122493074?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-122493074-blog-125305819.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-122493074-blog-125305819.pc_relevant_default&utm_relevant_index=1
app.config.globalProperties.$http = axios

/**
 * 配置全局接口加密方法,改：还需要研究公钥如何生成
 * @param obj
 * @returns {PromiseLike<ArrayBuffer>}
 */
app.config.globalProperties.$encruption = function (obj) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzSJK+Pc1IdFWz83FWvKH' +
        'kTLmHq87J+5ndEdlH86c9AcSlaj4hyTWyaQOP8WPuvDfxL93TbYUEQ8bidHwyVAI' +
        'THoDABDQqBr0mDTfTqogHxWaqjEUh+g+y96KfshmD312lZD3cMxSrgA1NUlTBMpT' +
        'JQ+GQ1Rn0qVaVAi6OziAct9HEeFupJiw09sLzQTt5zY5s/KOgjQ7wPck4pGxO3tl' +
        'p/Iwws7WyabOjPm1z7XxcHWsetO9H6nKeJ8WaZ6P6baFasiNuhiBOvnGslRJ0Dgd' +
        'xsz7+feK3JbIwHr6vVfhJ9Bn2rnSYqpydg3odMyU54/lV0kdWup7SbJILAtaS8kv' +
        'EwIDAQAB')
    return encrypt.encrypt(obj)
}