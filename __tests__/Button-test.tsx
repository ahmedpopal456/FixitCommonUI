import "react-native";
import React from "react";
import { Button } from "../src/components/atoms/Button";
import { Icon } from "../src/components/atoms/Icon";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react-native';


/** Testing user interaction */
it("fires onPress event when pressed", () => {
  const mockFn = jest.fn();

  const { getByTestId } = render(
    <Button onPress={mockFn} testID="buttonTestID">
      Button
    </Button>
  );
  const button = getByTestId('buttonTestID');
  
  fireEvent.press(button);

  expect(mockFn).toHaveBeenCalled();
});

it("does not fires onPress event when disabled", () => {
  const mockFn = jest.fn();

  const { getByTestId } = render(
    <Button onPress={mockFn} testID="disabledTestID" disabled>
      Button
    </Button>
  );
  const disabledButton = getByTestId('disabledTestID');
  
  fireEvent.press(disabledButton);

  expect(mockFn).toBeCalledTimes(0);
});

/** Testing Rendered Output (snapshot testing) */
it("matches default snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(<Button onPress={mockFn}>Button</Button>);
  
  expect(button.toJSON()).toMatchSnapshot();
});

it("matches $outline snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} $outline>
      Button
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches disabled snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} disabled>
      Button
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches color snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} color="accent">
      Button
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches width snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} width={30}>
      Button
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches shape snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} shape="circle">
      Button
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches icon snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <Button onPress={mockFn} color="transparent">
      <Icon library="AntDesign" name="heart" color="red"/>
    </Button>
  );

  expect(button.toJSON()).toMatchSnapshot();
});
