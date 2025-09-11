import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Sfc from './sfc/Prop.vue'
const app=createApp(App);
app.component('Sfc',Sfc)
app.mount('#app')
