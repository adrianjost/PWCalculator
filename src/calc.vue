<template>
	<div class="calculator">
		<CalcDisplay
			@keypress="keypress"
			v-model="display"
			class="display"
		></CalcDisplay>
		<CalcKeypad @keypress="keypress" class="keypad"></CalcKeypad>
	</div>
</template>

<script>
import CalcDisplay from "./components/display.vue";
import CalcKeypad from "./components/keypad.vue";
import stringMath from "string-math";

export default {
	components: {
		CalcDisplay,
		CalcKeypad,
	},
	data() {
		return {
			display: { main: "", history: [] },
		};
	},
	methods: {
		round(number, digits) {
			return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
		},
		keypress(key) {
			switch (key) {
				case "C":
					if (this.display.main === "") {
						this.display.history = [];
					}
					this.display.main = "";
					break;
				case "=":
					try {
						const result = stringMath(this.display.main);
						this.display.history.push(
							`${this.display.main} = ${this.round(result, 5)}`
						);
						this.display.main = this.round(result, 10).toString();
					} catch (error) {
						alert(error);
					}
					break;
				case "<":
				case "⇤":
					this.display.main = this.display.main.slice(0, -1);
					break;
				default:
					this.display.main += key;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.calculator {
	height: 100%;
	@media screen and (min-width: 800px) {
		max-width: calc(100vh * 0.75 * 4 / 5);
	}
	margin: 0 auto;
}
.display {
	height: calc(100vh - (100vw * 5 / 4));
	min-height: 25%;
}
.keypad {
	height: calc(100vw * 5 / 4);
	max-height: 75vh;
}
</style>
