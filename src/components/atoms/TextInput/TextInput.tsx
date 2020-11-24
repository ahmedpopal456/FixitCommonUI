import React from "react";
import colors from '../../../theme/colors';
import { TextInputIconWrapper, TextInputWrapper, IconWrapper, TextBoxWrapper } from "./style";
import { View,Text } from "react-native";

/** PROPS */
interface Props {
    /**  To override default style */
    style?: any;
    /** Any color from the theme's color palette */
    color?: keyof typeof colors;
    /** Border width of the Text box */
    borderWidth?: number;
    /** Border radius of the Text box (square or round)*/
    borderRadius?: number;
    /** Width of the Text box */
    width?: number;
    /** Height of the Text box */
    height?:number;
    /**  The title of the Text box */
    title?:string;
    /** Placeholder for the Text box */
    placeholder?: string;
    /** To pass custom icon */
    icon?:any;
    /** Used for testing */
    testID?: string;
  }

  export const TextBox: React.FC<Props> = (props:Props) => {
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

  export const TextBoxIcon: React.FC<Props> = (props:Props) => {
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
             borderColor: '#FFD14A', 
             borderWidth: 2, 
             textAlign:'left', 
             }
  };

