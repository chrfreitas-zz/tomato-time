<template>
  <div class="container" v-bind:class="classContainer" id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters([
    'classContainer',
  ]),
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.container.work {
    background-color: #c0392b;
}

.container.short {
  background-color: #16a085;
}

.container.long {
  background-color: #2980b9;
}
</style>
