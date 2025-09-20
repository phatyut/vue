<!--<template>
  <div>
    <div>this is a httpserver</div>
    <div><button @click="connecttoserver">httpserver</button></div>
    <div>{{ result }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: null,
    };
  },
  methods: {
    connecttoserver() {
      alert("alerting https");
    },
  },
  methods: {
    async connecttoserver() {
      const testsent = await fetch("../word/word.txt");
      this.result = await testsent.text();
    },
  },
};
</script>-->

<template>
  <p>Try clicking the button more than once to see new animals picked randomly.</p>
  <button @click="fetchData">Fetch Data</button>
  <div v-if="randomMammal">
    <h2>{{ randomMammal.name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomMammal: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("../httpserver/json/Json.json");
      const data = await response.json();
      const randIndex = Math.floor(Math.random() * data.textjson.length);
      this.randomMammal = data.textjson[randIndex];
    },
  },
};
</script>
