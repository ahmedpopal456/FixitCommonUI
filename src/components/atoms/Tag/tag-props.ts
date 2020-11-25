import colors from "../../../theme/colors";
import { Tag } from "./Tag";

/** PROPS */
export interface TagProps {
    /** Children which will be contained in the tag (ie. string or tag) */
    children: string | typeof Tag;
    /** Can be any color from the theme color palette */
    textColor?: keyof typeof colors;
    /** Can be any color from the theme color palette */
    backgroundColor?: keyof typeof colors;
    /** When nesting tags, you may want to give negative margin to the child so that it overlaps the parent. This is set to 0px for parents and -3px for children by default */
    leftMarginCorrection?: string;
    /** When nesting tags, child tag wrappers must not have margins. By default, parents have 5px 10px 5px 0px margins and children have 0px margins  */
    margins?: string;
}