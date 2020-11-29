import styled from "styled-components/native";
import { Props } from './DividerModel';
import colors from "../../../theme/colors";


/**
 * Styled Components
 *
 * Here you can add css to react native components to create a styled version of it
 */
export const DividerContainer = styled.View`
    flexDirection: row;
    flexWrap:nowrap;
    alignItems:center;
    justifyContent:center;
    width:100%;
    margin:20px 0px;
`;

export const DividerSegment = styled.View`
    opacity:1;
    flexGrow:1;
    height:1px;
    ${(props: Props) =>
       `
       backgroundColor:${colors['dark']};
    `}
    ${(props: Props) =>
       props.small &&
       `
       flexGrow:0;
       flexBasis:15%;
    `}
    ${(props: Props) =>
       props.faded &&
       `
       opacity:0.3;
    `}
`;

export const DividerText = styled.Text`
    flexGrow:0;
    flexBasis:'auto';
    font-family: "Raleway";
    fontSize: 13px;
    fontWeight: 400;
    margin:0px 5px;
    ${(props: Props) =>
       `
       color:${colors['dark']};
    `}
`;
