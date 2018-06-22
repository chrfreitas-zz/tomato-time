import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Control from '../../../src/modules/timer/components/control/control.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Control', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
        play: jest.fn(),
        stop: jest.fn(),
        pause: jest.fn(),
    },
    
    store = new Vuex.Store({
      modules: {
        timer: {
            actions,
        },
      }
    })
  })

  it('should create/match snapshot', () => {
    const wrapper = shallowMount(Control, {store, localVue});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should play the timer', () => {
    const wrapper = shallowMount(Control, {store, localVue});
    wrapper.find('.fa-play').trigger('click');
    expect(actions.play.mock.calls).toHaveLength(1)
  });

  it('should pause the timer', () => {
    const wrapper = shallowMount(Control, {store, localVue});
    wrapper.find('.fa-pause').trigger('click');
    expect(actions.pause.mock.calls).toHaveLength(1)
  });

  it('should stop the timer', () => {
    const wrapper = shallowMount(Control, {store, localVue});
    wrapper.find('.fa-stop').trigger('click');
    expect(actions.stop.mock.calls).toHaveLength(1)
  });
});
