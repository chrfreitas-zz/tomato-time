<template>
  <div class="counter">
    {{ timerFormatted }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters([
      'timerFormatted',
    ]),
  },
};
</script>
