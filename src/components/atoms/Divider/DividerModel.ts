import colors from "../../../theme/colors";

  export interface Props {
    /** True if the divider should not take the full width  */
    small?: boolean;
    /** True if the divider's opacity should be reduced  */
    faded?: boolean;
    /** Text to be displayed in the hr */
    children?: string;
  }
