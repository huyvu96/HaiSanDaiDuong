import React, { Component } from 'react';
import {View, Dimensions,} from 'react-native';
import styles from '../../Styles/styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
const { height, width } = Dimensions.get('window');


class Cart extends Component {

    render() {
      return (
        <View style={styles.container}>
            <Header
            customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
            leftHeader={<IconButton nameIcon ='ios-arrow-back' 
            iconStyle ={{fontSize: 35, color: global.colorF3}}
            onClick={()=> this.props.navigation.goBack()}/>}
            body={<Text 
                text='Giỏ hàng' 
                color = {global.colorF3} 
                size={global.sizeP20} 
                fontFamily={global.fontLight}
                bold={global.fontWeightDark}/>}
            rightHeader={<Text text='1'
             color={global.colorF3} 
             size={global.sizeP18}
            fontFamily={global.fontBold}
            style={{backgroundColor:global.red, height:30, width:30, borderRadius:20, textAlign:'center'}}/>}
            />
        </View>
      );
    }
  }

  export default Cart;
  

