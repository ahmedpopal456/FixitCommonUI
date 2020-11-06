import "react-native";
import React from "react";
import { Button } from "../src/components/atoms/Button";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders default", () => {
  renderer.create(<Button onPress={() => void 0}>Button</Button>);
});

it("renders outline", () => {
  renderer.create(
    <Button onPress={() => void 0} outline>
      Button
    </Button>
  );
});

it("renders disabled", () => {
  renderer.create(
    <Button onPress={() => void 0} disabled>
      Button
    </Button>
  );
});

it("renders color", () => {
  renderer.create(
    <Button onPress={() => void 0} color="accent">
      Button
    </Button>
  );
});

it("renders width", () => {
  renderer.create(
    <Button onPress={() => void 0} width={30}>
      Button
    </Button>
  );
});

it("renders shape", () => {
  renderer.create(
    <Button onPress={() => void 0} shape="circle">
      Button
    </Button>
  );
});
it("matches snapshot", () => {
  const button = renderer
    .create(<Button onPress={() => void 0}>Button</Button>)
    .toJSON();
  expect(button).toMatchSnapshot();
});
