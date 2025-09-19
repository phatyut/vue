<template>
  <div>
    <div>this is a Main Dynamic</div>
    <div><button @click="clickchangepage">clickme</button></div>
    <div :class="{ myclass: thisclass }">
      <KeepAlive include="Dynamicone,Dynamictwo" exclude="Dynamicthree">
        <component :is="changepage"></component>
      </KeepAlive>
    </div>
  </div>
</template>
<script>
import Dynamicone from "../dynamic-public/Dynamicone.vue";
import Dynamictwo from "../dynamic-public/Dynamictwo.vue";
import Dynamicthree from "../dynamic-public/Dynamicthree.vue";
export default {
  components: { Dynamicone, Dynamicthree, Dynamictwo },
  data() {
    return {
      thisclass: true,
      page: 1,
    };
  },
  methods: {
    clickchangepage() {
      this.page++;
    },
  },
  computed: {
    changepage() {
      if (this.page === 1) {
        return "Dynamicone";
      } else if (this.page === 2) {
        return "Dynamictwo";
      } else return "Dynamicthree";
    },
  },
  watch: {
    page(arr) {
      if (arr > 3) {
        this.page = 1;
      }
    },
  },
};
</script>
<style scoped>
.myclass {
  background-color: rgba(169, 240, 216, 0.164);
  width: 300px;
  height: 300px;
  overflow: hidden;
}
</style>
