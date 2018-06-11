<template>
  <div class="actions">
      <button class="btn" v-on:click="changeTimerTo(-1)" v-bind:disabled="isDisabledPrevious">
              <i class="fas fa-angle-left"></i>
      </button>
      <counter />
      <button class="btn" v-on:click="changeTimerTo(1)" v-bind:disabled="isDisabledNext">
        <i class="fas fa-angle-right"></i>
      </button>


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
  computed: {
    // change() {
    //   console.log(this.$store.state.timer);
    //   return 1;
    // },
    ...mapGetters([
      'isDisabledNext',
      'isDisabledPrevious',
    ]),
  },

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

  .btn {
    border: 0;
    background: transparent;
    font-size: 3.5em;
    cursor: pointer;
    color: #fff;
  }

  .btn[disabled] {
    opacity: .3;
    cursor: not-allowed;
  }
</style>
