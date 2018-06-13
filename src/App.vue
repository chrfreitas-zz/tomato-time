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
}

.container.long .water {
  background-color: #16a085;
}

.container.short .water {
  background-color: #2980b9;
}
</style>
