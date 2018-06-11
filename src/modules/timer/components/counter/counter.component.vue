<template>
  <div class="counter">
    {{ getTimerFormatted }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: mapGetters([
    'getTimerFormatted',
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
