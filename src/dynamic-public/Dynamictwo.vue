<template>
  <div>
    <div>this is a component Two</div>
    <div><input type="text" v-model="texttesting" placeholder="Please input" /></div>
    <div :class="{ backgroundColor: yellow }">{{ texttesting }}</div>
  </div>
</template>
<script>
export default {
  name: "Dynamictwo",
  data() {
    return {
      texttesting: "..",
      yellow: true,
    };
  },
};
</script>
<style scoped>
.backgroundColor {
  background-color: yellow;
  display: table;
}
</style>
