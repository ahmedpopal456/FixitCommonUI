import React from "react";
import { TextInputIconWrapper, TextInputWrapper, IconWrapper, TextBoxWrapper } from "./style";
import { View,Text } from "react-native";
import { TextProps } from "./props.model";

  export const TextBox: React.FC<TextProps> = (props:TextProps) => {
    return (
          <View>
              <View style={{backgroundColor:'#FFF',padding:5, top:-5, left:25, zIndex:50, position:'absolute'}}>
                <Text>{props.title}</Text>
              </View>
              <TextInputWrapper {...props} multiline = {true} >
              </TextInputWrapper>
          </View>
    );
  }

  export const TextBoxIcon: React.FC<TextProps> = (props:TextProps) => {
    return (
          <TextBoxWrapper {...props} >  
              <IconWrapper style={{backgroundColor:'grey'}}>{props.icon}</IconWrapper>
              <TextInputIconWrapper multiline={true}></TextInputIconWrapper>
          </TextBoxWrapper>
    );
  }

  TextBox.defaultProps={ 
    borderRadius: 5,
    style: {  
             height: 45,
             borderColor: '#FFD14A', 
             borderWidth: 2, 
             textAlign:'left', 
             }
  };

  TextBoxIcon.defaultProps={ 
    borderRadius: 5,
    style: {  
             height: 45,
             borderColor: '#000000', 
             borderWidth: 2, 
             backgroundColor:"#33343E",
             textAlign:'left', 
             }
  };

