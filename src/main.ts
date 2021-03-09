import Vue from 'vue';

import axiosInstance from '@/services/axios';
import App from './App.vue';
import router from './router';

Vue.prototype.$axios = axiosInstance;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
