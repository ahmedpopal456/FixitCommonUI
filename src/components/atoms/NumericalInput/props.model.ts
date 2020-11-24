import colors from "../../../theme/colors";
  
  export interface Props {
    /** Can be any color from the theme color palette */
    color?: keyof typeof colors;
    /** Can be any color from the theme color palette */
    borderColor?: keyof typeof colors;
  }