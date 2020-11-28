import styled from "styled-components/native";
import colors from "../../../theme/colors";

import {StyleTagProps} from './TagModel';

export const TagWrapper = styled.View`
    ${(styleTagProps: StyleTagProps) =>
        `
        margin:${styleProps.margins};
      `}
    align-self: flex-start;
    flex-direction: row;
`;

 export const TagText = styled.Text`
     ${(styleTagProps: StyleTagProps) =>
         `
         color:${colors[styleProps.color!]};
         backgroundColor:${colors[styleProps.backgroundcolor!]};
         marginLeft:${styleProps.marginleft};
       `}
     padding:5px 8px;
     borderRadius:4px;
 `;
