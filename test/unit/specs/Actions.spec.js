import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Actions from '../../../src/modules/timer/components/actions/actions.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Actions', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      changeTo: jest.fn()
    }

    const timer = {
      getters: {
        isDisabledNext: jest.fn(),
        isDisabledPrevious: jest.fn()
      },
      actions,
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

  it('should stop the timer', () => {
    const wrapper = shallowMount(Actions, {store, localVue});
    wrapper.find('button:first-child').trigger('click');
    expect(actions.changeTo.mock.calls).toHaveLength(1)
  });
});
