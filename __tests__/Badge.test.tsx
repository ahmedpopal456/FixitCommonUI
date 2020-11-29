import 'react-native';
import React from 'react';
import { Badge } from '../src/components/atoms/Badge';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/** Testing Rendered Output (snapshot testing) */
it('matches default snapshot', () => {
  const tag = renderer.create(<Badge>1</Badge>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches text color snapshot', () => {
  const tag = renderer.create(<Badge color="accent">1</Badge>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches background color snapshot', () => {
  const tag = renderer.create(<Badge background="accent" color="primary">1</Badge>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches border color snapshot', () => {
  const tag = renderer.create(<Badge background="accent" color="primary" border="red">1</Badge>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches opacity snapshot', () => {
  const tag = renderer.create(<Badge background="accent" color="primary" border="red" opacity={0.3}>1</Badge>);
  expect(tag.toJSON()).toMatchSnapshot();
});
