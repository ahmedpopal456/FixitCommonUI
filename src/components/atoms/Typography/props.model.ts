import colors from '../../../theme/colors';

export interface Props {
    /**  To override default style */
    style?: any;
    /** Can be any color from the theme color palette */
    color?: keyof typeof colors;
    /** Size of the text */
    fontSize?: number;
    /** Weight of the text */
    fontWeight?: number;
    /** Capitalizes the characters */
    $caps?: boolean;
    /** Padding value for the text */
    padding?: number;
    /** Justification */
    justification?: "left" | "center" | "right",
    /** Used for testing */
    testID?: string;
    children: any;
  }