import { Platform } from 'react-native';
import styled from "styled-components/native";

import { ButtonProps } from './ButtonModel';
import colors from '../../../theme/colors';


/** Styled Components */
export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(buttonProps: ButtonProps) => getContainerColor(buttonProps)};
  margin: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 7px;
  ${(buttonProps: ButtonProps) =>
        buttonProps.color != "transparent" &&
        `
      border-color: ${buttonProps.disabled ? colors.disabled : colors[buttonProps.color!]};
      }
      border-width: 1px;
      border-radius: ${buttonProps.shape === "square" ? '3px' : '100px'};
    `}
  ${(buttonProps: ButtonProps) =>
    buttonProps.width &&`
        width: ${buttonProps.width}px;
    `}
  ${(buttonProps: ButtonProps) =>
    Platform.OS === 'web' ?
        buttonProps.block && `
        flex: 1;
    `:
        buttonProps.block && `
        align-self: stretch;
    `}    
`;

export const IconWrapper = styled.View`
    padding: 8px;
`;

/** Helpers */
const getContainerColor = (buttonProps: ButtonProps) => {
    let color = colors[buttonProps.color!];

    if (buttonProps.outline) {
        color = colors.transparent;
    } else if (buttonProps.disabled) {
        color = colors.disabled;
    }

    return color;
};

