import React from 'react';
import { BadgeContainer } from './style';
import { BadgeProps } from './BadgeModel';
import { Label } from '../Typography';

/**
 * Describe the Component
 * @param props - The Badge's props
 * @returns A react native custom Badge component
 */
export const Badge: React.FC<BadgeProps> = (badgeProps:BadgeProps): JSX.Element => {
  const {
    opacity, background, border, children,
  } = badgeProps;
  return (
    <BadgeContainer opacity={opacity} background={background} border={border}>
      <Label justification="center" color={badgeProps.color} fontWeight={400} fontSize={20}>{children}</Label>
    </BadgeContainer>
  );
};

/** Setting the defaults for the props */
Badge.defaultProps = {
  color: 'accent',
  background: 'primary',
  opacity: 1,
};
