import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableNativeFeedback,Image,Dimensions } from 'react-native';
const { height } = Dimensions.get('window')
export default class ListHashTag extends Component {
    onClick(){
        this.props.fetchingDataDetailMovieByID(item.id)
                if(this.props.datadetail !== null){
                    this.props.navigation.navigate('DetailScreen')}
    }
    state = {  }
    _renderHashTag = ({ item }) => {
        return (
            <TouchableNativeFeedback onPress={()=>  this.props.navigation.navigate('DetailScreen', {id: item.id})}>
                <View style = {{width: height/7, elevation:3}}>
                <Image source={{uri: item.image}} style={styles.imageItemtop}/>
                <Text  numberOfLines = {2} style ={[styles.titleCommic, {marginBottom: 0,}]}>{item.title}</Text>
                <Text  numberOfLines = {2} style ={[styles.titleCommic, {color: "#e74c3c",}]}>{item.price}</Text>
                </View>              
            </TouchableNativeFeedback>  
        );
    }
    render() {
        return (
            <FlatList
             data={this.props.data}
             removeClippedSubviews={true}     
             contentContainerStyle={{padding:height/60}}       
             horizontal={true}
             ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 80,}}/>)}}
             automaticallyAdjustContentInsets={true}                  
             extraData= {this.state}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item) => item.id.toString()}
             renderItem={this._renderHashTag}/>
);
    }
}
const styles = StyleSheet.create({
    imageItemtop: {
        //alignSelf: 'stretch',
        height: height / 5,
        width: height / 7,
       // position: 'relative',
        resizeMode: 'cover',
    },
    titleCommic: {
        fontSize: height / 40,
        fontWeight: 'normal',
        color: '#007ACC',
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
