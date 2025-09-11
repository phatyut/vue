<template>
      <div  :class="{mainclass:true}">

              <!-- <div>
                <Bindclass></Bindclass>
              </div> -->

              <!-- <div> <Form></Form></div> -->

              <!-- <div><Computed></Computed></div> -->

              <div><watcher></watcher></div>

      </div>
</template>
<script>
import Bindclass from './component/Bind/Bindclass.vue';
import Form from './component/form/Form.vue';
import Computed from './component/computed/Comjuted.vue';
import Watcher from "./component/watcher/Watcher.vue"
  export default{
        components:{
          Bindclass,
          Form,
          Computed,
          Watcher
        },
    data(){
      return{

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