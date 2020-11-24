import React from "react";
import { StyledView } from "./style"
import { Props } from "./props.model";

import colors from "../../../theme/colors";

/** 
 * Describe the Component 
 * @param props - The Badge's props
 * @returns A react native custom Badge component
 */
export const Badge: React.FC<Props> = (props): JSX.Element => {
  return (
    <StyledView>
    </StyledView>
  );
};
/** Setting the defaults for the props*/
Badge.defaultProps = {
  optional: "default",
};
    