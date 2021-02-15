import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from '../src/components/atoms/Avatar';
import { Icon } from '../src/components/atoms/Icon';

// Note: test renderer must be required after react-native.

it('matches title snapshot', () => {
  const textInput = renderer.create(<Avatar title="Name"/>);
  expect(textInput.toJSON()).toMatchSnapshot();
});

it('matches icon snapshot', () => {
  const textInput = renderer.create(<Avatar icon={<Icon library="AntDesign" name="user" color="white" size={30}/>}/>);
  expect(textInput.toJSON()).toMatchSnapshot();
});

it('matches image snapshot', () => {
  const textInput = renderer.create(<Avatar image={'https://reactjs.org/logo-og.png'}/>);
  expect(textInput.toJSON()).toMatchSnapshot();
});
