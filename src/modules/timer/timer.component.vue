<template>
  <div class="timer">
    <carousel>
      <counter />
    </carousel>
    <control/>
  </div>
</template>

<script>
import control from './components/control/control.component';
import carousel from './components/carousel/carousel.component';
import counter from './components/counter/counter.component';

export default {
  name: 'Timer',
  components: {
    control,
    carousel,
    counter,
  },
};
</script>
