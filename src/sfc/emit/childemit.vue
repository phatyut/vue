<!-- Childemit.vue -->
<!-- 
<template>
  <div>
    <div><img src="../../images/butterfly.jpg" alt="" v-show="showbutterfly"></div>
    <div><button @click="clickhere">showandhide</button></div>
  </div>
</template>

<script>
export default {
  props: ["showbutterfly",],
  methods: {
    clickhere() {
      this.$emit("clickme");
    }
  }
};
</script>-->

<template>
    <div>
        <div>{{ name }}</div>
        <div><img src="../../images/butterfly.jpg" alt="butterfly" v-show="showimg"></div>
        <div>{{ des }}</div>
        <div><button  @click="clickonme">clickhere</button></div>
    </div>
</template>
<script>
    export default{
        props:["name","des","imgshow"],
        data(){
            return{
                showimg:this.imgshow
            }
        },methods:{
            clickonme(){
              this.$emit("clickme",this.name)
            }
        }
    }
</script>