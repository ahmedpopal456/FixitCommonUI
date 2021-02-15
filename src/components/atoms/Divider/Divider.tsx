import React from 'react';
import { DividerContainer, DividerSegment, DividerText } from './style';
import { DividerProps } from './DividerModel';

const renderChildren = (dividerProps: DividerProps) => (
  <>
    {React.Children.map(dividerProps.children!, (child: string) => {
      if (child) {
        return <DividerText>{child}</DividerText>;
      }
      return <></>;
    })}
  </>
);

/**
 * Describe the Component
 * @param props - The Divider's props
 * @returns A react native custom Divider component
 */
export const Divider: React.FC<DividerProps> = (dividerProps:DividerProps): JSX.Element => (
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
