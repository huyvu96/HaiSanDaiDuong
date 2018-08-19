import React, { Component } from 'react';
import {View,Image} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import {FlatList, Dimensions,} from 'react-native';
import OrderHistoryListView from '../../modules/OrderHistoryListView/index';
const data = [{
  id:'a1',
  time: '232323',
  total: '35000',
  product: [{
    id:1,
    image: 'http://tunghaisan.com/sites/default/files/1427691019_giap.jpg',
    title: 'Cá bò da',
    price: '5000'
  },
  {
    id:2,
    image: 'http://phannha.net/files/assets/ca_bo_da.jpg',
    title: 'Cá bò heo',
    price: '5000'
  },
  {
    id:3,
    image: 'http://tunghaisan.com/sites/default/files/1427691019_giap.jpg',
    title: 'Cá bò chó',
    price: '5000'
  }]
},{
  id:'a2',
  time: '232323',
  total: '35000',
  product: [{
    id:1,
    image: 'http://phannha.net/files/assets/ca_bo_da.jpg',
    title: 'Cá bò da',
    price: '5000'
  }]
}, {
  id:'a3',
  time: '232323',
  total: '35000',
  product: [{
    id:1,
    image: 'http://tunghaisan.com/sites/default/files/1427691019_giap.jpg',
    title: 'Cá bò da',
    price: '5000'
  }]
}]

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
           <OrderHistoryListView
              data={data}
           />

        </View>
      );
    }
  }

  export default History;
  

