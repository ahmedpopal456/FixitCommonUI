import React from 'react';
import { TagWrapper, TagText } from './style';
import { TagProps } from './TagModel';

const renderChildren = (tagProps:TagProps): JSX.Element => (
  <>
    {React.Children.map(tagProps.children, (child) => {
      const childIsString: boolean = typeof child === 'string' || child instanceof String;
      if (childIsString) {
        return <TagText
          color={tagProps.textColor}
          backgroundcolor={tagProps.backgroundColor}
          marginleft={tagProps.leftMarginCorrection ? tagProps.leftMarginCorrection : '0px'}
        >{child}</TagText>;
      }
      if (React.isValidElement(child)) {
        return React.cloneElement(child,
          {
            margins: child.props.margins ? child.props.margins : '0px',
            leftMarginCorrection: child.props.leftMarginCorrection ? child.props.leftMarginCorrection : '-3px',
          });
      }
      return <></>;
    })}
  </>
);

/** Building the Component */
export const Tag: React.FC<TagProps> = (tagProps: TagProps): JSX.Element => (
  <TagWrapper
    margins={tagProps.margins ? tagProps.margins : '5px 10px 5px 0px'}
  >
    {renderChildren(tagProps)}
  </TagWrapper>
);

/** Setting the defaults for the props */
Tag.defaultProps = {
  textColor: 'white',
  backgroundColor: 'primary',
};
