import React from "react";
import { TagWrapper, TagText } from "./style"
import { TagProps } from "./TagModel";

/** Building the Component */
export const Tag: React.FC<TagProps> = (tagProps: TagProps): JSX.Element => {
  return (
    <TagWrapper
        margins={tagProps.margins ? tagProps.margins : "5px 10px 5px 0px"}
    >
        {renderChildren(tagProps)}
    </TagWrapper>
  );
};

const renderChildren = (tagProps: TagProps): JSX.Element => {
  return (
    <>
      {React.Children.map(tagProps.children, (child: any) => {
        const childIsString: boolean =
          typeof child === "string" || child instanceof String;
        if (childIsString) {
          return <TagText
            color={tagProps.textColor}
            backgroundcolor={tagProps.backgroundColor}
            marginleft={tagProps.leftMarginCorrection ? tagProps.leftMarginCorrection : "0px"}
          >{child}</TagText>;
        } else {
          return React.cloneElement(child,
              {
                  margins: child.tagProps.margins ? child.tagProps.margins : "0px",
                  leftMarginCorrection: child.tagProps.leftMarginCorrection ? child.tagProps.leftMarginCorrection : "-3px",
              });
        }
      })}
    </>
  );
};

/** Setting the defaults for the props*/
Tag.defaultProps = {
  textColor: "white",
  backgroundColor:"primary",
};
