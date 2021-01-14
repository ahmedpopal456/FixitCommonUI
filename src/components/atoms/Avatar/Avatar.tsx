import React from "react";
import { AvatarProps } from "./AvatarModel";
import {AvatarWrapper, IconWrapper, TextWrapper, ImageWrapper } from './style'

export const Avatar: React.FC<AvatarProps> = (avatarProps: AvatarProps) => {
    return (
        <AvatarWrapper {...avatarProps}>
          <TextWrapper>{avatarProps.title}</TextWrapper>
          <IconWrapper>{avatarProps.icon}</IconWrapper>
          <ImageBackground {...avatarProps}/>
        </AvatarWrapper>
    );
  };

export const ImageBackground: React.FC<AvatarProps> = (avatarProps: AvatarProps) => {
    if(avatarProps.image != null){
        return (
                <ImageWrapper {...avatarProps} source={{uri:avatarProps.image}}/>
            );
    }
    return null;
  };

  Avatar.defaultProps={
    style:{
      height:50,
      width:50,
      backgroundColor:'grey',
      color:'white'
    }
  };
