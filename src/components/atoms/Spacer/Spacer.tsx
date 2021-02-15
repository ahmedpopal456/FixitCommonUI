import React from 'react';

import { StyledSpacer } from './style';
import { SpacerProps } from './SpacerModel';

/** Custom Fixit Spacer component */
export const Spacer: React.FC<SpacerProps> = (spacerProps: SpacerProps): JSX.Element => (
  <StyledSpacer
    {...spacerProps}
  />
);

Spacer.defaultProps = {
  stretch: true,
};
