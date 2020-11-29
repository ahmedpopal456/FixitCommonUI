import styled from "styled-components/native";
import { SpacerProps } from "./SpacerModel";

/** Styled Components */
export const StyledSpacer = styled.View`
    ${(spacerProps: SpacerProps) =>
        spacerProps.stretch &&
        `
        flex:1;
     `}
     ${(spacerProps: SpacerProps) =>
        spacerProps.width &&
        `
        flexBasis:unset;
        flexGrow:0;
        width:${spacerProps.width};
     `}
     
     ${(spacerProps: SpacerProps) =>
        spacerProps.height &&
        `
        height:${spacerProps.height};
     `}
`;
