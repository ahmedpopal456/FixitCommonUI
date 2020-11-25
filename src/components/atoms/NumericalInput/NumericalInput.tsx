import React from "react";
import { NumericalInputContainer, StyledNumInput } from "./style"
import { Props } from "./props.model";

/** 
 * Describe the Component 
 * @param props - The NumericalInput's props
 * @returns A react native custom NumericalInput component
 */
export const NumericalInput: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <NumericalInputContainer
      borderColor={props.borderColor}
    >
      <StyledNumInput
        keyboardType="number-pad"
        maxLength={1} // only works on mobile devices!!
        style={{fontSize: 25}}
      />
    </NumericalInputContainer>
  );
};

/** Setting the defaults for the props*/
NumericalInput.defaultProps = {
  borderColor: "primary"
};
    