import "react-native";
import React from "react";
import { NotificationBell } from "../src/components/molecules/NotificationBell";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  renderer.create(
    <NotificationBell notifications={0} onPress={() => {}}></NotificationBell>
  );
});

/** Testing user interaction */
it("fires onPress event when pressed", () => {
  const mockFn = jest.fn();

  const { getByTestId } = render(
    <NotificationBell
      notifications={0}
      onPress={mockFn}
      testID="notificationsBellTestId"
    ></NotificationBell>
  );
  const notificationBell = getByTestId("notificationsBellTestId");

  fireEvent.press(notificationBell);

  expect(mockFn).toHaveBeenCalled();
});

it("matches no notifications snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <NotificationBell notifications={0} onPress={mockFn}></NotificationBell>
  );

  expect(button.toJSON()).toMatchSnapshot();
});

it("matches notifications snapshot", () => {
  const mockFn = jest.fn();
  const button = renderer.create(
    <NotificationBell notifications={8} onPress={mockFn}></NotificationBell>
  );

  expect(button.toJSON()).toMatchSnapshot();
});
