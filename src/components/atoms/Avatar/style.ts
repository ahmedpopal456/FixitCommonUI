import styled from 'styled-components/native';
import colors from '../../../theme/colors';

/** PROPS */
interface AvatarProps {
    /**  To override default style */
    style?: React.CSSProperties;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border radius of the to make it round */
    borderRadius?: number;
    /**  The title of the Text box */
    title?:string;
    /** To pass custom icon */
    icon?:string;
    /** Background color of the Avatar */
    backgroundColor?:keyof typeof colors;
    /** Height of the Avatar circle */
    height?: number;
    /** Width of the Avatar circle */
    width?: number;
    /** Image of Avatar */
    image?:string;
}

export const AvatarWrapper = styled.View`
${(avatarProps: AvatarProps) => avatarProps.height
    && `
    height:${avatarProps.height};
 `}
 ${(avatarProps: AvatarProps) => avatarProps.width
    && `
    width:${avatarProps.width};
 `}
    borderRadius:50;
    align-items:center;
    ${(avatarProps: AvatarProps) => avatarProps.backgroundColor
        && `
        backgroundColor:${avatarProps.backgroundColor};
     `}
    justify-content:center;
    margin:10px;
`;

export const IconWrapper = styled.View`
    align-self:center;
`;

export const TextWrapper = styled.Text`
${(avatarProps: AvatarProps) => avatarProps.height
    && `
    height:${avatarProps.height};
 `}
 ${(avatarProps: AvatarProps) => avatarProps.width
    && `
    width:${avatarProps.width};
 `}
    align-self:center;
    font-size:20;
    font-weight:bold;
    font-family:Cochin;
    color:white;
`;

export const ImageWrapper = styled.ImageBackground`
${(avatarProps: AvatarProps) => avatarProps.height
    && `
    height:${avatarProps.height};
 `}
 ${(avatarProps: AvatarProps) => avatarProps.width
    && `
    width:${avatarProps.width};
 `}
    flex:1;
    borderRadius:50;
    overflow:hidden;
    align-self:center;
`;
