import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableNativeFeedback,Image,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window')
export default class FloatingButton extends Component {
    onClick(){
        this.props.fetchingDataDetailMovieByID(item.id)
                if(this.props.datadetail !== null){
                    this.props.navigation.navigate('DetailScreen')}
    }
    render() {
        return (
            <TouchableNativeFeedback>
                <View style = {styles.floatingButton}>
                <Icon name='md-cart' style={{ fontSize: height / 20, color: 'white', alignSelf:'center' }} />
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
        width:65,height:65,
        backgroundColor:'#1253bc',
        bottom:30,right:30,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 2
    }
});
