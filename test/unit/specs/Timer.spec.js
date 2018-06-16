import { shallowMount } from '@vue/test-utils';
import Timer from '../../../src/modules/timer/timer.component';

describe('Timer', () => {
  it('should create/match snapshot', () => {
    const wrapper = shallowMount(Timer);
    expect(wrapper).toMatchSnapshot();
  });
});
