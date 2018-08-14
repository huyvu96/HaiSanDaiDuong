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

const ButtonWithIcon = ({nameIcon,icoStyle,btnStyle,buttonText,txtStyle,onClick})=>{
    let buttonStyle = {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:45, 
        backgroundColor:'#EA6355',
        borderRadius:5
    }
    let iconStyle = {
        alignSelf:'center',
        fontSize: 40,
        color: '#545454',
        margin:5
    }
    let textStyle = {
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
    return (
        <TouchableNativeFeedback onPress={onClick}>
            <View style ={[buttonStyle, btnStyle]}> 
            {!nameIcon ? (null):(<Icon name={nameIcon} style={[iconStyle, icoStyle]}/>    )}
            <Text style={[textStyle, txtStyle]}>{buttonText}</Text>   
            </View>          
        </TouchableNativeFeedback>
    
    );
}

ButtonWithIcon.defaultProps = {
    name: '',
  };
ButtonWithIcon.propTypes = {
    nameIcon: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icoStyle: PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
    btnStyle: PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
    txtStyle:PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
  };
  

export default ButtonWithIcon;


