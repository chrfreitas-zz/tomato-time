<template>
  <div class="controls">
      <button class="btn fas fa-play" @click="play">
      </button>
      <button class="btn fas fa-pause" @click="pause">
      </button>
      <button class="btn fas fa-stop" @click="stop">
      </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Control',
  methods: mapActions([
    'play',
    'pause',
    'stop',
  ]),
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
    mix-blend-mode: difference;
  }

  .btn:last-child {
    margin: 0;
  }

  .work .btn {
    color: #c0392b;
  }

  .long .btn {
    color: #16a085;
  }

  .short .btn {
    color: #2980b9;
  }
</style>

