import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tag } from '../src/components/atoms/Tag';

// Note: test renderer must be required after react-native.

/** Testing Rendered Output (snapshot testing) */
it('matches default snapshot', () => {
  const tag = renderer.create(<Tag>Bathroom</Tag>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches text color snapshot', () => {
  const tag = renderer.create(<Tag textColor="accent">Kitchen</Tag>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches background color snapshot', () => {
  const tag = renderer.create(<Tag backgroundColor="accent" textColor="primary">Bedroom</Tag>);
  expect(tag.toJSON()).toMatchSnapshot();
});

it('matches nested snapshot', () => {
  const tag = renderer.create(<Tag>Bathroom<Tag backgroundColor="green" textColor="dark">$99.99</Tag></Tag>);
  expect(tag.toJSON()).toMatchSnapshot();
});
