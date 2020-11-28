import React, { useState } from "react";
import { NumericalInputContainer, StyledNumInput } from "./style"
import { NumericalProps } from "./NumericalProps.model";

/** 
 * Describe the Component 
 * @param props - The NumericalInput's props
 * @returns A react native custom NumericalInput component
 */

export const NumericalInput: React.FC<NumericalProps> = (props: NumericalProps): JSX.Element => {
  var arr = new Array(props.numbers);
  for (let i = 0; i < arr.length; i++)
    arr[i] = "NumInputKey_" + i;

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {arr.map(function(index) {
        return <NumericalInputContainer
          key={index}
          borderColor={props.borderColor}
          numbers={props.numbers}
        >
          <StyledNumInput
            {...props}
            keyboardType="number-pad"
            maxLength={1} // only works on mobile devices!!
            style={{fontSize: 25}}
          />
        </NumericalInputContainer>;
      })}
    </div>
    
    // <NumericalInputContainer
    //   borderColor={props.borderColor}
    //   numbers={props.numbers}
    // >
    //   <StyledNumInput
    //     {...props}
    //     keyboardType="number-pad"
    //     maxLength={1} // only works on mobile devices!!
    //     style={{fontSize: 25}}
    //   />
    // </NumericalInputContainer>
  );
};

/** Setting the defaults for the props*/
NumericalInput.defaultProps = {
  numbers: 4,
  borderColor: "primary"
};
    