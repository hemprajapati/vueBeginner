import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Carousel, initTE } from "tw-elements";
import InlineSvg from 'vue-inline-svg';
import './assets/main.css'
const app = createApp(App)

app.use(router)
app.component('inline-svg', InlineSvg);
app.mount('#app')
