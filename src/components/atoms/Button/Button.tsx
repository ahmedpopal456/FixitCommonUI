import React from "react";

import { ButtonContainer, IconWrapper } from './style';
import { Label } from '../Typography'
import { ButtonProps } from "./button-props.model";

import colors from '../../../theme/colors';

/** 
 * Custom Fixit Button component
 * 
 * @param props - the button props
 * @returns a react native custom button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return (
    <ButtonContainer
      {...props}
    >
      {renderChildren(props)}
    </ButtonContainer>
  );
};

/**
 * 
 * @param props - The button's props
 * @returns The items that will be displayed in the button. ie. Label and/or Icon
 */
const renderChildren = (props: ButtonProps): JSX.Element => {
  return (
    <>
      {React.Children.map(props.children, (child: any) => {
        const childIsString: boolean =
          typeof child === "string" || child instanceof String;
        if (childIsString) {
          return <Label 
            color={getTextColor(props)}
            padding={6}
            fontSize={17}
            fontWeight={400}
            $caps={props.$caps}
            justification="center"
          >{child}</Label>;
        } else {
          const icon = React.cloneElement(child);
          return <IconWrapper>{icon}</IconWrapper>;
        }
      })}
    </>
  );
};

/**
 * @param props - The button's props
 * @returns a color value that the text should display
 */
const getTextColor = (props: ButtonProps): keyof typeof colors => {
  const bgColor = props.color!;
  let color: keyof typeof colors = bgColor == "primary" ? "accent" : "primary";

  if (props.$outline) {
      color = bgColor;
  } else if (props.disabled) {
      color = "light";
  }
  return color;
};

Button.defaultProps = {
  children: "",
  color: "primary",
  position: "left",
  shape: "square"
};