<template>
      <div  :class="{mainclass:true}">
              <div>
                <Bindclass></Bindclass>
              </div>

      </div>
</template>
<script>
import Bindclass from './component/Bind/Bindclass.vue';
  export default{
    components:{Bindclass},
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
  border: 1px solid blue;
  box-sizing: border-box;
}
</style>