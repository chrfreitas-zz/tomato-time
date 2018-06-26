import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Carousel from '../../../src/modules/timer/components/carousel/carousel.component';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timer:Carousel', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      next: jest.fn(),
      previous: jest.fn(),
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
    const wrapper = shallowMount(Carousel, {store, localVue});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should change to next timer', () => {
    const wrapper = shallowMount(Carousel, {store, localVue});
    wrapper.find('button:first-child').trigger('click');
    expect(actions.previous.mock.calls).toHaveLength(1)
  });

  it('should change to previous timer', () => {
    const wrapper = shallowMount(Carousel, {store, localVue});
    wrapper.find('button:last-child').trigger('click');
    expect(actions.next.mock.calls).toHaveLength(1)
  });
});
