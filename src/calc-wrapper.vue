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
    background-color: #333;
}
.calculator-wrapper{
  height: 100vh;
}
</style>
