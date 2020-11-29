import React from "react";
import { BadgeContainer } from "./style"
import { Props } from "./BadgeModel"
import { Label } from '../Typography'
import colors from "../../../theme/colors"

/**
 * Describe the Component
 * @param props - The Badge's props
 * @returns A react native custom Badge component
 */
export const Badge: React.FC<Props> = (props): JSX.Element => {
  return (
    <BadgeContainer {...props}>
        {renderChildren(props)}
    </BadgeContainer>
  );
};

const renderChildren = (props: Props) => {
  return (
    <>
      {React.Children.map(props.children, (child: any) => {
          return <Label justification="center" color={props.color} fontWeight={400} fontSize={20}>{child}</Label>;
      })}
    </>
  );
};

/** Setting the defaults for the props*/
Badge.defaultProps = {
  color:"accent",
  background:"primary",
  opacity:1
};
