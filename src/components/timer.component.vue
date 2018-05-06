<template>
  <div class="timer">
    <div class="counter">
      {{ timerFormatted }}
    </div>
    <div class="controls">
      <button class="play" v-on:click="play">Play</button>
      <button class="pause" v-on:click="pause">Pause</button>
      <button class="stop" v-on:click="stop">Stop</button>
    </div>
    <div>
      <button v-on:click="changeStateTo(-1)"
              v-bind:disabled="disabledPrevious">Previous</button>
      <button v-on:click="changeStateTo(1)"
              v-bind:disabled="disabledNext">Next</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import TIMER_CONSTANTS from './constants/timer.constant';

let intervalId = 0;

export default {
  name: 'Timer',
  data() {
    return {
      timer: {},
      timers: TIMER_CONSTANTS,
    };
  },
  created() {
    this.reset();
  },
  computed: {
    timerFormatted() {
      return this.convertToMinute(this.timer.seconds);
    },
    disabledNext() {
      if ((this.timer.position + 1) === this.timers.length) {
        return true;
      }
      return false;
    },
    disabledPrevious() {
      if (this.timer.position === 0) {
        return true;
      }
      return false;
    },
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
      this.timer = TIMER_CONSTANTS[1];
    },
    convertToMinute(timer = 0) {
      return moment(timer * 1000).format('mm:ss');
    },
    changeStateTo(index) {
      this.timer = this.timers[this.timer.position + index];
    },
  },
};
</script>

<style scoped>

</style>
