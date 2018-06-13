<template>
  <div class="water" v-bind:style="{ height: getWaterHeight + '%' }">
    <svg class="water__wave water__wave_back" viewBox="0 0 560 20">
        <use xlink:href="./static/svg/wave.svg#wave"></use>
    </svg>
    <svg class="water__wave water__wave_front" viewBox="0 0 560 20">
        <use xlink:href="./static/svg/wave.svg#wave"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Water',
  computed: {
    getWaterHeight() {
      return this.$store.state.water.water.height;
    },
  },
};
</script>

<style>
.water {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  will-change: transform;
}

.water__wave {
  width: 200%;
  position: absolute;
  bottom: 100%;
}

.water__wave_back {
  right: 0;
  animation: wave-back 2s infinite linear;
  will-change: transform;
}

.water__wave_front {
  left: 0;
  margin-bottom: -1px;
  animation: wave-front 1s infinite linear;
  will-change: transform;
}

.container.work .water__wave_front {
  fill: #c0392b;
}

.container.work .water__wave_back {
    fill: #80251b;
}

.container.long .water__wave_front {
  fill: #16a085;
}

.container.long .water__wave_back {
  fill: #0d6050;
}

.container.short .water__wave_front {
  fill: #2980b9;
}

.container.short .water__wave_back {
  fill: #15496b;
}

@keyframes wave-front {
  100% {
      transform: translate(-50%, 0);
  }
}

@keyframes wave-back {
  100% {
      transform: translate(50%, 0);
  }
}
</style>
