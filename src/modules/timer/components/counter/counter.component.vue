<template>
  <div class="counter">
    {{ timerFormatted }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Counter',
  props: ['timer'],
  computed: {
    timerFormatted() {
      return this.convertToMinute(this.timer.seconds);
    },
  },
  methods: {
    convertToMinute(timer = 0) {
      return moment(timer * 1000).format('mm:ss');
    },
  },
};
</script>
