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
    mix-blend-mode: difference;
  }

  .work .counter {
    color: #c0392b;
  }

  .long .counter {
    color: #16a085;
  }

  .short .counter {
    color: #2980b9;
  }
</style>
