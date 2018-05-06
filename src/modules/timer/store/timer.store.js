import moment from 'moment';

import { TIMER_DEFAULT } from '../constants/timer.constant';

const timerStore = {
  state: {
    timer: TIMER_DEFAULT,
  },
  getters: {
    timerFormatted(state) {
      const timer = state.timer.seconds;
      return moment(timer * 1000).format('mm:ss');
    },
  },
  mutations: {
    play(state) {
      state.timer.seconds -= 1;
      setInterval(() => {
        state.timer.seconds -= 1;
      }, 1000);
    },
  },
  actions: {
    play({ commit }) {
      commit('play');
    },
  },
};

export default timerStore;
