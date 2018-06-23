<template>
  <div class="container" v-bind:class="getClassState" id="app">
    <router-view/>
    <water />
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

/* Hack for webkit issues. Find a new solution*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
  .container.short .water,
  .container.work .water,
  .container.long .water{
    background-color: #fff;
  }
}
</style>
