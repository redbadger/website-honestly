import { StateNavigator } from 'navigation';

function MockNavigator(parentKey) {
  // The constructor is checked in prop-types,
  // so we use it as base and then mutate
  const child = new StateNavigator();

  child.stateContext = {
    state: {
      parentKey,
    },
  };

  child.states = {
    foo: {},
    bar: {},
    barChild: {
      parentKey: 'bar',
    },
  };

  return child;
}

export function createMockContext(parentKey) {
  return { stateNavigator: MockNavigator(parentKey) };
}
