<template>
	<div class="navbar">
		<span class="material-icons nav-button" @click="navbarExtended = true">menu</span>
		<div class="title" @click="$router.push('/')">
			<img src="/logo.svg" />
			<div>
				<span class="highlight bold">Website</span>.com
			</div>
		</div>
		<div class="nav-background" :class="{ visible: navbarExtended }" @click="navbarExtended = false"></div>
		<div class="navbar-nav" :class="{ extended: navbarExtended }">
			<div class="nav-start">
				<navbar-item
					:text="'Home'"
					:route-name="'home'"
					@click="$router.push('/'); navbarExtended = false;"
				/>
				<navbar-item
					:text="'Tools'"
					:route-name="'tools'"
					:dropdown="['Something 1', 'Something 2']"
					@dropdown-click="$router.push(['/some1', '/some2'][$event]); navbarExtended = false;"
				/>
				<navbar-item
					:text="'Games'"
					:route-name="'games'"
					:dropdown="['Something 3', 'Something 4']"
					@dropdown-click="$router.push(['/some3', '/some4'][$event]); navbarExtended = false;"
				/>
			</div>
			<div class="nav-end">
				<div class="nav-icon material-icons highlight" @click="$store.commit('toggleDarkMode')">
					{{
						$store.state.displayMode.darkMode ? "light_mode" : "dark_mode"
					}}
				</div>
				<navbar-item :text="'English'" :dropdown="['English', 'Italiano']" />
				<navbar-item :text="'Log In'" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useCookies } from "vue3-cookies";
import { defineComponent } from 'vue';
import NavbarItem from './NavbarItem.vue'

export default defineComponent({
	setup() {
		const { cookies } = useCookies();
		return { cookies };
	},
	data() {
		return {
			navbarExtended: false
		};
	},
	methods: {
		goto(link: string) {
			window.location.href = link;
		},
	},
	components: {
		NavbarItem: NavbarItem
	}
});
</script>

<style scoped lang="scss">
$layout-breakpoint: 500px;

.navbar {
	padding: 0 2rem;
	position: fixed;
	top: 0;
	width: 100%;
	align-items: center;
	background-color: var(--color-background);
	box-shadow: 0px 5px 5px 0px var(--color-shadow);

	display: grid;
	grid-template-columns: auto 1fr;
	gap: 4rem;
	@media (max-width: $layout-breakpoint) {
		display: flex;
		justify-content: space-between;
		padding-left: 1rem;
	}

	b {
		color: var(--color-highlight);
	}
}

.nav-button {
	display: none;

	@media (max-width: $layout-breakpoint) {
		display: initial;
		font-size: 2rem;
	}
}

.title {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	cursor: pointer;

	img {
		padding: 0.3rem 0;
		height: 2.8rem;
	}
	.bold {
		font-size: 1.5rem;
	}
}

.nav-background {
	display: none;

	@media (max-width: $layout-breakpoint) {
		display: initial;
		opacity: 0;
		left: 0;
		top: 0;
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: #000;
		transition: 0.15s ease-out;
		pointer-events: none;

		&.visible {
			opacity: 0.4;
			pointer-events: auto;
		}
	}
}

.navbar-nav {
	height: 100%;
	display: flex;
	justify-content: space-between;

	.nav-start,
	.nav-end {
		display: flex;
		flex-direction: inherit;
		gap: 2rem;
	}

	@media (max-width: $layout-breakpoint) {
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 50vw;
		padding: 2rem 1rem;
		background-color: var(--color-background);
		opacity: 1;
		transform: translateX(-100%);
		transition: 0.15s ease-out;

		&.extended {
			transform: translateX(0%);
			box-shadow: 0px 5px 5px 0px var(--color-shadow);
		}

		.nav-start,
		.nav-end {
			gap: 1rem;
		}
	}
}

.nav-icon {
	align-self: center;
	@media (max-width: $layout-breakpoint) {
		align-self: initial;
	}
}
</style>