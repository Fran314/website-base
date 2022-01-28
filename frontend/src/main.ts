import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vueCookies from 'vue3-cookies'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vueCookies);

app.mount('#app');