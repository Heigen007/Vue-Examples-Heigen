<template>
  <div class="hello">
    <div id="scrollPath"></div>
    <div id="progressBar"></div>
    <h3>Text Effects</h3>
    <ul>
      <li><a href="/DisappearingText">Disappearing Smoke Text</a></li>
      <li><a href="/WavyTextAnimation">Wavy Text Animation/Loader</a></li>
      <li><a href="/NeonTextEffect">Neon Light Text Effect</a></li>
      <li><a href="/3DIsometricTextEffect">3D Isometric Text Effect</a></li>
      <li><a href="/TypingAnimation">Typing Animation</a></li>
    </ul>

    <h3>Image/Card Effects</h3>
    <ul>
      <li><a href="/ImageFlipEffect">3D Image Flip Effect</a></li>
      <li><a href="/ImageAppearingAnimation">Image Appearing Animation</a></li>
      <li><a href="/ImageHoverEffect">Image Hover Effect</a></li>
      <li><a href="/ClipPathImageEffect">CSS Clip-path Image Hover Effect</a></li>
      <li><a href="/CardParalaxEffect">3D Paralax Effect</a></li>
      <li><a href="/3DFlipCard">3D Flip Card</a></li>
      <li><a href="/CSSCardHoverEffect">CSS Card Hover/Active Effect</a></li>
      <li><a href="/BackgroundBlendMode">Background Blend Mode</a></li>
      <li><a href="/3DImageHoverEffect">3D Image Hover Effect</a></li>
      <li><a href="/ResponsiveCardHoverEffect">Responsive Card Hover Effect</a></li>
      <li><a href="/TabsEffect">Tabs Effect</a></li>
      <li><a href="/GlassmorphismProductCard">Glassmorphism Product Card</a></li>
    </ul>

    <h3>Scroll Effects</h3>
    <ul>
      <li><a href="/ScrollEffect">Scroll Effect</a></li>
      <li><a href="/ScrollEffect2">Scroll Effect2</a></li>
      <li><a href="/BackToTopButton">Scroll To Top Button</a></li>
    </ul>

    <h3>Errors And Errors Pages</h3>
    <ul>
      <li><a href="/Error404">Error404</a></li>
      <li><a href="/Animated404Page">Animated 404 Page</a></li>
    </ul>

    <h3>Complete Components</h3>
    <ul>
      <li><a href="/TouchSlider">Swiper.js Infinitive Touch Slider</a></li>
      <li><a href="/ResponsiveLogRegisterForm">Responsive Login and Registration Form</a></li>
      <li><a href="/CloudBannerParallaxEffect">Cloud Banner Parallax Effect</a></li>
      <li><a href="/PopupAfterLoad">Responsive Popup Offer After Page Load</a></li>
      <li><a href="/ResponsiveSidebarMenu">Responsive Sidebar Menu</a></li>
      <li><a href="/RecordPlayer">Record Player</a></li>
      <li><a href="/ChartJsLineChart">Chart.js Line Chart</a></li>
      <li><a href="/THREEJSProductCard">THREEJS Product Card</a></li>
      <li><a href="/ChatThemes">Chat Component With Theme Switcher</a></li>
      <li><a href="/PulseAnimationEffect">Pulse Animation Effect</a></li>
      <li><a href="/ButtonRippleEffectOnClickEffect">Button Ripple Effect on Click</a></li>
    </ul>

    <h3>Complete Page Examples</h3>
    <ul>
      <li><a href="/MicrosoftHomepage">Microsoft Homepage Clone</a></li>
      <li><a href="/NetflixLandingPage">Netflix Landing Page Clone</a></li>
      <li><a href="/VideoLandingPage">Video Landing Page</a></li>
      <li><a href="/CSSGridWebsiteLayout">CSS Grid Website Layout</a></li>
      <li><a href="/SpaceXLandingPage">SpaceX Landing Page</a></li>
      <li><a href="/RellaxJsPage">Rellax.js Page</a></li>
    </ul>

    <h3>Preloaders</h3>
    <ul>
      <li><a href="/LiquidLoaderAnimationEffect">Liquid Loader Animation</a></li>
      <li><a href="/DotsCSSPreloader">Dots CSS preloader</a></li>
      <li><a href="/WavyTextAnimation">Wavy Text Animation/Loader</a></li>
    </ul>

    <h3>Extra Effects</h3>
    <ul>
      <li><a href="/WebRtcChat">WebRtc/Firebase Video Chat</a></li>
      <li><a href="/NavigatorAbilities">Navigator Abilities</a></li>
      <li><a href="/FaceRecogniser">FaceApi.js Face Recogniser</a></li>
      <li><a href="/TurningPages">Turning Pages</a></li>
      <li><a href="/THREEJSTunnel">THREEJS Tunnel</a></li>
      <li><a href="/CopyToClipboardEffect">Password Generator With Copy To Clipboard Effect</a></li>
      <li><a href="/Spider">Line Spider</a></li>
      <li><a href="/CSSClips">CSS Clips</a></li>
      <li><a href="/Webcam">Webcam</a></li>
      <li><a href="/VoiceAndText">Voice and Text</a></li>
      <li><a href="/LeavingPreventMessage">Leaving Prevent Message</a></li>
      <li><a href="/JSTextAnimation">JS Text Animation</a></li>
      <li><a href="/RxJsPaintClone">Rx.js Paint clone</a></li>
    </ul>

    <h3>Super Extra Things</h3>
    <ul>
      <li><a href="CryptoWall">Crypto Wall</a></li>
    </ul>
    <hr style="height: 3px; margin-top: 30px; box-shadow: 0 0 20px rgba(0,0,0,1)">
    <h3>Library`s examples</h3>
    <ul>
      <li><a href="/FaceRecogniser">FaceApi.js Face Recogniser</a></li>
      <li><a href="/RellaxJsPage">Rellax.js Page</a></li>
      <li><a href="/ChartJsLineChart">Chart.js Line Chart</a></li>
      <li><a href="/THREEJSProductCard">THREEJS Product Card</a></li>
      <li><a href="/THREEJSTunnel">THREEJS Tunnel</a></li>
      <li><a href="/TouchSlider">Swiper.js Infinitive Touch Slider</a></li>
      <li><a href="/RxJsPaintClone">Rx.js Paint clone</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted(){
    let progress = document.getElementById('progressBar')
    let totalHeight = document.body.scrollHeight - window.innerHeight
    window.onscroll = function(){
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      progress.style.height = progressHeight + "%"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  padding-bottom: 20px;
}
h3 {
  margin: 30px 0 0;
  font-size: 1.4em;
  font-weight: 500;
}
h1{
  font-size: 2em !important;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
a:hover {
  color: green;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #72c293;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #b6eebd;
  }
</style>