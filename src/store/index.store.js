import Vue from 'vue';
import Vuex from 'vuex';

import timerStore from '../components/store/timer.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    timer: timerStore,
  },
});

export default store;
