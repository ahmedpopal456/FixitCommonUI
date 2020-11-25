import React from "react";

import colors from "../../../theme/colors";

import { IconLibraries } from "./IconLibraries";
import { IconProps } from "./icon-props.model";

/** Building the Icon */
export const Icon: React.FC<IconProps> = (props) => {
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
