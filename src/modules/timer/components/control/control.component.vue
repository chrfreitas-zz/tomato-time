<template>
  <div class="controls">
      <button class="btn" @click="play">
        <i class="fas fa-play"></i>
      </button>
      <button class="btn" @click="pause">
        <i class="fas fa-pause"></i>
      </button>
      <button class="btn" @click="stop">
        <i class="fas fa-stop"></i>
      </button>
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
      this.$store.dispatch('pause');
    },
    stop() {
      this.$store.dispatch('stop');
    },
  },
};
</script>

<style scoped>
  .controls {
    display: flex;
    justify-content: center;
    margin: 25px 0 0 0;
  }

  .btn {
    border: 0;
    background: transparent;
    font-size: 1.8em;
    cursor: pointer;
    margin: 0 20px 0 0;
    color: #fff;
  }

  .btn:last-child {
    margin: 0;
  }
</style>

