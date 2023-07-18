<template>
  <div id="app">
    <header-vue></header-vue>
     <body-vue></body-vue> 
    <footer-vue></footer-vue> 
  </div>
</template>

<script>
import header from './component/header.vue';
import body from './component/body.vue';
import footer from './component/footer.vue';
export default {
  components: {
    'header-vue': header,
    'body-vue': body,
    'footer-vue': footer
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
</style>
