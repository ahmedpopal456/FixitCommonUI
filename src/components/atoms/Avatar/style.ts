import styled from "styled-components/native";
import colors from '../../../theme/colors';

/** PROPS */
interface AvatarProps {
    /**  To override default style */
    style?: any;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border radius of the to make it round*/
    borderRadius?: number;
    /**  The title of the Text box */
    title?:string;
    /** To pass custom icon */
    icon?:any;
    /** Background color of the Avatar */
    backgroundColor?:keyof typeof colors;
    /** Height of the Avatar circle */
    height?: number;
    /** Width of the Avatar circle */
    width?: number;
    /** Image of Avatar */
    image?:any;
}

export const AvatarWrapper = styled.View`
${(props: AvatarProps) =>
    props.height &&
    `
    height:${props.height};
 `}
 ${(props: AvatarProps) =>
    props.width &&
    `
    width:${props.width};
 `}
    borderRadius:50;
    align-items:center;
    ${(props: AvatarProps) =>
        props.backgroundColor &&
        `
        backgroundColor:${props.backgroundColor};
     `}
    justify-content:center;
    margin:10px;
`;

export const IconWrapper = styled.View`
    align-self:center;
`;

export const TextWrapper =styled.Text`
${(props: AvatarProps) =>
    props.height &&
    `
    height:${props.height};
 `}
 ${(props: AvatarProps) =>
    props.width &&
    `
    width:${props.width};
 `}
    align-self:center;
    font-size:20;
    font-weight:bold;
    font-family:Cochin;
    color:white;
`;

export const ImageWrapper = styled.ImageBackground`
${(props: AvatarProps) =>
    props.height &&
    `
    height:${props.height};
 `}
 ${(props: AvatarProps) =>
    props.width &&
    `
    width:${props.width};
 `}
    flex:1;
    borderRadius:50;
    overflow:hidden;
    align-self:center;
`;