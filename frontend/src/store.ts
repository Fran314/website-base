import { createStore } from 'vuex'
import { State } from 'vue'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export default createStore<State>({
	state() {
		return {
			cookies: {
				consent: Boolean(cookies.get("cookies-consent"))
			},
			displayMode: {
				isMobile: false,
				darkMode: cookies.get("preferences") === "darkmode",
			},
		};
	},
	mutations: {
		setIsMobile(state, isMobile) {
			state.displayMode.isMobile = isMobile;
		},
		toggleDarkMode(state) {
			state.displayMode.darkMode = !state.displayMode.darkMode;
			if (state.cookies.consent && cookies.get("cookies-consent") === "allow-preferences")
				cookies.set(
					"preferences",
					state.displayMode.darkMode ? "darkmode" : "lightmode",
					`${Number.MAX_SAFE_INTEGER}s`
				)
		},
		setCookiesConsent(state, allowPreferences) {
			state.cookies.consent = true;
			cookies.set(
				"cookies-consent",
				allowPreferences ? "allow-preferences" : "dont-allow-preferences",
				`${Number.MAX_SAFE_INTEGER}s`
			);
		}
	}
})