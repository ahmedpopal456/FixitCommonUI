import React from "react";

import { StyledSpacer } from './style';
import { SpacerProps } from './SpacerModel';

/** Custom Fixit Spacer component */
export const Spacer: React.FC<SpacerProps> = (props: SpacerProps) => {
  return (
    <StyledSpacer
      {...props}
    />
  );
};

Spacer.defaultProps = {
  stretch: true,
};
