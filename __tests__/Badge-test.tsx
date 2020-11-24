import "react-native";
  import React from "react";
  import { Badge } from "../src/components/atoms/Badge";
  
  // Note: test renderer must be required after react-native.
  import renderer from "react-test-renderer";
  import { render, fireEvent } from '@testing-library/react-native';
  
  it('renders correctly', () => {
      renderer.create(<Badge required></Badge>);
  });
  