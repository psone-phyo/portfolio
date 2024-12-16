import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.directive('animateonscroll', AnimateOnScroll);

app.use(store).use(router).mount('#app')
