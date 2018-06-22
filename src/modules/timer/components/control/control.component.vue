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
    color: #000;
  }

  .btn:last-child {
    margin: 0;
  }

  @supports (mix-blend-mode: difference) {
    .work .btn {
      color: #c0392b;
    }

    .long .btn {
      color: #16a085;
    }

    .short .btn {
      color: #2980b9;
    }
  }
</style>

