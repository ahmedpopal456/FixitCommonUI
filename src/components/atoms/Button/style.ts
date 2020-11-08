import { Platform } from 'react-native';
import styled from "styled-components/native";

import colors from '../../../theme/colors';

/** PROPS */
interface Props {
    color?: keyof typeof colors;
    $outline?: boolean;
    disabled?: boolean;
    block?: boolean;
    width?: number;
    shape?: "circle" | "square";
}

/** Styled Components */
export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: Props) => getContainerColor(props)};
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 7px;
  ${(props: Props) =>
        props.color != "transparent" &&
        `
      border-color: ${props.disabled ? colors.grey : props.color ? colors[props.color] : colors.primary};
      }
      border-width: 1px;
      border-radius: ${props.shape === "square" ? '3px' : '100px'};
    `}
  ${(props: Props) =>
    props.width &&`
        width: ${props.width}px;
    `}
  ${(props: Props) =>
    Platform.OS === 'web' ?
        props.block && `
        flex: 1;
    `:
        props.block && `
        align-self: stretch;
    `}    
`;

export const Label = styled.Text`
  color: ${(props: Props) => getTextColor(props)};
  font-size: 17px;
  font-weight: 600;
  height: 100%;
  padding: 8px;
`;

export const IconWrapper = styled.View`
    padding: 8px;
`;

/** Helpers */
const getContainerColor = (props: Props) => {
    let color = props.color ? colors[props.color] : colors.primary;

    if (props.$outline) {
        color = colors.transparent;
    } else if (props.disabled) {
        color = colors.grey;
    }

    return color;
};

const getTextColor = (props: Props): string => {
    const bgColor = props.color ? colors[props.color] : colors.primary;
    let color = bgColor == colors.primary ? colors.accent : colors.primary;

    if (props.$outline) {
        color = bgColor;
    } else if (props.disabled) {
        color = colors.light;
    }

    return color;
};

