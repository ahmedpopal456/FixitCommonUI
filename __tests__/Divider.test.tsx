import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Divider } from '../src/components/atoms/Divider';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<Divider></Divider>);
});

it('renders correctly when text is passed', () => {
  renderer.create(<Divider>some text</Divider>);
});

it('renders correctly when small', () => {
  renderer.create(<Divider small></Divider>);
});

it('renders correctly when faded', () => {
  renderer.create(<Divider small faded>some text</Divider>);
});
