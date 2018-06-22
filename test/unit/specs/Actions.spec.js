import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Actions from '../../../src/modules/timer/components/actions/actions.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Actions', () => {
  let store

  beforeEach(() => {
    const timer = {
      getters: {
        isDisabledNext: jest.fn(),
        isDisabledPrevious: jest.fn()
      }
    }
    store = new Vuex.Store({
      modules: {
        timer,
      }
    })
  })

  it('should create/match snapshot', () => {
    const wrapper = shallowMount(Actions, {store, localVue});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
