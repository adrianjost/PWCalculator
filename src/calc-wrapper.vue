<template>
  <div class="calculator-wrapper">
    <Calculator class="calculator"/>
  </div>
</template>

<script>
import Calculator from './calc';

export default {
  name: 'app',
  components: {
    Calculator
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
    margin: 0;
    padding: 0;
    background-color: #777;
}
.calculator-wrapper{
  height: 100vh;
  max-width: 60vh;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,.3);
}
</style>
