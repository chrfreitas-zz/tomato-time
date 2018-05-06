<template>
  <div class="controls">
      <button class="play" @click="play">Play</button>
      <button class="pause" @click="pause">Pause</button>
      <button class="stop" @click="stop">Stop</button>
    </div>
</template>

<script>
export default {
  name: 'Control',
  methods: {
    play() {
      this.$store.dispatch('play');
    },
    pause() {

    },
    stop() {

    },
  },
};
</script>
