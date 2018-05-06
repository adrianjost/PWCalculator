<template>
    <div>
        <div class="button-wrapper">
            <button v-for="button in buttonarray"
                @click="emitKey(button)">
                {{button}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    emitKey(char) {
      this.$emit('keypress', char)
    }
  },
  data() {
    return {
        buttonarray: [
            'C', '(', ')', '/',
            '7', '8', '9', '*',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '0', '.', '=',
        ]
        /*
        [
            'C', '⇤', '/', '*',
            '7', '8', '9', '-',
            '4', '5', '6', '+',
            '1', '2', '3', '=',
            '.', '0', '(', ')',
        ]
        [
            '(', ')', '⇤', 'C',
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '.', '0', '=', '+',
        ]
        */
    }
  }
};
</script>
<style lang="scss" scoped>
.button-wrapper{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-gap: 1px; */
  /* background-color: #999; */
  background: linear-gradient(-25deg, #cc085e 25%, #fa7b0f);
  height: 100%;
  position: relative;
  button{
      padding: 16px;
      background: transparent;
      border: none;
      border-right: 1px solid #fff;
      border-top: 1px solid #fff;
      outline:none;
      /* 18587b */
      color: #fff;
      vertical-align: middle;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      text-shadow: 0px 0px 5px rgba(0,0,0,.5);
      background: #18587b;

      &:nth-of-type(4n), &:last-of-type{
          background: transparent;
          border-right: none;
      }
      &:nth-of-type(-n+4){
          border-top: none;
      }
      &:nth-of-type(17){
          grid-column-start: 1;
          grid-column-end: 3;
      }
      &:focus{
          @media screen and (min-width: 800px){
            background-color: #555;
            text-shadow: 2px 2px 5px rgb(0,0,0);
          }
      }
  }
}
</style>