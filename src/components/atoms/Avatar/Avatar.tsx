import React from "react";
import { AvatarProps } from "./avatarModel";
import {AvatarWrapper, IconWrapper, TextWrapper, ImageWrapper } from './style'

export const AvatarBadge: React.FC<AvatarProps> = (props: AvatarProps) => {
    return (
        <AvatarWrapper {...props}>
          <TextWrapper>{props.title}</TextWrapper>
          <IconWrapper>{props.icon}</IconWrapper>
          <ImageBackground {...props}/>
        </AvatarWrapper>
    );
  };

export const ImageBackground: React.FC<AvatarProps> = (props: AvatarProps) => {
    if(props.image != null){
        return (
                <ImageWrapper {...props} source={{uri:props.image}}/>
            );
    }
    return null;
  };

  AvatarBadge.defaultProps={
    style:{
      height:50,
      width:50,
      backgroundColor:'grey',
      color:'white'
    }
  };
