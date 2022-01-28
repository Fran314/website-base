<template>
	<div
		class="nav-item"
		@click="toggleExpand()"
		@mouseenter="setExpand(true)"
		@mouseleave="setExpand(false)"
	>
		<div class="nav-item-text">
			<div
				:class="{
					'highlight bold':
						$route.name && String($route.name).startsWith(routeName),
				}"
				@click="$emit('click')"
			>
				{{ text }}
			</div>
			<span v-if="dropdown.length > 0" class="material-icons">
				expand_more
			</span>
		</div>
		<div
			v-if="dropdown.length > 0"
			class="dropdown"
			:class="{ visible: expandDropdown }"
		>
			<div
				v-for="(item, i) in dropdown"
				class="dropdown-item"
				@click="$emit('dropdownClick', i)"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			expandDropdown: false,
		};
	},
	props: {
		text: String,
		routeName: {
			type: String,
			default: 'dont-highlight'
		},
		dropdown: {
			type: Array,
			default: [],
		},
	},
	methods: {
		setExpand(val: boolean) {
			if(!this.$store.state.displayMode.isMobile)
				this.expandDropdown = val;
		},
		toggleExpand() {
			if(this.$store.state.displayMode.isMobile)
				this.expandDropdown = !this.expandDropdown;
		}
	}
});
</script>

<style scoped lang="scss">
$layout-breakpoint: 500px;

.nav-item {
	position: relative;
	display: flex;
	@media (max-width: $layout-breakpoint) {
		flex-direction: column;
	}
}
.nav-item-text {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.dropdown {
	visibility: hidden;
	opacity: 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	transition: opacity 0.15s ease-out;

	position: absolute;
	min-width: max-content;
	padding: 0.5rem 1rem;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: 0px 5px 5px 0px var(--color-shadow);
	background-color: var(--color-background);

	&.visible {
		opacity: 1;
		visibility: visible;
	}

	@media (max-width: $layout-breakpoint) {
		position: initial;
		min-width: initial;
		transform: initial;
		box-shadow: none;
		background-color: transparent;

		height: 0;
		padding: 0;

		&.visible {
		height: auto;
		padding: 0.5rem 1rem;
	}
	}
}

.dropdown-item {
	cursor: pointer;
	margin: 0 auto;

	@media (max-width: $layout-breakpoint) {
		margin: 0;
	}
}

// @media (min-width: 501px) {
// 	.dropdown {
// 		visibility: hidden;
// 		opacity: 0;
// 		display: flex;
// 		flex-direction: column;
// 		gap: 1rem;
// 		background-color: var(--color-background);

// 		transition: opacity 0.15s ease-out;

// 		position: absolute;
// 		min-width: max-content;
// 		padding: 0.5rem 1rem;
// 		top: 100%;
// 		left: 50%;
// 		transform: translateX(-50%);
// 		box-shadow: 0px 5px 5px 0px var(--color-shadow);
// 	}
// 	.dropdown.visible {
// 		opacity: 1;
// 		visibility: visible;
// 	}
// }
// @media (max-width: 500px) {
// 	.dropdown {
// 		visibility: hidden;
// 		opacity: 0;
// 		display: flex;
// 		flex-direction: column;
// 		gap: 1rem;
// 		background-color: transparent;
// 		// background-color: var(--color-background);

// 		transition: opacity 0.15s ease-out;

// 		height: 0;
// 		padding: 0;
// 	}
// 	.dropdown.visible {
// 		height: auto;
// 		opacity: 1;
// 		visibility: visible;
// 		padding: 0.5rem 1rem;
// 	}
// }
</style>