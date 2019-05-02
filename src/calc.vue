<template>
  <div class="calculator">
    <display @keypress="keypress" v-model="display" class="display"/>
    <keypad @keypress="keypress" class="keypad"/>
  </div>
</template>

<script>
import Display from './components/display';
import Keypad from './components/input-basic';
import stringMath from "string-math";

export default {
  name: 'calculator',
  components: {
    Display,
    Keypad
  },
  data() {
    return {
      display: {main:"", history:[]}
    }
  },
  methods: {
    round(number, digits){
      return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits)
    },
    keypress(key) {
      if(key === "C"){
        this.display.main = "";
        if(this.display.history[this.display.history.length-1] == ""){
          this.display.history = [];
        }
        return;
      }
      if(key === "="){
        const result = this.round(stringMath(this.display.main), 10);
        this.display.history.push(`${this.display.main} = ${this.round(result, 5)}`);
        this.display.main = result.toString();
        return;
      }
      if(key === "<" || key === "⇤"){
        this.display.main = this.display.main.slice(0, -1);
        return;
      }
      this.display.main += key;
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator{
  height: 100%;
  @media screen and (min-width: 800px){
    max-width: calc(100vh * 0.75 * 4/5);
  }
  margin: 0 auto;
}
.display{
  height: calc(100vh - (100vw * 5/4));
  min-height: 25%;
}
.keypad{
  height: calc(100vw * 5/4);
  max-height: 75vh;
}
</style>
