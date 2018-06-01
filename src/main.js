
import Vue from 'vue';
import App from './App';
import router from './router/index.router';
import store from './store/index.store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
