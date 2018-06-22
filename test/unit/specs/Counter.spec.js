import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Counter from '../../../src/modules/timer/components/counter/counter.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Counter', () => {
  let getters
  let store

  beforeEach(() => {
    const timer = {
      getters: {
        getTimerFormatted: jest.fn(),
      }
    }
    store = new Vuex.Store({
      modules: {
        timer,
      }
    })
  })

  it('should create/match snapshot', () => {
    const wrapper = shallowMount(Counter, {store, localVue});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
