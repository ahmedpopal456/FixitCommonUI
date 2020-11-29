import colors from "../../../theme/colors";

  export interface BadgeProps {
      /** Text color of the badge */
      color?: keyof typeof colors;
      /** Border color of the badge */
      border?: keyof typeof colors;
      /** Background color of the badge */
      background?: keyof typeof colors;
      /** Float between 0 and 1 */
      opacity?: number;
      /** Child elements which will be contained in the badge */
      children: string;
  }
