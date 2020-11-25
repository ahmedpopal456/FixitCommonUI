import styled from "styled-components/native";
import colors from '../../../theme/colors';

/** PROPS */
interface TextProps {
    /**  To override default style */
    style?: any;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border width of the Text box */
    borderWidth?: number;
    /** Border radius of the Text box (square or round)*/
    borderRadius?: number;
    /**  The title of the Text box */
    title?:string;
    /** To pass custom icon */
    icon?:any;
    /** Height of the Text box */
    height?: number;
    /** Width of the Text box */
    width?: number;
    /** Placeholder for the Text box */
    placeholder?:string;
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
    backgroundColor: #33343E;
    borderColor: #000000;
    ${(props:TextProps)=>
        `
        color: ${props.color};
        height: ${props.height}px;
        width: ${props.width}px;
        border-width:${props.borderWidth};
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

