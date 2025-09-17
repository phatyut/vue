<template>
  <div>
    <div :class="{ myclass: bool }">
      <div><button @click="showme = !showme">click change pages</button></div>
      <div>
        <KeepAlive include="Dynamicone,Dynamictwo">
          <component :is="changecomponent"></component>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import Dynamicone from "./Dynamicone.vue";
import Dynamictwo from "./Dynamictwo.vue";
export default {
  components: {
    Dynamicone,
    Dynamictwo,
  },
  data() {
    return {
      bool: true,
      showme: true,
    };
  },
  computed: {
    changecomponent() {
      if (this.showme) {
        return "Dynamicone";
      } else {
        return "Dynamictwo";
      }
    },
  },
};
</script>

<style scoped>
.myclass {
  background-color: rgb(212, 203, 203);
  border: 1px solid black;
  width: 400px;
  height: 400px;
  color: red;
  overflow: hidden;
}
</style>
