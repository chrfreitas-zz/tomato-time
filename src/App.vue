<template>
  <div class="container" v-bind:class="classContainer" id="app">
    <router-view/>

    <div class="water" v-bind:style="{ height: waterHeight + '%' }">
      <svg class="water__wave water__wave_back" viewBox="0 0 560 20">
          <use xlink:href="#wave"></use>
      </svg>
      <svg class="water__wave water__wave_front" viewBox="0 0 560 20">
          <use xlink:href="#wave"></use>
      </svg>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">
        <symbol id="wave">
            <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
            <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
            <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
            <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
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
