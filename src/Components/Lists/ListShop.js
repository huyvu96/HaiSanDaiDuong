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
    TouchableOpacity,
    Animated
} from 'react-native';
import Button from '../Button/ButtonWithIcon';
const { height, width } = Dimensions.get('window');

export default class ListCart extends Component {
    _renderRecommend = ({ item }) => {
        const {onPress,onRemove} = this.props
        // const backgroundColor = item.checked ? '#4468B0' :'white';
        // const color = item.checked ? 'white' :'#333333';
        return (
            <TouchableNativeFeedback onPress={()=> onPress(item.id)}>
                <View style = {{margin:5,alignItems:'center',flexDirection:'row', flex:1}}>
                <View style = {{alignItems:'center',flexDirection:'row', flex:1}}>
                <Image source={{uri: item.image}} style={styles.imageItemtop}/>
                <View style= {{marginLeft: 20}}>
                <Text  numberOfLines = {2} style ={[styles.titleCommic, {marginBottom: 0,}]}>{item.title}</Text>
                <Text  numberOfLines = {2} style ={[styles.titleCommic, {color: "#DC524A",}]}>{item.price}</Text>
                </View>
                </View>
                <Button buttonText='Xoá'
                 onPress={()=>onRemove(item.id)} 
                 style={{height:30, width:'10%',flex:0.6}}/>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <FlatList
            data={this.props.data}
            removeClippedSubviews={true}     
            horizontal={false}
            //numColumns={2}
            contentContainerStyle={{padding:10}}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderRecommend}/>    
        );
    }
}
const styles = StyleSheet.create({
    imageItemtop: {
        //alignSelf: 'stretch',
        height: height / 9,
        width: height / 9,
        borderRadius:10,
       // position: 'relative',
        resizeMode: 'cover',
    },
    titleCommic: {
        fontSize: height / 40,
        fontWeight: 'normal',
        color: '#333333',
        textAlign:'center',
        marginBottom: height / 100,
    },
    wraper2: {
        marginTop: 5,
        height: undefined,
        backgroundColor: '#000'
    },
    viewPage: {
        flexDirection: 'row',
        marginTop: height / 50,
        alignItems: 'center'
    },
    tron: {
        backgroundColor: 'transparent',
        fontSize: height/40,
        fontWeight: 'bold',
        color: '#d35400',
        marginLeft: height/80
        //borderRadius: height/30
    },
    titlePage: {
        fontSize: height / 40,
        fontWeight: 'normal',
        marginLeft: height / 60,
        color: 'white'
    },
});