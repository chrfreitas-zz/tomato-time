const TIMER_TYPES = [
  {
    position: 0,
    stateName: 'onShortBreak',
    seconds: 300,
  },
  {
    position: 1,
    stateName: 'onWorking',
    seconds: 1500,
  },
  {
    position: 2,
    stateName: 'onLongBreak',
    seconds: 900,
  },
];

const TIMER_DEFAULT = TIMER_TYPES[1];

export { TIMER_TYPES, TIMER_DEFAULT };
