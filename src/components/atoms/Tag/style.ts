import styled from "styled-components/native";
import colors from "../../../theme/colors";
/** PROPS */
interface StyleProps {
    backgroundcolor?: keyof typeof colors;
    color?: keyof typeof colors;
    marginleft?: string;
    margins?: string;
}
/**
 * Styled Components
 *
 * Here you can add css to react native components to create a styled version of it
 */
export const TagWrapper = styled.View`
    ${(props: StyleProps) =>
        `
        margin:${props.margins};
      `}
    align-self: flex-start;
    flex-direction: row;
`;

 export const TagText = styled.Text`
     ${(props: StyleProps) =>
         `
         color:${colors[props.color!]};
         backgroundColor:${colors[props.backgroundcolor!]};
         marginLeft:${props.marginleft};
       `}
     padding:5px 8px;
     borderRadius:4px;
 `;
