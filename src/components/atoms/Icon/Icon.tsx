import React from "react";

import colors from "../../../theme/colors";

import { IconLibraries } from "./IconLibraries";

/** PROPS */
interface Props {
  style?: object;
  /** Any color from the theme's color palette */
  color?: keyof typeof colors;
  /** Size of the icon */
  size?: number;
  /**  The library which the icon is from */
  library?: keyof typeof IconLibraries;
  /**  The name of the icon */
  name: string;
}

/** Building the Icon */
export const Icon: React.FC<Props> = (props) => {
  const VectorIcon = IconLibraries[props.library!];
  const color: string = colors[props.color!];

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
