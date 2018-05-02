const TimerStore = {
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

export default TimerStore;
