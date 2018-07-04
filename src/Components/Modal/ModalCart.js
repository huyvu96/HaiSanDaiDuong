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
const { height, width } = Dimensions.get('window')
import styles from './styles';
import PropTypes from "prop-types";
import IconButton from '../Button/IconButton'
import ListCart from '../Lists/ListCart';
import ListShop from '../Lists/ListShop';
import ButtonWithIcon from '../Button/ButtonWithIcon';
export default class ModalCart extends Component {
    constructor(props) {
        super(props)

    }
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
        const {dataShop,dataCart,nameIcon, onPressIcon, heading1,heading2,onPressCart,onPressShop,onPressCheck} = this.props;
        return (
            <View style={{flex :1}}>
                <ScrollView>
                {/* <IconButton style ={{alignSelf : 'center'}}name ={nameIcon} onPress={onPressIcon} /> */}
                <View style={{backgroundColor:'#F4F4F4'}}>
                    <Text style={[styles.titlePage,{alignSelf:'center',backgroundColor:'#F4F4F4'}]}>{heading1}</Text>
                </View>
                <View style={{height:150, maxHeight:170}}>
                <ListCart data ={dataShop} onPress={onPressCart}/>
                </View>
                <View style={{backgroundColor:'#F4F4F4'}}>
                    <Text style={[styles.titlePage,{alignSelf:'center',backgroundColor:'#F4F4F4'}]}>{heading2}</Text>
                </View>
                <View style={{height:250,maxHeight:270}}>
                <ListShop data ={dataCart} onRemove={onPressShop}/>
                </View>
                </ScrollView>
                <View style ={{width: '100%',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 20,
                    position: 'absolute',
                    bottom: 0,
                    left:0,right:0}}>
                <ButtonWithIcon buttonText='Tiến hành đặt hàng' onPress={onPressCheck}/>
                </View>

            </View>   
        );
    }
}

  
  ModalCart.propTypes = {
    nameIcon: PropTypes.string.isRequired,
    heading1: PropTypes.string,
    heading2: PropTypes.string,
    data:PropTypes.array,
    onPress: PropTypes.func,
  };
  

