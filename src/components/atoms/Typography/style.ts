import styled from "styled-components/native";
import colors from "../../../theme/colors";
import { TypographyProps } from './TypographyModel';

export const StyledText = styled.Text`
    font-family: "Raleway";
    flex: 1;
    flexDirection: row;
    font-size: ${(props: TypographyProps) => props.fontSize}px;
    padding: ${(props: TypographyProps) => props.padding}px;
    font-weight: ${(props: TypographyProps) => props.fontWeight}
    color: ${(props: TypographyProps) => colors[props.color!]};
    text-align: ${(props: TypographyProps) => props.justification};
    ${(props: TypographyProps) =>
        props.$caps &&`
            text-transform: uppercase;
        `}
`;

export const StyledContainer = styled.View`
    flex:1;
`;

