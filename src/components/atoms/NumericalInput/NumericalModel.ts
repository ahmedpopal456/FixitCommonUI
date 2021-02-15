import colors from '../../../theme/colors';

export interface NumericalProps {
    /** Can be any color from the theme color palette */
    color?: keyof typeof colors;
    /** Can be any color from the theme color palette */
    borderColor?: keyof typeof colors;
    /** Specify the number of Numerical Inputs to be created in a row */
    numbers: number;
  }
