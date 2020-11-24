import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";
import colors from '../../../theme/colors';

/** PROPS */
interface Props {
    style?: any;
    color?: keyof typeof colors;
    height?:number;
    border?: number;
    borderColor?:string;
    borderWidth?: number;
    width?: number;
    outline?:keyof typeof Colors;
    backgroundColor?: keyof typeof colors;
    icon?:any;
    placeholder?: any;
    fill?: boolean;
}

export const TextInputWrapper = styled.TextInput`
    border-width:2px;
    justify-content: flex-end;
    border-radius: 5px;
    margin:10px;
    padding: 10px;
`;


export const TextInputIconWrapper = styled.TextInput`
    border-radius: 5px;
    padding-top: 10px;
    padding-left:10px;
    align-items:center;
    justify-content:center;
    color: white;
`;

export const TextBoxWrapper = styled.View`
    border-radius: 5px;
    margin: 10px;
    flex-direction: row;
    ${(props:Props)=>
        `
        color: ${props.color};
        height: ${props.height}px;
        width: ${props.width}px;
        border-width:${props.borderWidth};
        border-color:${props.borderColor};
        `}

`;

export const IconWrapper = styled.View`
    padding: 8px;
    border-radius: 5px;
    height:30px;
    width:30px;
    align-items:center;
    justify-content:center;
    margin-left:5px;
    margin-top:5px;
`;

