<template>
  <div class="timer">
    <actions>
      <counter />
    </actions>
    <control/>
  </div>
</template>

<script>
import control from './components/control/control.component';
import actions from './components/actions/actions.component';
import counter from './components/counter/counter.component';

export default {
  name: 'Timer',
  components: {
    control,
    actions,
    counter,
  },
};
</script>
