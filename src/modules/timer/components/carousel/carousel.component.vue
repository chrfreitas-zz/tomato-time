<template>
  <div class="carousel">
      <button class="btn" v-on:click="previous()" v-bind:disabled="isDisabledPrevious">
              <i class="fas fa-angle-left"></i>
      </button>
      <slot />
      <button class="btn" v-on:click="next()" v-bind:disabled="isDisabledNext">
        <i class="fas fa-angle-right"></i>
      </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carousel',
  computed: mapGetters([
    'isDisabledNext',
    'isDisabledPrevious',
  ]),
  methods: mapActions([
    'previous',
    'next',
  ]),
};
</script>

<style scoped>
  .carousel {
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
