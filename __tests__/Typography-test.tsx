import "react-native";
import React from "react";
import { Label, H1, H2, H3, H4, H5, P } from "../src/components/atoms/Typography";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { render } from '@testing-library/react-native';


it("matches H1 snapshot", () => {
  const header = renderer.create(<H1>Button</H1>);

  expect(header.toJSON()).toMatchSnapshot();
});

it("matches H2 snapshot", () => {
  const header = renderer.create(<H2>Button</H2>);

  expect(header.toJSON()).toMatchSnapshot();
});

it("matches H3 snapshot", () => {
  const header = renderer.create(<H3>Button</H3>);

  expect(header.toJSON()).toMatchSnapshot();
});

it("matches H4 snapshot", () => {
  const header = renderer.create(<H4>Button</H4>);

  expect(header.toJSON()).toMatchSnapshot();
});

it("matches H5 snapshot", () => {
  const header = renderer.create(<H5>Button</H5>);

  expect(header.toJSON()).toMatchSnapshot();
});

it("matches Label snapshot", () => {
  const label = renderer.create(<Label>Button</Label>);

  expect(label.toJSON()).toMatchSnapshot();
});

it("matches P snapshot", () => {
  const paragraph = renderer.create(<P>Button</P>);

  expect(paragraph.toJSON()).toMatchSnapshot();
});

it("matches $caps snapshot", () => {
  const paragraph = renderer.create(<P $caps>Button</P>);
  expect(paragraph.toJSON()).toMatchSnapshot();
});