const timerStore = {
  state: {

  },
  mutations: {
    changeState(state, payload) {
      state.state = payload;
    },
  },
  actions: {
    changeState({ commit }) {
      commit('changeState');
    },
  },
};

export default timerStore;
