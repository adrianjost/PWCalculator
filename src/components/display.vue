<template>
	<div class="display-wrapper">
		<div class="history-wrapper">
			<div class="history">
				<div
					class="row"
					v-for="(entry, index) in value.history.slice().reverse()"
					:key="index"
				>
					{{ entry }}
				</div>
			</div>
		</div>
		<input
			type="text"
			class="main"
			ref="display"
			:value="value.main"
			@input="emitChange()"
			@keypress="validateInput"
		/>
	</div>
</template>

<script>
//USAGE:
import swipe from "./swipe.js";
import keyreplace from "./keyreplace.js";

export default {
	mixins: [swipe, keyreplace],
	props: {
		value: {
			type: Object,
			default: () => ({ main: "", small: [] }),
		},
	},
	mounted() {
		const el = document.querySelector("input.main");
		this.swipedetect(el, this.swipeHandler);
	},
	methods: {
		swipeHandler(swipedir) {
			// swipedir contains either "none", "left", "right", "top", or "down"
			if (swipedir === "left") {
				this.$emit("keypress", "⇤");
			}
		},
		validateInput(event) {
			event.preventDefault();
			const charDict = {
				"0": "0",
				"1": "1",
				"2": "2",
				"3": "3",
				"4": "4",
				"5": "5",
				"6": "6",
				"7": "7",
				"8": "8",
				"9": "9",
				".": ".",
				",": ".",
				"(": "(",
				"[": "(",
				"{": "(",
				")": ")",
				"]": ")",
				"}": ")",
				"+": "+",
				"-": "-",
				"*": "*",
				x: "*",
				"/": "/",
				"<": "",
			};
			const controlChars = {
				"=": "=",
				Enter: "=",
			};
			if (charDict[event.key] !== undefined) {
				const el = document.querySelector("input.main");
				const newText = this.insertTextAtCursor(el, charDict[event.key]);
				this.emitChange(newText);
			} else {
				if (controlChars[event.key] !== undefined) {
					this.$emit("keypress", controlChars[event.key]);
				}
			}
		},
		emitChange(newMain) {
			if (!newMain) {
				newMain = this.$refs.display.value;
			}
			let newVal = this.value;
			newVal.main = newMain;
			this.$emit("input", newVal);
		},
	},
	updated() {
		let main = document.querySelector("input.main");
		main.scrollLeft = main.scrollWidth;
	},
};
</script>
<style lang="scss" scoped>
.display-wrapper {
	background: #222;
	color: #fff;
	padding: 16px;
	input {
		box-sizing: initial;
		text-align: right;
		width: 100%;
		height: 64px;
		font-size: 48px;
		letter-spacing: 2px;
		font-weight: 300;
		border: none;
		outline: none;
		color: #fff;
		background-color: transparent;
		padding: 16px;
		margin: -16px;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
	}
	.history-wrapper {
		height: calc(100% - 64px);
		width: 100%;
		.history {
			font-size: 20px;
			line-height: 110%;
			font-weight: 400;
			width: 100%;
			height: 100%;

			overflow: auto;
			display: flex;
			flex-direction: column-reverse;

			&::-webkit-scrollbar {
				display: none;
			}
			.row {
				color: #bbb;
				text-align: right;
				width: 100%;
				margin-top: 8px;
				text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
			}
		}
	}
}
</style>
