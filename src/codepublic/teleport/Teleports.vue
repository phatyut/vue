<template>
  <div>this is a teleport</div>
  <div>
    <Teleport to="onefortesting">
      <div><Dynamicone /></div
    ></Teleport>
  </div>
</template>
<script>
import Dynamicone from "../../dynamic-public/Dynamicone.vue";
export default {
  components: { Dynamicone },
};
</script>
