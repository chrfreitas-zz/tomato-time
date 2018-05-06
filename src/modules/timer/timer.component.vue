<template>
  <div class="timer">
    <counter/>
    <control/>
    <actions/>
  </div>
</template>

<script>
import control from './components/control/control.component';
import counter from './components/counter/counter.component';
import actions from './components/actions/actions.component';

export default {
  name: 'Timer',
  components: {
    control,
    counter,
    actions,
  },
  methods: {
    // stop() {
    //   this.pause();
    //   this.reset();
    // },
    // reset() {
    //   this.timer = TIMER_DEFAULT;
    // },
    // changeStateTo(index) {
    //   this.timer = this.timers[this.timer.position + index];
    // },
  },
};
</script>

<style scoped>

</style>
