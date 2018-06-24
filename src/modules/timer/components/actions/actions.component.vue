<template>
  <div class="actions">
      <button class="btn" v-on:click="changeTo(-1)" v-bind:disabled="isDisabledPrevious">
              <i class="fas fa-angle-left"></i>
      </button>
      <counter />
      <button class="btn" v-on:click="changeTo(1)" v-bind:disabled="isDisabledNext">
        <i class="fas fa-angle-right"></i>
      </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
  methods: mapActions([
    'changeTo',
  ]),
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
    mix-blend-mode: difference;
  }

  .btn[disabled] {
    opacity: .3;
    cursor: not-allowed;
  }
  
  .work .btn {
    color: #c0392b;
  }

  .long .btn {
    color: #16a085;
  }

  .short .btn {
    color: #2980b9;
  }
  
</style>
