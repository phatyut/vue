<template>
      <div  :class="{mainclass:true}">

              <!-- <div>
                <Bindclass></Bindclass>
              </div> -->

              <!-- <div> <Form></Form></div> -->

              <!-- <div><Computed></Computed></div> -->

              <div>
                 <!-- <div>
                   <watcher></watcher>
                 </div> -->

                 <!-- <div>
                  <Truewatcher></Truewatcher>
                 </div> -->
              </div>

              <!-- <div>
                <Sfc></Sfc>
              </div> -->
<!-- 
              <div>
                  <Prop 
                      name=" yut"
                      :ismyfaverite="true"
                      des="This is a butterfly I my lovely ">
                </Prop>
                
              </div> -->


              <!-- <div>
                <div>
                    <Vfor v-for="element in items" :key="element.name"
                        :name="element.name"
                        :des="element.des"
                        :url="element.url">
                    </Vfor>
                </div>
                <div><button @click="clicktoremove">remove</button></div>
              </div> -->


             <div>
                <Emit></Emit>
             </div>

      </div>
</template>
<script>
import Butterfly from "./images/butterfly.jpg"
import Bindclass from './component/Bind/Bindclass.vue';
import Form from './component/form/Form.vue';
import Computed from './component/computed/Comjuted.vue';
import Watcher from "./component/watcher/Watcher.vue"
import Truewatcher from './component/watcher/Truewatcher.vue';
import Prop from "./sfc/Prop.vue";
import Vfor from './sfc/for/Vfor.vue';
import Emit from "./sfc/emit/Emit.vue";
  export default{
        components:{
          Bindclass,
          Form,
          Computed,
          Watcher,
          Truewatcher,
          Prop,
          Vfor,
          Emit

        },
    data(){
      return{
        bool:true,
       items:[
        {name:"one",url:Butterfly,des:"this is a butterfly one "},
        {name:"two",url:Butterfly,des:"this is a butterfly two"},
        {name:"three",url:Butterfly,des:"this is a butterfly three"},
        {name:"four",url:Butterfly,des:"this is a butterfly  four"},
       ]

      }
    },methods:{
      clicktoremove(){
        this.items.splice(1,1)
        alert("test")
      }
    }
  }
</script>
<style scoped>
.mainclass{
   position: relative;
  margin: 0px;
 
  box-sizing: border-box;
}
</style>







<!-- vue emit -->