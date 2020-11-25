import styled from "styled-components/native";
import { SpacerProps } from "./SpacerModel";

/** Styled Components */
export const StyledSpacer = styled.View`
    ${(props: SpacerProps) =>
        props.stretch &&
        `
        flex:1;
     `}
     ${(props: SpacerProps) =>
        props.width &&
        `
        flexBasis:unset;
        flexGrow:0;
        width:${props.width};
     `}
     
     ${(props: SpacerProps) =>
        props.height &&
        `
        height:${props.height};
     `}
`;
