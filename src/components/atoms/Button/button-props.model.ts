import { Icon } from '../Icon/Icon';
import colors from '../../../theme/colors';

export interface ButtonProps {
    /**  To override default style */
    style?: object;
    /** Can be any color from the theme color palette */
    color?: keyof typeof colors;
    /** Callback function to be called when pressed */
    onPress(): void;
    /** Boolean value for outline button */
    $outline?: boolean;
    /** Boolean value for disabled button */
    disabled?: boolean;
    /** If true, the button will stretch to the screen width */
    block?: boolean;
    /** To pass custom icon */
    icon?: typeof Icon;
    /** Icon Position */
    position?: "left" | "right";
    /** Button width */
    width?: number;
    /** Children which will be contained in the button (ie. Icon or string) */
    children: any;
    /** Shape of the ends of the button */
    shape?: "circle" | "square";
    /** Capitalizes the characters */
    $caps?: boolean;
    /** Used for testing */
    testID?: string;
  }