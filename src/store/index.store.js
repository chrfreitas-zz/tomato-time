import Vue from 'vue';
import Vuex from 'vuex';

import timer from '../modules/timer/store/timer.store';
import water from '../modules/water/store/water.store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    timer,
    water,
  },
});

export default store;
