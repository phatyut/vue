<template>
  <div>
    <div :class="{ classthree: three }">this is a component three</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      three: true,
    };
  },
};
</script>
<style scoped>
.classthree {
  background-color: red;
}
</style>
