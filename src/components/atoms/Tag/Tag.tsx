import React from "react";
import { View } from "react-native";
import { TagWrapper, TagText } from "./style"
import colors from "../../../theme/colors";
/** PROPS */
interface Props {
    /** Children which will be contained in the tag (ie. string or tag) */
    children: string | Tag;
    /** Can be any color from the theme color palette */
    textColor?: keyof typeof colors;
    /** Can be any color from the theme color palette */
    backgroundColor?: keyof typeof colors;
    /** When nesting tags, you may want to give negative margin to the child so that it overlaps the parent. This is set to 0px for parents and -3px for children by default */
    leftMarginCorrection?: string;
    /** When nesting tags, child tag wrappers must not have margins. By default, parents have 5px 10px 5px 0px margins and children have 0px margins  */
    margins?: string;
}
/** Building the Component */
export const Tag: React.FC<Props> = (props) => {
  return (
    <TagWrapper
        margins={props.margins ? props.margins : "5px 10px 5px 0px"}
    >
        {renderChildren(props)}
    </TagWrapper>
  );
};

const renderChildren = (props: Props) => {
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
