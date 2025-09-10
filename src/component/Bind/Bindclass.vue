<template>
    <div>
        <div>how to use bind class:</div>
        <div :class="{oneclass:true}">one style</div>
        <div :class="{twoclass:conditiontwoclass}"> two style</div>
        <div :class="{threeclass}">three style</div>

    </div>
</template>
<script>
export default {
  data(){
    return{
      counter:0,
      mainclass:"classname",
      textred:"red",
      conditiontwoclass:true,
      threeclass:"classthree"
    }
  }
}
</script>


<style  scoped>
.oneclass{
  background-color: red;
  color: black;
}.twoclass{
  background-color: aqua;
  
}.classthree{
    background-color: yellow;
    
}
</style>