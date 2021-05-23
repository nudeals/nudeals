import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Tracking from './components/common/Tracking.vue'
import Toolbar from './components/common/Toolbar.vue'
import Highlight from './components/common/Hightlight.vue'
import Features from './components/common/Features.vue'
import Deals from './components/common/Deals.vue'
import Footer from './components/common/Footer.vue'
import EgozMelech from './components/EgozMelech.vue'
import VueMeta from 'vue-meta'

require('./styles/style.css')

Vue.component('head', Tracking)
Vue.component('toolbar', Toolbar)
Vue.component('highlight', Highlight)
Vue.component('features', Features)
Vue.component('deals', Deals)
Vue.component('page-footer', Footer)


Vue.use(VueRouter)
Vue.use(VueMeta)

const Home = { template: '<div><h2>Home Page</h2></div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/egoz-melech', component: EgozMelech }
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
