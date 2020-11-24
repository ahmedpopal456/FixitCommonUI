import styled from "styled-components/native";
import { Props } from './props.model';
import colors from "../../../theme/colors";


/** 
 * Styled Components
 * 
 * Here you can add css to react native components to create a styled version of it
 */
export const NumericalInputContainer = styled.View`
    align-self: center;
    justify-content: space-around;
    flex-direction: row;
    margin: 5px;
    padding: 7px;
    height: 50px;
    background-color: white;
    ${(props: Props) =>
        `
        border-color: ${colors[props.borderColor!]};
        border-width: 1px;
    `}
`;
