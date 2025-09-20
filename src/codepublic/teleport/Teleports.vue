<template>
  <div><button @click="clickme = !clickme">clickhere</button></div>
  <div>
    <div v-if="clickme"><Dynamicone /></div>
    <div v-else><Dynamictwo /></div>
  </div>
</template>
<script>
import Dynamicone from "../../dynamic-public/Dynamicone.vue";
import Dynamictwo from "../../dynamic-public\/Dynamictwo.vue";
export default {
  components: { Dynamicone, Dynamictwo },
  data() {
    return {
      clickme: true,
    };
  },
};
</script>
