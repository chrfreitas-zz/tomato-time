<template>
  <div class="timer">
    <actions/>
    <control/>
  </div>
</template>

<script>
import control from './components/control/control.component';
import actions from './components/actions/actions.component';

export default {
  name: 'Timer',
  components: {
    control,
    actions,
  },
};
</script>
