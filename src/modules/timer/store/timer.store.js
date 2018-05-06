import moment from 'moment';

import { TIMER_DEFAULT } from '../constants/timer.constant';

let intervalID = 0;

const timerStore = {
  state: {
    timer: {
      ...TIMER_DEFAULT,
    },
  },
  getters: {
    timerFormatted(state) {
      const timer = state.timer.seconds;
      return moment(timer * 1000).format('mm:ss');
    },
  },
  mutations: {
    decrease(state) {
      state.timer.seconds -= 1;
    },
    reset(state) {
      state.timer = {
        ...TIMER_DEFAULT,
      };
    },
  },
  actions: {
    play({ commit }) {
      commit('decrease');
      intervalID = setInterval(() => {
        commit('decrease');
      }, 1000);
    },
    pause() {
      clearInterval(intervalID);
    },
    stop({ commit }) {
      clearInterval(intervalID);
      commit('reset');
    },
  },
};

export default timerStore;
