import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'
import Unicon from 'vue-unicons'
import {
    uniLayerGroupMonochrome,
    uniCarWash,
    uniAngleUp,
    uniAngleDown,
    uniDirection,
    uniSort
} from 'vue-unicons/dist/icons'

Unicon.add([uniAngleUp, uniAngleDown, uniDirection, uniSort])
createApp(App).use(Unicon).mount('#app')
