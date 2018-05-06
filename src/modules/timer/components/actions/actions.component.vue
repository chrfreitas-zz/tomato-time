<template>
  <div class="actions">
      <button v-on:click="changeStateTo(-1)"
              v-bind:disabled="isDisabledPrevious">Previous</button>
      <button v-on:click="changeStateTo(1)"
              v-bind:disabled="isDisabledNext">Next</button>
    </div>
</template>

<script>
import { TIMER_TYPES } from '../../constants/timer.constant';

export default {
  name: 'Actions',
  props: ['position', 'timers'],
  computed: {
    isDisabledNext() {
      const lastPosition = TIMER_TYPES.length - 1;
      if (this.position === lastPosition) {
        return true;
      }
      return false;
    },
    isDisabledPrevious() {
      const firstPosition = 0;
      if (this.position === firstPosition) {
        return true;
      }
      return false;
    },
  },
  methods: {
    changeStateTo() {
      console.log('change state');
    },
  },
};
</script>
