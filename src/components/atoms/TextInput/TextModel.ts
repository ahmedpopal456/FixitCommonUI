import colors from "../../../theme/colors";

/** PROPS */
export interface TextProps {
    /** Height of the Text box */
    height?:number;
    /** To override default style */
    style?: any;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border width of the Text box */
    borderWidth?: number;
    /** Color of the border */
    borderColor?: any;
    /** Border radius of the Text box (square or round)*/
    borderRadius?: number;
    /** The title of the Text box */
    title?:string;
    /** To pass custom icon */
    icon?:any;
    /** Placeholder for the Text box */
    placeholder?:string;
  }