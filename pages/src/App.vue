<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
window._ = './src/js/main.min.js';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to your prerender-spa-plugin Vuejs 2.0 demo app!'
    }
  }
}
</script>

<style>


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
