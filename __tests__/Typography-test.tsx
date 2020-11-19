import "react-native";
  import React from "react";
  import { Label, H1, H2 } from "../src/components/atoms/Typography";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('renders correctly', () => {
      renderer.create(<Label>Test</Label>);
  });
  