import React from "react";

import colors from "../../../theme/colors";

import { IconLibraries } from "./IconLibraries";
import { IconProps } from "./IconModel";

/** Building the Icon */
export const Icon: React.FC<IconProps> = (iconProps: IconProps): JSX.Element => {
  const VectorIcon = IconLibraries[iconProps.library!];
  const color: string = colors[iconProps.color!];

  const childProps = { ...iconProps };
  delete childProps.color;

  return <VectorIcon {...childProps} name={iconProps.name} color={color} />;
};

Icon.defaultProps = {
  library: "MaterialCommunityIcons",
  color: "primary",
  size: 24,
};

export default Icon;
