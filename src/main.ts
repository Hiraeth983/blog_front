import { createApp } from 'vue';
import App from './App.vue';
import store from "@/store/index";
import router from './router';

// 引入样式
import './style.css';
import "./assets/style/global.less";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');