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
      <button v-on:click="changeStateTo">Next</button>
      <button v-on:click="changeStateTo">Previous</button>
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
      timer: 1500,
    };
  },
  computed: {
    timerFormatted() {
      return this.convertToMinute(this.timer);
    },
  },
  methods: {
    play() {
      if (!intervalId) {
        return;
      }

      intervalId = setInterval(() => {
        this.timer -= 1;
      }, 1000);
    },
    pause() {
      clearInterval(intervalId);
    },
    stop() {
      this.pause();
      this.refresh();
    },
    refresh() {
      this.timer = TIMER_CONSTANTS.working.seconds;
    },
    convertToMinute(timer = 0) {
      return moment(timer * 1000).format('mm:ss');
    },
    changeStateTo(state) {
      console.log(state);
    },
  },
};
</script>

<style scoped>

</style>
