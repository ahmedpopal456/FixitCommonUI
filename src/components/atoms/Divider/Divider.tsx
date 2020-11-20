import React from "react";
import { StyledView } from "./style"
import { Props } from "./props.model";

import colors from "../../../theme/colors";

/** 
 * Describe the Component 
 * @param props - The Divider's props
 * @returns A react native custom Divider component
 */
export const Divider: React.FC<Props> = (props): JSX.Element => {
  return (
    <StyledView>
    </StyledView>
  );
};
/** Setting the defaults for the props*/
Divider.defaultProps = {
  optional: "default",
};
    