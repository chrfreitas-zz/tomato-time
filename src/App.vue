<template>
  <div class="tt-container" id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.tt-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

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
