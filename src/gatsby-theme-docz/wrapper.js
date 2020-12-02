import React from 'react';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import AntDesign from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import EvilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf';

class Wrapper extends React.Component {
  componentDidMount() {
    const iconFontStyles = `
    @font-face {
      src: url(${FontAwesome});
      font-family: FontAwesome;
    }

    @font-face {
      font-family: "AntDesign";
      src: url(${AntDesign});
    }
  
    @font-face {
      font-family: "Entypo";
      src: url(${Entypo});
    }
  
    @font-face {
      font-family: "EvilIcons";
      src: url(${EvilIcons});
    }
  
    @font-face {
      font-family: "Feather";
      src: url(${Feather});
    }
  
    @font-face {
      font-family: "FontAwesome";
      src: url(${FontAwesome});
    }
  
    @font-face {
      font-family: "Ionicons";
      src: url(${Ionicons});
    }
  
    @font-face {
      font-family: "MaterialCommunityIcons";
      src: url(${MaterialCommunityIcons});
    }
  
    @font-face {
      font-family: "MaterialIcons";
      src: url(${MaterialIcons});
    }
  
    @font-face {
      font-family: "Octicons";
      src: url(${Octicons});
    }

    textArea {
      outline: none !important;
    }
    
    `;
    const style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = iconFontStyles;
      } else {
        style.appendChild(document.createTextNode(iconFontStyles));
      }

    document.head.appendChild(style);

    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    link.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
  }

  render() {
    return this.props.children;
  }
}

export default Wrapper;