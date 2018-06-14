const stateInitial = {
  water: {
    height: window.innerHeight,
  },
};

const getters = {};

const mutations = {
  decrease(state, rootState) {
    state.water.height -= window.innerHeight / rootState.timer.timer.seconds;
  },
  reset(state) {
    state.water.height = window.innerHeight;
  },
  changeTo(state) {
    state.water.height = window.innerHeight;
  },
};

const actions = {};

export default {
  state: stateInitial,
  getters,
  mutations,
  actions,
};
