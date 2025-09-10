<template>
  <div @click="this.counter++">
    {{counter}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter:0
    }
  }
}
</script>