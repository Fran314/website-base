<template>
	<div class="search-bar">
		<span class="material-icons">search</span>
		<input type="text">
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {

		};
	},
});
</script>

<style scoped lang="scss">
.search-bar {
	color: var(--color-scrollbar-handle);
	height: 2rem;
	display: flex;
	align-items: center;
	border: solid 1px;
	border-radius: 1rem;
	padding: 0 0.5rem;

	transition: border-color 0.15s ease-out;

	&:focus-within {
		border-color: var(--color-highlight);
	}

	input {
		background-color: var(--color-background);
		color:	var(--color-text);
		outline: none;
		border: none;
	}
}
</style>