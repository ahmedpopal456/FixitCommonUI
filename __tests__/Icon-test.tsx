/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Icon } from '../src/components/atoms/Icon';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders name', () => {
  renderer.create(<Icon name="home" />);
});

it('renders library', () => {
  renderer.create(<Icon library="AntDesign" name="home" />);
});

it('renders color', () => {
  renderer.create(<Icon library="AntDesign" name="home" color="accent"/>);
});

it("matches snapshot", () => {
  const button = renderer
    .create(<Icon library="AntDesign" name="home" color="accent"/>)
    .toJSON();
  expect(button).toMatchSnapshot();
});

