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
  font-family: 'Roboto', sans-serif;
}
</style>
