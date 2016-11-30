import TestUtils from 'react-addons-test-utils';
import equals from 'lodash/isEqual';
import ShallowTestUtils from 'react-shallow-testutils';

export function render(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export function hasProp(type, value) {
  return (component) => component.props && component.props[type] === value;
}

export function isEqual(value) {
  return (component) => equals(value, component);
}

export function findOne(predicate, component) {
  const elem = ShallowTestUtils.findAll(component, predicate);

  if (elem.length !== 1) {
    throw new Error('Did not find exactly one match');
  }

  return elem[0];
}

export function containsOne(value, component) {
  return !!findOne(isEqual(value), component);
}

export function findWithType(type, component) {
  return ShallowTestUtils.findWithType(component, type);
}

export function findAllWithType(type, component) {
  return ShallowTestUtils.findAllWithType(component, type);
}
