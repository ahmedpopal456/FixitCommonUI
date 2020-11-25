import React from "react";
import { View } from "react-native";
import { TagWrapper, TagText } from "./style"
import { TagProps } from "./tag-props";

/** Building the Component */
export const Tag: React.FC<TagProps> = (props: TagProps) => {
  return (
    <TagWrapper
        margins={props.margins ? props.margins : "5px 10px 5px 0px"}
    >
        {renderChildren(props)}
    </TagWrapper>
  );
};

const renderChildren = (props: TagProps) => {
  return (
    <>
      {React.Children.map(props.children, (child: any) => {
        const childIsString: boolean =
          typeof child === "string" || child instanceof String;
        if (childIsString) {
          return <TagText
            color={props.textColor}
            backgroundcolor={props.backgroundColor}
            marginleft={props.leftMarginCorrection ? props.leftMarginCorrection : "0px"}
          >{child}</TagText>;
        } else {
          return React.cloneElement(child,
              {
                  margins: child.props.margins ? child.props.margins : "0px",
                  leftMarginCorrection: child.props.leftMarginCorrection ? child.props.leftMarginCorrection : "-3px",
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
