import styled from "styled-components/native";
import { BadgeProps } from './BadgeModel';
import colors from "../../../theme/colors";


/**
 * Styled Components
 *
 * Here you can add css to react native components to create a styled version of it
 */
export const BadgeContainer = styled.View`
    minWidth:40px;
    height:40px;
    border-radius:20px;
    border:2px solid;
    margin: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 5px;
     ${(badgeProps: BadgeProps) =>
      badgeProps.background &&`
          backgroundColor: ${colors[badgeProps.background]};
          borderColor:${colors[badgeProps.background]};
      `}
     ${(badgeProps: BadgeProps) =>
      badgeProps.border &&`
          borderColor: ${colors[badgeProps.border]};
      `}
     ${(badgeProps: BadgeProps) =>
      badgeProps.opacity &&`
          backgroundColor: ${hex2rgba(colors[badgeProps.background],badgeProps.opacity)};
      `}
`;

/**
 * Styled Components
 *
 * Here you can add css to react native components to create a styled version of it
 */

//input needs ot be 6 char hex (not shortcut 3 char hex)
const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
