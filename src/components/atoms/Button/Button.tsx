import React from "react";

import { ButtonContainer, Label, IconWrapper } from './style';
import colors from '../../../theme/colors';

/** PROPS */
interface Props {
  /**  To override default style */
  style?: any;
  /** Can be any color from the theme color palette */
  color?: keyof typeof colors;
  /** Callback function to be called when pressed */
  onPress(): void;
  /** Boolean value for outline button */
  $outline?: boolean;
  /** Boolean value for disabled button */
  disabled?: boolean;
  /** If true, the button will stretch to the screen width */
  block?: boolean;
  /** To pass custom icon */
  icon?: any;
  /** Icon Position */
  position?: "left" | "right";
  /** Button width */
  width?: number;
  /** Children which will be contained in the button (ie. Icon or string) */
  children: any;
  /** Shape of the ends of the button */
  shape?: "circle" | "square";
  /** Used for testing */
  testID?: string;
}

/** Custom Fixit Button component */
export const Button: React.FC<Props> = (props: Props) => {
  return (
    <ButtonContainer
      {...props}
    >
      {renderChildren(props)}
    </ButtonContainer>
  );
};

const renderChildren = (props: Props) => {
  return (
    <>
      {React.Children.map(props.children, (child: any) => {
        const childIsString: boolean =
          typeof child === "string" || child instanceof String;
        if (childIsString) {
          return <Label 
            color={props.color}
            disabled={props.disabled}
            $outline={props.$outline}
          >{child}</Label>;
        } else {
          const icon = React.cloneElement(child);
          return <IconWrapper>{icon}</IconWrapper>;
        }
      })}
    </>
  );
};

Button.defaultProps = {
  children: "",
  color: "primary",
  position: "left",
  shape: "square"
};