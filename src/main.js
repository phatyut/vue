import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Sfc from './sfc/Prop.vue'
import fallthrow from "../src/codepublic/fallthrow.vue"
import Slot from './codepublic/slot/Slot.vue'
const app=createApp(App);
app.component('Sfc',Sfc);
app.component('fallthrow',fallthrow);
app.component('Slot',Slot)
app.mount('#app')
