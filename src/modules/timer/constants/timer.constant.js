import Timer from './../classes/timer.class';

const TIMER_TYPES = [
  new Timer(0, 300),
  new Timer(1, 1500),
  new Timer(2, 900),
];

const TIMER_DEFAULT = TIMER_TYPES[1];

export { TIMER_TYPES, TIMER_DEFAULT };
