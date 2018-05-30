import Timer from './../classes/timer.class';

const TIMER_NAMES = {
  short: 'short',
  work: 'work',
  long: 'long',
};

const TIMER_TYPES = [
  new Timer(TIMER_NAMES.short, 0, 300),
  new Timer(TIMER_NAMES.work, 1, 1500),
  new Timer(TIMER_NAMES.long, 2, 900),
];

const TIMER_DEFAULT = TIMER_TYPES[1];

export {
  TIMER_TYPES,
  TIMER_DEFAULT,
  TIMER_NAMES,
};
