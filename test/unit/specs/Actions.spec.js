import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Actions from '../../../src/modules/timer/components/actions/actions.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Actions', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      isDisabledNext: jest.fn(),
      isDisabledPrevious: jest.fn()
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('should create/match snapshot', () => {
    const wrapper = shallowMount(Actions, {store, localVue});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
