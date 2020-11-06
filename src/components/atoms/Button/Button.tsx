import React from "react";
import styled from "styled-components/native";

import colors from "../../../theme/colors";

/** PROPS */
interface Props {
  /**  To override default style */
  style?: any;
  /** primary or accent */
  color?: keyof typeof colors;
  /**  callback function to be called when pressed */
  onPress(): void;
  /**  Boolean value for outline button */
  outline?: boolean;
  /**  Boolean value for disabled button */
  disabled?: boolean;
  /** if true, the button will stretch to the screen width */
  block?: boolean;
  /**  To pass custom icon */
  icon?: any;
  /** Icon Position */
  position?: "left" | "right";
  /** Button width */
  width?: number;
  /** Children which will be contained in the button (ie. Icon or string) */
  children: any;
  shape?: "circle" | "square";
}

/** Building the Button */
export const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer disabled={props.disabled} {...props} style={{verticalAlign: "top"}}>
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
          return <Label {...props}>{child}</Label>;
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
  outline: false,
  disabled: false,
  position: "left",
  shape: "square"
};

/** Helpers */
const getContainerColor = (props: Props) => {
  let color = props.color ? colors[props.color] : colors.primary;

  if (props.outline) {
    color = colors.transparent;
  } else if (props.disabled) {
    color = colors.grey;
  }

  return color;
};

const getTextColor = (props: Props): string => {
  const bgColor = props.color ? props.color : "primary";
  let color = bgColor == "primary" ? colors["accent"] : colors["primary"];

  if (props.outline) {
    color = colors[bgColor];
  } else if (props.disabled) {
    color = colors.light;
  }

  return color;
};

/** Styled Components */
const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: Props) => getContainerColor(props)};
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  ${(props: Props) =>
    props.color != "transparent" &&
    `
      border-color: ${
        props.disabled ? colors["grey"] : props.color ? colors[props.color] : colors.primary};
      }
      border-width: 1px;
      border-radius: ${props.shape === "square" ? '3px': '100px'};
    `}
  ${(props: Props) =>
    props.width &&
    `
      width: ${props.width}px;
    `}
  ${(props: Props) =>
    props.block &&
    `
      flex: 1;
    `}
`;

const Label = styled.Text`
  color: ${(props: Props) => getTextColor(props)};
  font-size: 17px;
  font-weight: 500;
  height: 100%;
  padding: 8px;
`;

const Spacer = styled.View`
  width: 10px;
`;

const IconWrapper = styled.View`
    padding: 8px;
`;
