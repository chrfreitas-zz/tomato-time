<template>
  <div class="container" v-bind:class="getClassState" id="app">
    <router-view/>
    <water v-if="!isChromeOrSafari"/>
  </div>
</template>

<script>
import water from './modules/water/water.component';

export default {
  name: 'App',
  components: {
    water,
  },
  computed: {
    getClassState() {
      return this.$store.state.timer.timer.name;
    },
    isChromeOrSafari() {
      const isChrome = /Chrome/.test(navigator.userAgent);
      const isSafari = /Safari/.test(navigator.userAgent);
      return (isChrome || isSafari);
    },
  },
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
</style>
