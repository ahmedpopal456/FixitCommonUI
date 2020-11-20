import "react-native";
  import React from "react";
  import { Divider } from "../src/components/atoms/Divider";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('renders correctly', () => {
      renderer.create(<Divider required></Divider>);
  });
  