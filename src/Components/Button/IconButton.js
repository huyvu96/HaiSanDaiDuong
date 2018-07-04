import React, {Component} from 'react';
import {TouchableNativeFeedback,View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
const IconButton = ({nameIcon, btnStyle,iconStyle, onClick}) => {
  let buttonStyle ={
    height:undefined,
    justifyContent:'center',
    alignItems:'center',
  };
  return (
    <TouchableNativeFeedback  onPress={onClick}>
    <View style={[buttonStyle,btnStyle]}>
    <Icon name={nameIcon} style ={iconStyle}/>
    </View>
    </TouchableNativeFeedback>
  );
};

IconButton.propTypes = {
  nameIcon: PropTypes.string,
  btnStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  onClick: PropTypes.func
};

export default IconButton;
