import "react-native";
  import React from "react";
  import { NumericalInput } from "../src/components/atoms/NumericalInput";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('renders correctly', () => {
      renderer.create(<NumericalInput />);
  });
  