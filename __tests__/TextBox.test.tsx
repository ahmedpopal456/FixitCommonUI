import "react-native";
import React from "react";
import { TextBox } from "../src/components/atoms/TextInput";
import { Icon } from "../src/components/atoms/Icon";

import renderer from 'react-test-renderer';

it('matches placeholder snapshot', () => {
    const textInput = renderer.create(<TextBox placeholder="Name"/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches default snapshot', () => {
    const textInput = renderer.create(<TextBox/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches title snapshot', () => {
    const textInput = renderer.create(<TextBox title="Section Name"/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches height snapshot', () => {
    const textInput = renderer.create(<TextBox style={{height:'45'}}/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches text input icon snapshot', () => {
    const textInputIcon = renderer.create(<TextBox icon={<Icon library="MaterialCommunityIcons" name="currency-usd" color="accent"/>}/>);
    expect(textInputIcon.toJSON()).toMatchSnapshot();
})


