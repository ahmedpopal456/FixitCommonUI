import { Platform } from 'react-native';
import styled from "styled-components/native";

/** PROPS */
interface Props {
    stretch?: boolean;
    width?: string;
    height?: string;
}

/** Styled Components */
export const StyledSpacer = styled.View`
    ${(props: Props) =>
        props.stretch &&
        `
        flex:1;
     `}
     ${(props: Props) =>
        props.width &&
        `
        flexBasis:unset;
        flexGrow:0;
        width:${props.width};
     `}
     
     ${(props: Props) =>
        props.height &&
        `
        height:${props.height};
     `}
`;
