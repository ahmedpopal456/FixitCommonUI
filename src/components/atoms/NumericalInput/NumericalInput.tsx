import React from "react";
import { NumericalInputContainer } from "./style"
import { Props } from "./props.model";
import { TextInput } from 'react-native';

import colors from "../../../theme/colors";

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
      <TextInput
        style={{
          backgroundColor: "white",
          textAlign: "center",
          width: "30px",
          fontSize: 25,
          borderBottomWidth: 1,
          borderColor: colors[props.borderColor!]
        }}
        keyboardType="number-pad"
        maxLength={1} // only works on mobile devices!!
      />
    </NumericalInputContainer>
  );
};

/** Setting the defaults for the props*/
NumericalInput.defaultProps = {
  borderColor: "primary"
};
    