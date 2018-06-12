import moment from 'moment';

import { TIMER_DEFAULT, TIMER_TYPES } from '../constants/timer.constant';

let intervalID = 0;

const stateInitial = {
  timer: {
    ...TIMER_DEFAULT,
  },
  water: {
    height: 100,
  },
};

const getters = {
  getTimerFormatted(state) {
    const timer = state.timer.seconds;
    return moment(timer * 1000).format('mm:ss');
  },
  isDisabledNext(state) {
    const lastPosition = TIMER_TYPES.length - 1;
    return state.timer.position === lastPosition;
  },
  isDisabledPrevious(state) {
    const firstPosition = 0;
    return state.timer.position === firstPosition;
  },
};

const mutations = {
  decrease(state) {
    state.timer.seconds -= 1;
    state.water.height -= 1;
  },
  reset(state) {
    state.timer = {
      ...TIMER_TYPES[state.timer.position],
    };

    state.water.height = 100;
  },
  clearInterval() {
    clearInterval(intervalID);
    intervalID = 0;
  },

  changeTo(state, payload) {
    state.timer = {
      ...TIMER_TYPES[state.timer.position + payload.index],
    };

    state.water.height = 100;
  },
};

const actions = {
  play({ commit }) {
    if (intervalID) {
      return;
    }

    commit('decrease');
    intervalID = setInterval(() => {
      commit('decrease');
    }, 1000);
  },
  pause({ commit }) {
    commit('clearInterval');
  },
  stop({ commit }) {
    commit('clearInterval');
    commit('reset');
  },
  changeTo({ commit }, payload) {
    commit('clearInterval');
    commit('changeTo', payload);
  },
};

export default {
  state: stateInitial,
  getters,
  mutations,
  actions,
};
