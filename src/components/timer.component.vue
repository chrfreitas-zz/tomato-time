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
import timerConstant from './constants/timer.constant';

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
        this.timerFormatted = moment(this.timer * 1000).format('mm:ss');
      }, 1000);
      return console.log('play');
    },
    pause() {
      clearInterval(this.intervalId);
      return console.log('pause');
    },
    stop() {
      clearInterval(this.intervalId);
      this.timer = timerConstant.working.seconds;
      this.timerFormatted = moment(this.timer * 1000).format('mm:ss');
      return console.log('stop');
    },
  },
};
</script>

<style scoped>

</style>
