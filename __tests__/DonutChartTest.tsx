import "react-native";
import React from "react";
import { DonutChart } from "../src/components/molecules/DonutChart";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { render } from '@testing-library/react-native';

it("percentage > 100 = 100", () => {
  const {getByText} = render(<DonutChart value={250} max={100} />);
  const percentageDisplayed = getByText("100%");
  expect(percentageDisplayed).toBeTruthy();
});

/** Testing Rendered Output (snapshot testing) */
it("matches default snapshot", () => {
  const donutChart = renderer.create(<DonutChart value={10} />);  
  expect(donutChart.toJSON()).toMatchSnapshot();
});

it("matches color snapshot", () => {
  const donutChart = renderer.create(
    <DonutChart 
      value={10}
      color="accent"
    />);
  
  expect(donutChart.toJSON()).toMatchSnapshot();
});

it("matches textColor snapshot", () => {
  const donutChart = renderer.create(
    <DonutChart 
      value={10}
      textColor="red"
    />);
  
  expect(donutChart.toJSON()).toMatchSnapshot();
});

it("matches radius snapshot", () => {
  const donutChart = renderer.create(
    <DonutChart 
      value={10}
      radius={100}
    />);
  
  expect(donutChart.toJSON()).toMatchSnapshot();
});

it("matches strokeWidth snapshot", () => {
  const donutChart = renderer.create(
    <DonutChart 
      value={10}
      strokeWidth={10}
    />);
  
  expect(donutChart.toJSON()).toMatchSnapshot();
});

it("matches max snapshot", () => {
  const donutChart = renderer.create(
    <DonutChart 
      value={10}
      max={2000}
    />);
  
  expect(donutChart.toJSON()).toMatchSnapshot();
});