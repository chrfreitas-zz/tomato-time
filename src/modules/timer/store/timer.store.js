import moment from 'moment';

import { TIMER_DEFAULT, TIMER_TYPES } from '../constants/timer.constant';

let intervalID = 0;

const stateInitial = {
  timer: {
    ...TIMER_DEFAULT,
  },
};

const getters = {
  timerFormatted(state) {
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
  },
  reset(state) {
    state.timer = {
      ...TIMER_TYPES[state.timer.position],
    };
  },
  changeTimerTo(state, payload) {
    state.timer = {
      ...TIMER_TYPES[state.timer.position + payload.index],
    };
  },
};

const actions = {
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
  changeTimerTo({ commit }, payload) {
    commit('changeTimerTo', payload);
  },
};

export default {
  state: stateInitial,
  getters,
  mutations,
  actions,
};
