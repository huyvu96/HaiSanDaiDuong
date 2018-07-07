import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    FlatList,
    ScrollView,
    Dimensions,
    Image,
    TouchableNativeFeedback,
    ImageBackground,
    TextInput,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";
export default class ButtonWithIcon extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {nameIcon, onClick, style,buttonText,styleText} = this.props;
        return (
            <TouchableNativeFeedback onPress={onClick}>
                <View style ={[{flexDirection:'row',justifyContent:'center',alignItems:'center', height:45, backgroundColor:'#EA6355',borderRadius:5}, style]}> 
                {!nameIcon ? (null):(<Icon name={nameIcon} style={[{alignSelf:'center',fontSize: 40, color: '#545454', margin:5}]}/>    )}
                <Text style={[{fontSize:20, textAlign:'center',color:'white'},styleText]}>{buttonText}</Text>   
                </View>          
            </TouchableNativeFeedback>
        
        );
    }
}
ButtonWithIcon.defaultProps = {
    name: '',
  };
ButtonWithIcon.propTypes = {
    name: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
    styleText:PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
  };
  

