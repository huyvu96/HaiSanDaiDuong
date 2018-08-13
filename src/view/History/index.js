import React, { Component } from 'react';
import {View} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";

class History extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
      return (
        <View style={styles.container}>
            <Header
            customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
            leftHeader={<IconButton nameIcon ='ios-search' iconStyle ={styles.icon}/>}
            body={<Text 
                text='Lịch Sử Mua Hàng' 
                color = {global.colorF3}
                size={global.sizeP20} 
                fontFamily={global.fontLight}
                bold={global.fontWeightDark}/>}
            rightHeader={
             <IconButton nameIcon ='md-list' iconStyle ={styles.icon} />}
            />
        </View>
      );
    }
  }

  export default History;
  

