<template>
  <div>
    <div>this is a main dynamic</div>
    <div><button @click="clickhere++">clickme</button></div>
    <div>
      <KeepAlive>
        <component :is="testcounter"></component>
      </KeepAlive>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickhere: 1,
    };
  },
  methods: {},
  computed: {
    testcounter() {
      if (this.clickhere === 1) {
        return "Dynamicone";
      } else return "Dynamictwo";
    },
  },
  watch: {
    clickhere(arr) {
      if (arr > 2) {
        this.clickhere == 1;
      }
    },
  },
};
</script>
