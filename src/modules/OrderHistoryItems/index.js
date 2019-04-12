import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableWithoutFeedback,Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
const {height, width} = Dimensions.get('window');

const OrderHistoryItems = ({uriImage,title,price})=>{
    return(
        <View style={{flexDirection:'row',marginLeft:20,marginTop:10,marginBottom:10}}>
        <View>
        <Image
             style={{width: 80, height: 80}}
             source={{uri: uriImage}}
           />
        </View>
        <View>
           <Text 
               style={{marginLeft:20}}
               text={title} 
               color ={global.black}
               size={global.sizeP14} 
               fontFamily={global.fontLight}
               bold={global.fontWeightDark}/>
            <Text 
               style={{marginLeft:20}}
               text={'Giá bán:'+ price}
               color ={global.grey}
               size={global.sizeP14} 
               fontFamily={global.fontLight}
               bold={global.fontWeightDark}/>
           </View>
     </View>
    );
}
OrderHistoryItems.defaultProps = {};
OrderHistoryItems.propTypes = {
    uriImage:PropTypes.node,
    title: PropTypes.string,
    price:PropTypes.string,
};
export default OrderHistoryItems;