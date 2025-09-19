import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Sfc from './sfc/Prop.vue'
import fallthrow from "../src/codepublic/fallthrow.vue"
import Slot from './codepublic/slot/Slot.vue'
import ScopeSlot from './codepublic/scopeslot/ScopeSlot.vue'
import Dynamicpublic from './dynamic-public/Dynamicpublic.vue'
import Dynamicmain from "./dynamic-public/Dynamcimain.vue"
import Binddynamic from './dynamic-public/Binddynamic.vue'
import Teleports from "./codepublic/teleport/Teleports.vue"

const app=createApp(App);
app.component('Sfc',Sfc);
app.component('fallthrow',fallthrow);
app.component('Slot',Slot)
app.component('ScopeSlot',ScopeSlot);
// app.component("Dynamicpublic",Dynamicpublic)
// app.component("Dynamicmain",Dynamicmain)
// app.component("Binddynamic",Binddynamic)\
app.component("Teleports",Teleports)
app.mount('#app')
