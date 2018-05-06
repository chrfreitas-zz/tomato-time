<template>
  <div class="timer">
    <counter v-bind:timer="timer"/>
    <control />
    <actions v-bind:position="timer.position" />
  </div>
</template>

<script>
import control from './components/control/control.component';
import counter from './components/counter/counter.component';
import actions from './components/actions/actions.component';

import { TIMER_DEFAULT } from './constants/timer.constant';

let intervalId = 0;

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
  created() {
    this.reset();
  },
  methods: {
    play() {
      if (intervalId) {
        return;
      }

      this.timer.seconds -= 1;
      intervalId = setInterval(() => {
        this.timer.seconds -= 1;
      }, 1000);
    },
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
