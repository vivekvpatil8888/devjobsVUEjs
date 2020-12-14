<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.container {
  margin: 20px;
}
:root {
  --purple: #5865e0;
  --lightgray: #f5f6f8;
  /* --lightgray: #131822; */
  --white: #ffffff;
  /* --white: #19212d; */
  --darkblue: #131822;
  --lightblue: #19212d;
}
</style>
