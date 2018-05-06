<template>
  <div class="timer">
    <counter/>
    <control/>
    <actions v-bind:position="timer.position" />
  </div>
</template>

<script>
import control from './components/control/control.component';
import counter from './components/counter/counter.component';
import actions from './components/actions/actions.component';

import { TIMER_DEFAULT } from './constants/timer.constant';

const intervalId = 0;

export default {
  name: 'Timer',
  data() {
    return {
      timer: {},
    };
  },
  components: {
    control,
    counter,
    actions,
  },
  methods: {
    pause() {
      clearInterval(intervalId);
    },
    stop() {
      this.pause();
      this.reset();
    },
    reset() {
      this.timer = TIMER_DEFAULT;
    },
    changeStateTo(index) {
      this.timer = this.timers[this.timer.position + index];
    },
  },
};
</script>

<style scoped>

</style>
