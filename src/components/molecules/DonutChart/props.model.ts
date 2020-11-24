import colors from "../../../theme/colors";
  
  export interface Props {
    /** Can be any color from the theme color palette */
    color?: keyof typeof colors;
    textColor?: keyof typeof colors;
    radius?: number;
    strokeWidth?: number;
    max?: number;
    value: number;
    testID?: string;
  }