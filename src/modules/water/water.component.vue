<template>
  <div class="water" v-bind:style="{ height: getWaterHeight + 'px' }">
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
  transition: height .3s;
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

.container.work .water {
  background-color: #c0392b;
  border:1px solid #c0392b;
}

.container.long .water {
  background-color: #16a085;
  border:1px solid #16a085;
}

.container.short .water {
  background-color: #2980b9;
  border:1px solid #2980b9;
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

@supports not (mix-blend-mode: difference) {
  .container.work .water,
  .container.long .water,
  .container.short .water {
    background-color: #fff;
    border:1px solid #fff;
  }

  .container.work .water__wave_front,
  .container.work .water__wave_back,
  .container.long .water__wave_front,
  .container.long .water__wave_back,
  .container.short .water__wave_front,
  .container.short .water__wave_back {
    fill: #fff;
  }

}

</style>
