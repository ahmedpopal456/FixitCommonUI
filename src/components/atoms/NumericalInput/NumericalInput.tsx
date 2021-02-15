import React from 'react';
import { NumericalInputContainer, StyledNumInput } from './style';
import { NumericalProps } from './NumericalModel';

/**
 * Describe the Component
 * @param numericalProps - The NumericalInput's props
 * @returns A react native custom NumericalInput component
 */

export const NumericalInput: React.FC<NumericalProps> = (numericalProps: NumericalProps):
JSX.Element => {
  const arr = new Array(numericalProps.numbers);
  for (let i = 0; i < arr.length; i += 1) { arr[i] = `NumInputKey_${i}`; }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {arr.map((index) => <NumericalInputContainer
        key={index}
        borderColor={numericalProps.borderColor}
        numbers={numericalProps.numbers}
      >
        <StyledNumInput
          {...numericalProps}
          keyboardType="number-pad"
          maxLength={1} // only works on mobile devices!!
          style={{ fontSize: 25 }}
        />
      </NumericalInputContainer>)}
    </div>
  );
};

/** Setting the defaults for the props */
NumericalInput.defaultProps = {
  numbers: 4,
  borderColor: 'primary',
};
