import React from 'react';

import { ButtonContainer, IconWrapper } from './style';
import { Label } from '../Typography';
import { ButtonProps } from './ButtonModel';

import colors from '../../../theme/colors';

/**
 * @param buttonProps - The button's props
 * @returns a color value that the text should display
 */
const getTextColor = (buttonProps: ButtonProps): keyof typeof colors => {
  const bgColor = buttonProps.color!;
  let color: keyof typeof colors = bgColor === 'primary' ? 'accent' : 'primary';

  if (buttonProps.outline) {
    color = bgColor;
  } else if (buttonProps.disabled) {
    color = 'light';
  }
  return color;
};

/**
 *
 * @param buttonProps - The button's props
 * @returns The items that will be displayed in the button. ie. Label and/or Icon
 */
const renderChildren = (buttonProps: ButtonProps): JSX.Element => (
  <>
    {React.Children.map(buttonProps.children, (child) => {
      const childIsString: boolean = typeof child === 'string' || child instanceof String;
      if (childIsString) {
        return <Label
          color={getTextColor(buttonProps)}
          padding={6}
          fontSize={17}
          fontWeight={400}
          caps={buttonProps.caps}
          justification="center"
        >{child as string}</Label>;
      }
      if (React.isValidElement(child)) {
        const icon = React.cloneElement(child);
        return <IconWrapper>{icon}</IconWrapper>;
      }
      return <></>;
    })}
  </>
);

/**
 * Custom Fixit Button component
 *
 * @param buttonProps - the button props
 * @returns a react native custom button component
 */
export const Button: React.FC<ButtonProps> = (buttonProps: ButtonProps): JSX.Element => (
  <ButtonContainer
    {...buttonProps}
  >
    {renderChildren(buttonProps)}
  </ButtonContainer>
);

Button.defaultProps = {
  children: '',
  color: 'primary',
  position: 'left',
  shape: 'square',
  padding: 7,
};
