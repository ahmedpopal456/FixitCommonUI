import React from "react";
import { DividerContainer, DividerSegment, DividerText } from "./style"
import { DividerProps } from "./DividerModel";

import colors from "../../../theme/colors";

/**
 * Describe the Component
 * @param props - The Divider's props
 * @returns A react native custom Divider component
 */
export const Divider: React.FC<DividerProps> = (dividerProps:DividerProps): JSX.Element => {
  return (
    <DividerContainer>
        <DividerSegment
            small={dividerProps.small}
            faded={dividerProps.faded}
         />
         {renderChildren(dividerProps)}
        <DividerSegment
            small={dividerProps.small}
            faded={dividerProps.faded}
        />
    </DividerContainer>
  );
};


const renderChildren = (dividerProps: DividerProps) => {
  return (
    <>
      {React.Children.map(dividerProps.children, (child: String) => {
          if(child){
              return <DividerText>{child}</DividerText>;
          }
      })}
    </>
  );
};
