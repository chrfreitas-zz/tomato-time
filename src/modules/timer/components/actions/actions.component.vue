<template>
  <div class="actions">
      <button v-on:click="changeTimerTo(-1)"
              v-bind:disabled="isDisabledPrevious"><</button>
      <button v-on:click="changeTimerTo(1)"
              v-bind:disabled="isDisabledNext">></button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Actions',
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
