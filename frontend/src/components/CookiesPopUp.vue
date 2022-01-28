<template>
	<div class="popup" :class="{ visible: !$store.state.cookies.consent }">
		<div>
			<b>This website uses cookies.</b> They're only necessary cookies
			and they don't collect statistics or marketing informations
		</div>
		<div class="selections">
			<div>
				Necessary
				<input type="checkbox" disabled checked />
			</div>
			<div>
				Preferences
				<input type="checkbox" v-model="allowPreferences" />
			</div>
			<button @click="$store.commit('setCookiesConsent', allowPreferences)">Confirm selection</button>
		</div>
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			allowPreferences: true,
		};
	},
});
</script>

<style scoped lang="scss">
.popup {
	visibility: hidden;
	opacity: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 1.5rem;
	background-color: var(--color-highlight);
	color: #fff;
	display: grid;
	grid-template-rows: auto auto;
	gap: 1rem;
	align-items: center;
	justify-content: center;

	transition: opacity 0.15s ease-out;
}
.popup.visible {
	opacity: 1;
	visibility: visible;
}
.popup button {
	border: 0;
	border-radius: 2px;
	padding: 0.2rem 0.6rem;
	display: inline-block;
	background-color: #fff;
	color: var(--color-highlight);
	font-weight: bold;
}
.popup button:hover {
	background-color: #ddd;
}
.popup .selections {
	display: flex;
	gap: 2rem;
	justify-content: center;
}
</style>