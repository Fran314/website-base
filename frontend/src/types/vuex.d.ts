import { Store } from 'vuex'

declare module '@vue/runtime-core' {
	// declare your own store states
	interface State {
		cookies: {
			consent: boolean
		}
		displayMode: {
			isMobile: boolean,
			darkMode: boolean
		}
	}
	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}