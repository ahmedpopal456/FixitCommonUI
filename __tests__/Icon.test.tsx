import 'react-native';
import React from 'react';
import { Icon } from '../src/components/atoms/Icon';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/** Testing Rendered Output (snapshot testing) */
it('matches name snapshot', () => {
  const icon = renderer.create(<Icon name="home" />);
  expect(icon.toJSON()).toMatchSnapshot();
});

it('matches library snapshot', () => {
  const icon = renderer.create(<Icon library="AntDesign" name="home" />);
  expect(icon.toJSON()).toMatchSnapshot();
});

it('matches color snapshot', () => {
  const icon = renderer.create(<Icon library="AntDesign" name="home" color="accent"/>);
  expect(icon.toJSON()).toMatchSnapshot();
});