import Vue from 'vue';
import Vuex from 'vuex';

import TimerStore from './modules/timer.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    timer: TimerStore,
  },
});

export default store;
