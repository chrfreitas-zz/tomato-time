<template>
  <div class="container" v-bind:class="classContainer" id="app">
    <router-view/>

    <div class="water" v-bind:style="{ height: waterHeight + '%' }">
      <svg class="water__wave water__wave_back" viewBox="0 0 560 20">
          <use xlink:href="./static/svg/wave.svg#wave"></use>
      </svg>
      <svg class="water__wave water__wave_front" viewBox="0 0 560 20">
          <use xlink:href="./static/svg/wave.svg#wave"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters([
    'classContainer',
    'waterHeight',
  ]),
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.container.work .water {
  background-color: #c0392b;
}

.container.work .water__wave_front {
    fill: #c0392b;
}

.container.work .water__wave_back {
    fill: #80251b;
}

.container.long .water {
  background-color: #16a085;
}

.container.long .water__wave_front {
    fill: #16a085;
}

.container.long .water__wave_back {
    fill: #0d6050;
}

.container.short .water {
  background-color: #2980b9;
}

.container.short .water__wave_front {
    fill: #2980b9;
}

.container.short .water__wave_back {
    fill: #15496b;
}

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
  animation: wave-back 1.4s infinite linear;
  will-change: transform;
}

.water__wave_front {
  left: 0;
  margin-bottom: -1px;
  animation: wave-front .7s infinite linear;
  will-change: transform;
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
