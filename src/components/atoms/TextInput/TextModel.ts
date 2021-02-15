import { TextStyle } from 'react-native';
import colors from '../../../theme/colors';

/** PROPS */
export interface TextProps {
    /** Height of the Text box */
    height?:number;
    /** Width of the Text box */
    width?:number;
    /** To override default style */
    style?: TextStyle & React.CSSProperties;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border width of the Text box */
    borderWidth?: number;
    /** Color of the border */
    borderColor?: ValueOf<typeof colors>;
    /** Border radius of the Text box (square or round) */
    borderRadius?: number;
    /** The title of the Text box */
    title?:string;
    /** To pass custom icon */
    icon?:string;
    /** Placeholder for the Text box */
    placeholder?:string;
  }
