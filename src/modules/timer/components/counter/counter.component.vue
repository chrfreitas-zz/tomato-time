<template>
  <div class="counter">
    {{ timerFormatted }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: mapGetters([
    'timerFormatted',
  ]),
};
</script>

<style scoped>
  .counter {
    text-align: center;
    font-size: 5em;
    margin: 0 30px;
    color: #fff;
  }
</style>
