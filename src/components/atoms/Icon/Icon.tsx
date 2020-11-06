import React from "react";

import colors from "../../../theme/colors";

import { IconLibraries } from "./IconLibraries";

/** PROPS */
interface Props {
  style?: object;
  /** primary or accent */
  color?: keyof typeof colors;
  size?: number;
  /**  The library which the icon is from */
  library?: keyof typeof IconLibraries;
  /**  The name of the icon */
  name: string;
}

/** Building the Icon */
export const Icon: React.FC<Props> = (props) => {
  const VectorIcon = props.library
    ? IconLibraries[props.library]
    : IconLibraries.MaterialCommunityIcons;
  const color: string = props.color ? colors[props.color] : colors.primary;

  const childProps = { ...props };
  delete childProps.color;

  return <VectorIcon {...childProps} name={props.name} color={color} />;
};

Icon.defaultProps = {
  library: "MaterialCommunityIcons",
  color: "primary",
  size: 24,
};

export default Icon;
