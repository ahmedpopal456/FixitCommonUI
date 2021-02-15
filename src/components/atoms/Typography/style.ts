import styled from 'styled-components/native';
import colors from '../../../theme/colors';
import { TypographyProps } from './TypographyModel';

export const StyledText = styled.Text`
    font-family: "Raleway";
    flexDirection: row;
    font-size: ${(typographyProps: TypographyProps) => typographyProps.fontSize}px;
    padding: ${(typographyProps: TypographyProps) => typographyProps.padding}px;
    font-weight: ${(typographyProps: TypographyProps) => typographyProps.fontWeight}
    color: ${(typographyProps: TypographyProps) => colors[typographyProps.color!]};
    text-align: ${(typographyProps: TypographyProps) => typographyProps.justification};
    ${(typographyProps: TypographyProps) => typographyProps.caps && `
            text-transform: uppercase;
        `}
`;

export const StyledContainer = styled.View`
    flex:1;
`;
