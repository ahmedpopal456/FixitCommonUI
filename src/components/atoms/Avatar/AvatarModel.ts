import { TextStyle } from 'react-native';
import colors from '../../../theme/colors';

export interface AvatarProps {
    style?: TextStyle & React.CSSProperties;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors
    /** The name of the icon */
    icon?:string;
    /** Title of the avatar */
    title?:string;
    /** Height of avatar */
    height?:number;
    /** Width of avatar */
    width?:number;
    /** Image of the avatar */
    image?:string;
  }
