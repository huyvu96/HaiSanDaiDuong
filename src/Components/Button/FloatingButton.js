import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableNativeFeedback,Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window');
import global from '../../Styles/global'
export default class FloatingButton extends Component {
    render() {
        return (
            <TouchableNativeFeedback onPress ={this.props.onPress}>
                <View style = {styles.floatingButton}>
                <Icon name={this.props.nameIcon} style={{ fontSize: height / 20, color: 'white', alignSelf:'center' }} />
                </View>
            </TouchableNativeFeedback>
);
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    floatingButton:{
        position: 'absolute',
        width:60,height:60,
        backgroundColor: global.colorTextPrimary,
        bottom:30,right:30,
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        elevation: 2
    }
});
