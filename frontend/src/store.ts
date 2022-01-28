import { createStore } from 'vuex'
import { State } from 'vue'

import Cookies from 'js-cookie';

export default createStore<State>({
	state() {
		return {
			cookies: {
				consent: Boolean(Cookies.get("cookies-consent"))
			},
			displayMode: {
				isMobile: false,
				darkMode: Cookies.get("preferences") === "darkmode",
			},
		};
	},
	mutations: {
		setIsMobile(state, isMobile) {
			state.displayMode.isMobile = isMobile;
		},
		toggleDarkMode(state) {
			state.displayMode.darkMode = !state.displayMode.darkMode;
			if (state.cookies.consent && Cookies.get("cookies-consent") === "allow-preferences")
				Cookies.set(
					"preferences",
					state.displayMode.darkMode ? "darkmode" : "lightmode",
					{ expires: Number.MAX_SAFE_INTEGER }
				)
		},
		setCookiesConsent(state, allowPreferences) {
			state.cookies.consent = true;
			Cookies.set(
				"cookies-consent",
				allowPreferences ? "allow-preferences" : "dont-allow-preferences",
				{ expires: Number.MAX_SAFE_INTEGER }
			);
		}
	}
})