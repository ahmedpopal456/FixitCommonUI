import styled from "styled-components/native";
import colors from "../../../theme/colors";
import { Props } from './props.model';

export const StyledText = styled.Text`
    font-family: "Raleway";
    flex: 1;
    flexDirection: row;
    font-size: ${(props: Props) => props.fontSize}px;
    padding: ${(props: Props) => props.padding}px;
    font-weight: ${(props: Props) => props.fontWeight}
    color: ${(props: Props) => colors[props.color!]};
    text-align: ${(props: Props) => props.justification};
    ${(props: Props) =>
        props.$caps &&`
            text-transform: uppercase;
        `}
`;

export const StyledContainer = styled.View`
    flex:1;
`;

