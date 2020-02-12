<template>
  <div id="app">
    <router-view/>
    <tabbar v-if="$route.meta.main"></tabbar>
  </div>
</template>

<script lang = 'ts'>
import { Component, Vue } from 'vue-property-decorator'
import tabbar from './components/tabbar.vue'
let a = 2
let b = 3
@Component({
  components: {
    tabbar
  }
})
export default class App extends Vue {}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  html, body{
    height: 100%;
  }
  body{
    font-size: 16px;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/iconfont/iconfont.eot');
    src: url('./assets/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
        url('./assets/iconfont/iconfont.woff2') format('woff2'),
        url('./assets/iconfont/iconfont.woff') format('woff'),
        url('./assets/iconfont/iconfont.ttf') format('truetype'),
        url('./assets/iconfont/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    background: #ccc
  }
  /* #app {
    height: 100%;
    overflow: hidden;
  } */
</style>
