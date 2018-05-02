<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.on-work {
  background-color: #c0392b;
}

.on-short-break {
  background-color: #27ae60;
}

.on-long-break {
  background-color: #2980b9;
}
</style>
