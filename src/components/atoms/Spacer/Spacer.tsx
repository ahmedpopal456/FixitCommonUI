import React from "react";

import { StyledSpacer } from './style';

/** PROPS */
interface Props {
  /** Boolean value for horizontal spacer. If true, it will take all the space available */
  stretch?: boolean;
  /** Width value for horizontal spacer */
  width?: string;
  /** Height value for vertical spacer */
  height?: string;
}

/** Custom Fixit Spacer component */
export const Spacer: React.FC<Props> = (props: Props) => {
  return (
    <StyledSpacer
      {...props}
    />
  );
};

Spacer.defaultProps = {
  stretch: true,
};
