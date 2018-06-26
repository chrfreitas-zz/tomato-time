import Store from '../../../src/modules/timer/store/timer.store';

describe('Timer:Store', () => {
  const {  mutations } = Store;
  describe('Mutations', () => {
    it('should descrase the timer number', () => {
      const state = {
        timer: {
          counter: 1
        }
      }

      mutations.decrease(state);
      expect(state.timer.counter).toBe(0);
    });

    it('should change timer to other type (next or previous)', () => {
      const state = {
        timer: {
          position: 0
        }
      }

      mutations.changeTo(state, +1);
      expect(state.timer.position).toBe(1);
    });
  });
});
