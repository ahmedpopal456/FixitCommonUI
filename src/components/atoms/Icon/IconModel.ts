import { TextStyle } from 'react-native';
import colors from '../../../theme/colors';

import { IconLibraries } from './IconLibraries';

export interface IconProps {
  style?: TextStyle & React.CSSProperties;
  /** Any color from the theme's color palette */
  color?: keyof typeof colors;
  /** Size of the icon */
  size?: number;
  /**  The library which the icon is from */
  library?: keyof typeof IconLibraries;
  /**  The name of the icon */
  name: string;
}
