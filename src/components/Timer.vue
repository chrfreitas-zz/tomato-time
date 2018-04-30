<template>
  <div class="timer">
    <div class="counter">
      {{ timer }}
    </div>
    <div class="controls">
      <button class="play" v-on:click="play">Play</button>
      <button class="pause" v-on:click="pause">Pause</button>
      <button class="stop" v-on:click="stop">Stop</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      timer: 25,
    };
  },
  computed: {
    play() {
      return console.log('play');
    },
    pause() {
      return console.log('pause');
    },
    stop() {
      return console.log('stop');
    },
  },
};
</script>

<style scoped>

</style>
