<template>
  <div>
    <div>this is a bind dynamic</div>
    <div><input type="radio" v-model="comp" name="form" :value="'Dynamicone'" />one</div>
    <div><input type="radio" v-model="comp" name="form" :value="'Dynamictwo'" />two</div>
    <div>
      <input type="radio" v-model="comp" name="form" :value="'Dynamicthree'" />three
    </div>
    <div>
      <KeepAlive>
        <component :is="comp"></component>
      </KeepAlive>
    </div>
  </div>
</template>
//
<script>
import Dynamicone from "./Dynamicone.vue";
import Dynamictwo from "./Dynamictwo.vue";
import Dynamicthree from "./Dynamicthree.vue";

export default {
  components: { Dynamicone, Dynamictwo, Dynamicthree },
  data() {
    return {
      comp: "Dynamicone",
    };
  },
};
</script>
