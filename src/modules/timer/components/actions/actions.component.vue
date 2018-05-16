<template>
  <div class="actions">
      <button v-on:click="changeTimerTo(-1)" v-bind:disabled="isDisabledPrevious">Previous</button>
      <counter />
      <button v-on:click="changeTimerTo(1)" v-bind:disabled="isDisabledNext">Next</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import counter from '../counter/counter.component';

export default {
  name: 'Actions',
  components: {
    counter,
  },
  computed: mapGetters([
    'isDisabledNext',
    'isDisabledPrevious',
  ]),
  methods: {
    changeTimerTo(index) {
      this.$store.dispatch('changeTimerTo', {
        index,
      });
    },
  },
};
</script>

<style scoped>
  .actions {
    display: flex;
    justify-content: center;
  }
</style>
