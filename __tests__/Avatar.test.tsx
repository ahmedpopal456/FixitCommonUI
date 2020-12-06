import "react-native";
import React from "react";
import { AvatarBadge } from "../src/components/atoms/Avatar";
import { Icon } from "../src/components/atoms/Icon";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it('matches title snapshot', () => {
    const textInput = renderer.create(<AvatarBadge title="Name"/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches icon snapshot', () => {
    const textInput = renderer.create(<AvatarBadge icon={<Icon library="AntDesign" name="user" color="white" size={30}/>}/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})

it('matches image snapshot', () => {
    const textInput = renderer.create( <AvatarBadge image={"https://reactjs.org/logo-og.png"}/>);
    expect(textInput.toJSON()).toMatchSnapshot();
})
