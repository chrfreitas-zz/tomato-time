const stateInitial = {
  water: {
    height: 100,
  },
};

const getters = {};

const mutations = {
  decrease(state) {
    state.water.height -= 1;
  },
  reset(state) {
    state.water.height = 100;
  },
  changeTo(state) {
    state.water.height = 100;
  },
};

const actions = {
  stop({ commit }) {
    commit('reset');
  },
};

export default {
  state: stateInitial,
  getters,
  mutations,
  actions,
};
