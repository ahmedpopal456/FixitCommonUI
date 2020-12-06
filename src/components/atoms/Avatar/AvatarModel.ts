import colors from '../../../theme/colors';

/** PROPS */
export interface AvatarProps {
    style?: object;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors
    /** The name of the icon*/
    icon?:any;
    /** Title of the avatar*/
    title?:string;
    /** Height of avatar */
    height?:number;
    /** Width of avatar */
    width?:number;
    /** Image of the avatar*/
    image?:any;
  }