import React from "react";
import { TextInputIconWrapper, TextInputWrapper, IconWrapper, TextBoxWrapper } from "./style";
import { View,Text } from "react-native";
import { TextProps } from "./TextModel";

  export const TextBox: React.FC<TextProps> = (props:TextProps) => {
      return (
            <TextBoxRender {...props}/>
      );
  };

  export const TextBoxRender:React.FC<TextProps> = (props: TextProps) => {
    if(props.icon != null){
      return (
        <View>
            <TextBoxWrapper {...props}>  
                <IconWrapper style={{backgroundColor:'grey'}}>{props.icon}</IconWrapper>
                <TextInputIconWrapper multiline={true}></TextInputIconWrapper>
            </TextBoxWrapper>
        </View>
      );
    }
    else{
      return (
        <View>
          <View style={{ backgroundColor: '#FFF', padding: 5, top: -5, left: 25, zIndex: 50, position: 'absolute' }}>
            <Text>{props.title}</Text>
          </View>
          <TextInputWrapper {...props} multiline={true}>
          </TextInputWrapper>
        </View>
        );
    }
  };

  TextBox.defaultProps={ 
    borderRadius: 5,
    style: {  
             height: 45,
             borderColor: '#FFD14A', 
             borderWidth: 2, 
             textAlign:'left', 
             }
  };

