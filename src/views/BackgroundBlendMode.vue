<template>
  <div class="home">
    <div class="title">Background Blend Mode Example</div>
    <div class="MainBox"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.MainBox {
  position: relative;
  width: 100%;
  height: 90vh;
  background: center / cover no-repeat
      url("../assets/BackgroundBlendModeAssets/bg.jpg"),
    center / contain no-repeat
      url("../assets/BackgroundBlendModeAssets/photo1.jpg");
  background-position: center;
  background-blend-mode: screen;
}
</style>