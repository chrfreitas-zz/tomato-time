<template>
  <div class="actions">
      <button v-on:click="changeStateTo(-1)"
              v-bind:disabled="disabledPrevious">Previous</button>
      <button v-on:click="changeStateTo(1)"
              v-bind:disabled="disabledNext">Next</button>
    </div>
</template>

<script>
export default {
  name: 'Actions',
  props: ['position', 'timers'],
  computed: {
    disabledNext() {
      if ((this.position + 1) === this.timers.length) {
        return true;
      }
      return false;
    },
    disabledPrevious() {
      if (this.position === 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

