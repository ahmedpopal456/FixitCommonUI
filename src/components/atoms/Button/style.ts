import { Platform } from 'react-native';
import styled from "styled-components/native";
import custom from "styled-components";

import { Label } from "../Typography";
import { Props } from './props.model';
import colors from '../../../theme/colors';


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
      border-color: ${props.disabled ? colors.disabled : colors[props.color!]};
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

export const IconWrapper = styled.View`
    padding: 8px;
`;

/** Helpers */
const getContainerColor = (props: Props) => {
    let color =colors[props.color!];

    if (props.$outline) {
        color = colors.transparent;
    } else if (props.disabled) {
        color = colors.disabled;
    }

    return color;
};

