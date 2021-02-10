import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import myIcon from '@/components/common/my-icon';
import tip from '@/components/common/tip.vue';

const vue = createApp(App);
vue.component('my-icon', myIcon);
vue.component('tip', tip);
vue.use(router).use(store).mount('#app');