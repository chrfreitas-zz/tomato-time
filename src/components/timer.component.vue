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
  </div>
</template>

<script>
import moment from 'moment';
import TIMER_CONSTANTS from './constants/timer.constant';

export default {
  name: 'Timer',
  data() {
    return {
      timer: 1500,
      timerFormatted: '25:00',
      intervalId: 0,
    };
  },
  methods: {
    play() {
      this.intervalId = setInterval(() => {
        this.timer -= 1;
        this.timerFormatted = this.convertToMinute(this.timer);
      }, 1000);
    },
    pause() {
      clearInterval(this.intervalId);
    },
    stop() {
      this.pause();
      this.refresh();
    },
    refresh() {
      this.timer = TIMER_CONSTANTS.working.seconds;
      this.timerFormatted = this.convertToMinute(this.timer);
    },
    convertToMinute(timer) {
      return moment(timer * 1000).format('mm:ss');
    },
  },
};
</script>

<style scoped>

</style>
