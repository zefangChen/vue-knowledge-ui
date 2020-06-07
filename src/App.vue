<template>
  <div id="app">
      <layout></layout>
  </div>
</template>

<script>
import layout from './views/layout'
export default {
  name: 'app',
  components: {
      layout
  }
}
</script>

<style>
    @import "assets/css/index.css";
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #2c3e50;
    }
</style>
