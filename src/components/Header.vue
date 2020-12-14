<template>
  <div class="headercontainer">
    <h1>devjobs</h1>
    <input type="checkbox" name="fultime" @click="ChangeTheme" />Dark Mode
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    ChangeTheme() {
      if (!this.toggle) {
        console.log("dark theme called");
        let root = document.querySelector(":root");
        root.style.setProperty("--lightgray", "#131822");
        root.style.setProperty("--white", "#19212d");
        this.toggle = true;
      } else {
        console.log("light theme called");
        let root = document.querySelector(":root");
        root.style.setProperty("--lightgray", "#f5f6f8");
        root.style.setProperty("--white", "#ffffff");
        this.toggle = false;
      }
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: left;
  margin-left: 20px;
  color: var(--white);
  padding: 20px;
  text-shadow: 2px 2px black;
}
.headercontainer {
  margin: 10px;
  background-color: var(--purple);
  height: 120px;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 1px 1px 1px 75px;
}
</style>
