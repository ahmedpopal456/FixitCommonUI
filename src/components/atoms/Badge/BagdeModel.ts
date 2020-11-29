import colors from "../../../theme/colors";

  export interface BadgeProps {
      /** Can be any color from the theme color palette */
      color?: keyof typeof colors;
      /** Can be any color from the theme color palette */
      border?: keyof typeof colors;
      /** Can be any color from the theme color palette */
      background?: keyof typeof colors;
      /** Float between 0 and 1 */
      opacity?: number;
      /** Children which will be contained in the badge */
      children: string;
  }
