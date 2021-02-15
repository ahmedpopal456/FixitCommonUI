import colors from '../../../theme/colors';

export interface BadgeContainerProps{
  background?: keyof typeof colors;
  border?: keyof typeof colors;
  opacity?: number;
}

export interface BadgeProps extends BadgeContainerProps{
  color?: keyof typeof colors;
  children: string;
}
