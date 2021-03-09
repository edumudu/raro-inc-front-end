import Vue from 'vue';

import axiosInstance from '@/services/axios';
import App from './App.vue';

Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
