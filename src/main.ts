import { createApp } from 'vue';
import App from './App.vue';
import store from "@/store/index";
import router from './router';
import ElementPlus from 'element-plus';

// 引入样式
import './style.css';
import "./assets/style/global.less";
import 'element-plus/dist/index.css';

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app');