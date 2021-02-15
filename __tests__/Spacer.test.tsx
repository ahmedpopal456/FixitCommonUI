import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Spacer } from '../src/components/atoms/Spacer';

// Note: test renderer must be required after react-native.

/** Testing Rendered Output (snapshot testing) */
it('matches default snapshot', () => {
  const spacer = renderer.create(<Spacer />);
  expect(spacer.toJSON()).toMatchSnapshot();
});

it('matches stretch snapshot', () => {
  const spacer = renderer.create(<Spacer stretch />);
  expect(spacer.toJSON()).toMatchSnapshot();
});

it('matches height snapshot', () => {
  const spacer = renderer.create(<Spacer height="120px" />);
  expect(spacer.toJSON()).toMatchSnapshot();
});

it('matches width snapshot', () => {
  const spacer = renderer.create(<Spacer width="30px" />);
  expect(spacer.toJSON()).toMatchSnapshot();
});
