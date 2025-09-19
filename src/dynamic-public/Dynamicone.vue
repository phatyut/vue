<template>
  <div :class="{ classone: one }">
    <div>this is a component One</div>
    <div><img :src="url" alt="" :class="{ classimg: imgclass }" /></div>
    <div>
      <input
        type="radio"
        v-model="url"
        name="food"
        :value="'../../src/images/telegram.png'"
      />
    </div>
    <div>
      <input
        type="radio"
        v-model="url"
        name="food"
        :value="'../../src/images/youtube.png'"
      />
    </div>
  </div>
</template>

<script>
import Router1 from "../images/question-mark.png";
export default {
  name: "Dynamicone",
  data() {
    return {
      url: Router1,
      imgclass: true,
      one: true,
    };
  },
};
</script>

<style scoped>
.classimg {
  width: 100px;
}
.classone {
  background-color: blue;
}
</style>
