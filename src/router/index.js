import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import examples from '../views/Examples.vue'
import SpiderEx from '../views/SpiderEx.vue'
import DisappearingText from '../views/DisappearingText.vue'
import ImageHoverEffect from '../views/ImageHoverEffect.vue'
import ScrollEffect from '../views/ScrollEffect.vue'
import ScrollEffect2 from '../views/ScrollEffect2.vue'
import ImageFlipEffect from '../views/ImageFlipEffect.vue'
import DotsCSSPreloader from '../views/DotsCSSPreloader.vue'
import CSSCardHoverEffect from '../views/CSSCardHoverEffect.vue'
import ImageAppearingAnimation from '../views/ImageAppearingAnimation.vue'
import Error404 from '../views/Error404.vue'
import ClipPathImageEffect from '../views/ClipPathImageEffect.vue'
import CardParalaxEffect from '../views/CardParalaxEffect.vue'
import WavyTextAnimation from '../views/WavyTextAnimation.vue'
import NeonTextEffect from '../views/NeonTextEffect.vue'
import ThreeDFlipCard from '../views/ThreeDFlipCard.vue'
import BackToTopButton from '../views/BackToTopButton.vue'
import TouchSlider from '../views/TouchSlider.vue'
import LiquidLoaderAnimationEffect from '../views/LiquidLoaderAnimationEffect.vue'
import BackgroundBlendMode from '../views/BackgroundBlendMode.vue'
import PulseAnimationEffect from '../views/PulseAnimationEffect.vue'
import ThreeDIsometricTextEffect from '../views/ThreeDIsometricTextEffect.vue'
import ResponsiveLogRegisterForm from '../views/ResponsiveLogRegisterForm.vue'
import ButtonRippleEffectOnClickEffect from '../views/ButtonRippleEffectOnClickEffect.vue'
import ResponsiveCardHoverEffect from '../views/ResponsiveCardHoverEffect.vue'
import CopyToClipboardEffect from '../views/CopyToClipboardEffect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/examples',
    name: 'Examples',
    component: examples
  },
  {
    path: '/Spider',
    name: 'Spider',
    component: SpiderEx
  },
  {
    path: '/DisappearingText',
    name: 'DisappearingText',
    component: DisappearingText
  },
  {
    path: '/ImageHoverEffect',
    name: 'ImageHoverEffect',
    component: ImageHoverEffect
  },
  {
    path: '/ScrollEffect',
    name: 'ScrollEffect',
    component: ScrollEffect
  },
  {
    path: '/ScrollEffect2',
    name: 'ScrollEffect2',
    component: ScrollEffect2
  },
  {
    path: '/ImageFlipEffect',
    name: 'ImageFlipEffect',
    component: ImageFlipEffect
  },
  {
    path: '/DotsCSSPreloader',
    name: 'DotsCSSPreloader',
    component: DotsCSSPreloader
  },
  {
    path: '/CSSCardHoverEffect',
    name: 'CSSCardHoverEffect',
    component: CSSCardHoverEffect
  },
  {
    path: '/ImageAppearingAnimation',
    name: 'ImageAppearingAnimation',
    component: ImageAppearingAnimation
  },
  {
    path: '/Error404',
    name: 'Eror404',
    component: Error404
  },
  {
    path: '/ClipPathImageEffect',
    name: 'ClipPathImageEffect',
    component: ClipPathImageEffect
  },
  {
    path: '/CardParalaxEffect',
    name: 'CardParalaxEffect',
    component: CardParalaxEffect
  },
  {
    path: '/WavyTextAnimation',
    name: 'WavyTextAnimation',
    component: WavyTextAnimation
  },
  {
    path: '/NeonTextEffect',
    name: 'NeonTextEffect',
    component: NeonTextEffect
  },
  {
    path: '/3DFlipCard',
    name: '3DFlipCard',
    component: ThreeDFlipCard
  },
  {
    path: '/BackToTopButton',
    name: 'BackToTopButton',
    component: BackToTopButton
  },
  {
    path: '/TouchSlider',
    name: 'TouchSlider',
    component: TouchSlider
  },
  {
    path: '/LiquidLoaderAnimationEffect',
    name: 'LiquidLoaderAnimationEffect',
    component: LiquidLoaderAnimationEffect
  },
  {
    path: '/BackgroundBlendMode',
    name: 'BackgroundBlendMode',
    component: BackgroundBlendMode
  },
  {
    path: '/PulseAnimationEffect',
    name: 'PulseAnimationEffect',
    component: PulseAnimationEffect
  },
  {
    path: '/3DIsometricTextEffect',
    name: 'ThreeDIsometricTextEffect',
    component: ThreeDIsometricTextEffect
  },
  {
    path: '/ResponsiveLogRegisterForm',
    name: 'ResponsiveLogRegisterForm',
    component: ResponsiveLogRegisterForm
  },
  {
    path: '/ButtonRippleEffectOnClickEffect',
    name: 'ButtonRippleEffectOnClickEffect',
    component: ButtonRippleEffectOnClickEffect
  },
  {
    path: '/ResponsiveCardHoverEffect',
    name: 'ResponsiveCardHoverEffect',
    component: ResponsiveCardHoverEffect
  },
  {
    path: '/CopyToClipboardEffect',
    name: 'CopyToClipboardEffect',
    component: CopyToClipboardEffect
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
