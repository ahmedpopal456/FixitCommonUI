import "react-native";
  import React from "react";
  import { NumericalInput } from "../src/components/atoms/NumericalInput";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('matches default snapshot', () => {
      const numinput = renderer.create(<NumericalInput numbers={1}/>);
      expect(numinput.toJSON()).toMatchSnapshot();
  });

  it('matches border color snapshot', () => {
    const numinput = renderer.create(<NumericalInput numbers={1} borderColor="accent"/>);
    expect(numinput.toJSON()).toMatchSnapshot();
  });

  it('matches the number of inputs snapshot', () => {
    const numinput = renderer.create(<NumericalInput numbers={4}/>);
    expect(numinput.toJSON()).toMatchSnapshot();
  });
  