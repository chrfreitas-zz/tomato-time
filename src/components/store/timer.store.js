const timerStore = {
  state: {
    state: 'OnWork',
    number: 25,
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
