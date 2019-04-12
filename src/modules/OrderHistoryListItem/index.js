import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableWithoutFeedback,Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import OrderHistoryItems from '../OrderHistoryItems';
const {height, width} = Dimensions.get('window');

class OrderHistoryListItem extends Component {
    render() {
        const {id,time,total,data} = this.props;
        let listItems =  data.map((itemPro) =>
        {
          console.log("danh sach item",itemPro.id)
            return (
                <OrderHistoryItems
                    key={itemPro.id}
                    uriImage={itemPro.image}
                    title={itemPro.title}
                    price={itemPro.price}
                />
            );
        });
        return (
            <View style={styles.card_container}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text 
                        style={{marginLeft:20}}
                        text={id} 
                        color ={global.black}
                        size={global.sizeP14} 
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>
                    <Text 
                        style={{marginLeft:20}}
                        text={time} 
                        color = {global.grey}
                        size={global.sizeP14} 
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>
                </View>
                <View style={{alignSelf: 'center',alignItems:'flex-end',flex:2,marginRight:20}}>
                  <Text 
                        style={{marginLeft:20,}}
                        text={'Tổng giá tiền:'+ total} 
                        color = {global.grey}
                        size={global.sizeP14} 
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>
                </View>
            </View>
            <View style={styles.viewLine}></View>
            {listItems}
        </View>
        );
    }
}
OrderHistoryListItem.defaultProps = {};
OrderHistoryListItem.propTypes = {
    id:PropTypes.string,
    time: PropTypes.string,
    data:PropTypes.array,
    total:PropTypes.string,
};
export default OrderHistoryListItem;