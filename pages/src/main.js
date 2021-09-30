import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Tracking from './components/common/Tracking.vue'
import Toolbar from './components/common/Toolbar.vue'
import Highlight from './components/common/Hightlight.vue'
import Features from './components/common/Features.vue'
import Showcase from './components/common/Showcase.vue'
import ShowcaseNoPrice from './components/common/ShowcaseNoPrice.vue'
import Footer from './components/common/Footer.vue'
import VilonYashir from './components/VilonYashir.vue'
import EgozMelech from './components/EgozMelech.vue'
import CarAccessories from './components/CarAccessories.vue'
import LoveyBaby from './components/LoveyBaby.vue'
import VueMeta from 'vue-meta'

require('./styles/style.css')

Vue.component('head', Tracking)
Vue.component('toolbar', Toolbar)
Vue.component('highlight', Highlight)
Vue.component('features', Features)
Vue.component('showcase', Showcase)
Vue.component('showcase-no-price', ShowcaseNoPrice)
Vue.component('page-footer', Footer)

Vue.use(VueRouter)
Vue.use(VueMeta)

const Home = { template: '<div><h2>Home Page</h2></div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/egoz-melech', component: EgozMelech },
  { path: '/vilon-yashir', component: VilonYashir },
  { path: '/car-accessories', component: CarAccessories },
  { path: '/lovey-baby', component: LoveyBaby }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
