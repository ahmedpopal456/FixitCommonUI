import React from "react";
import { DividerContainer, DividerSegment, DividerText } from "./style"
import { Props } from "./props.model";

import colors from "../../../theme/colors";

/**
 * Describe the Component
 * @param props - The Divider's props
 * @returns A react native custom Divider component
 */
export const Divider: React.FC<Props> = (props): JSX.Element => {
  return (
    <DividerContainer>
        <DividerSegment
            small={props.small}
            faded={props.faded}
         />
         {renderChildren(props)}
        <DividerSegment
            small={props.small}
            faded={props.faded}
        />
    </DividerContainer>
  );
};


const renderChildren = (props: Props) => {
  return (
    <>
      {React.Children.map(props.children, (child: any) => {
          if(child){
              return <DividerText>{child}</DividerText>;
          }
      })}
    </>
  );
};

/** Setting the defaults for the props*/
Divider.defaultProps = {
  optional: "default",
};
