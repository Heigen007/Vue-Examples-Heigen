<template>
  <div class="home">
    <div class="title">Responsive Card Hover Effect Example</div>
    <div class="MainBox">
      <div class="container">
        <div class="box">
          <div class="imgBx">
            <img src="../assets/ResponsiveCardHoverEffectAssets/photo1.jpg" />
          </div>
          <div class="content">
            <h2>Your Name<br /><span>Creative Man</span></h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src="../assets/ResponsiveCardHoverEffectAssets/photo2.jpg" />
          </div>
          <div class="content">
            <h2>Your Name<br /><span>Creative Man</span></h2>
          </div>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src="../assets/ResponsiveCardHoverEffectAssets/photo3.jpg" />
          </div>
          <div class="content">
            <h2>Your Name<br /><span>Creative Man</span></h2>
          </div>
        </div>
      </div>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: #010615;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container .box {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  margin: 40px;
}
.container .box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: 0.5s ease-in-out;
}
.container .box:hover .imgBx {
  transform: translate(-35px, -35px);
}
.container .box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container .box .content {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 15px;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content {
  transform: translate(35px, 35px);
}
.container .box .content h2 {
  font-size: 20px;
  color: #111;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: center;
}
.container .box .content h2 span {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
}
@media (max-width: 500px) {
  .container .box:hover .content {
    transform: translate(0, 35px);
  }
  .container .box:hover .imgBx {
    transform: translate(0, -35px);
  }
}
</style>