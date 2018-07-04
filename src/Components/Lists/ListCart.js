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
const { height, width } = Dimensions.get('window');

export default class ListCart extends Component {
    _renderRecommend = ({ item }) => {
        const {onPress,status} = this.props
        const backgroundColor = item.checked ? '#4468B0' :'white';
        const color = item.checked ? 'white' :'#333333';
        return (
            <TouchableNativeFeedback onPress={()=> onPress(item.id)}>
                <View style = {[{width: (width-(height/120 *6))/3, margin:height/120, borderRadius: height/100,borderColor:'#4468B0',borderWidth:height/1000, overflow:'hidden'},{backgroundColor}]}>
                    <Text numberOfLines={2} style ={[{marginLeft: 5, color: '#333333', fontSize:height/40, opacity: 0.8},{textAlign:'center',fontSize:height/35},{color}]}>{item.title}</Text>
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
            numColumns={3}
            automaticallyAdjustContentInsets={true}                  
            extraData= {this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={this._renderRecommend}/>    
        );
    }
}