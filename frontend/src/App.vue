<template>
	<div class="view" :class="$store.state.displayMode.darkMode ? 'dark' : 'light'">
		<navbar />
		<div class="content">
			<router-view />
		</div>
		<cookies-pop-up />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue'
import CookiesPopUp from '@/components/CookiesPopUp.vue'

export default defineComponent({
	data() {
		return {
			allowPreferences: true,
		};
	},
	async created() {
		let mql = window.matchMedia("(max-width: 500px)");
		mql.addEventListener("change", () => {
			this.$store.commit('setIsMobile', mql.matches);
		});
		this.$store.commit('setIsMobile', mql.matches);
	},
	components: {
		Navbar: Navbar,
		CookiesPopUp: CookiesPopUp
	}
});
</script>

<style lang="scss">
/* GLOBAL */
* {
	box-sizing: border-box;
}
html,
body {
	min-height: 100%;
}

body {
	&.light {
		/* LIGHT MODE */
		--color-background: #fff;
		--color-highlight: #725ac1;
		--color-contrast: #a9c15a;
		--color-text: #222;

		--color-shadow: #0002;
		--color-scrollbar-handle: #ddd;
	}
	&.dark {
		/* DARK MODE */
		--color-background: #24272b;
		--color-highlight: #725ac1;
		--color-contrast: #a9c15a;
		--color-text: #fff;

		--color-shadow: #0006;
		--color-scrollbar-handle: #44474b;
	}

	margin: 0;
	font-family: "Roboto", sans-serif;
	background-color: var(--color-background);
	color: var(--color-text);

	&::-webkit-scrollbar {
		width: 10px;

		@media (max-width: 500px) {
			width: 0px;
		}
	}
	&::-webkit-scrollbar-track {
		background: var(--color-background);
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background: var(--color-scrollbar-handle);
		height: 10rem;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: var(--color-highlight);
	}
}

.content {
	padding-top: 4.5rem;
	padding-bottom: 1rem;
}

/* STYLIZED */
.material-icons {
	cursor: pointer;
}
.highlight {
	color: var(--color-highlight);
}
.bold {
	font-weight: bold;
}
.block {
	width: 100%;
	padding: 1rem;
	box-shadow: 0px 5px 5px 0px var(--color-shadow);
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h1 {
		margin: 0;
		align-self: center;
		color: var(--color-highlight);
	}
}
</style>
