import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
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
import styles from '../Styles/styles';
import data from '../data';
import ListSeaFood from '../Components/Lists/ListSeaFood';
import global from '../Styles/global';
import Text from '../Components/Text/Text';
import TabItems from "../Components/Tabs/TabItems";
import Header from '../Components/Header';
import IconButton from '../Components/Button/IconButton';
import ModalBox from 'react-native-modalbox';
import ButtonWithIcon from '../Components/Button/ButtonWithIcon';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import FloatingAction from '../Components/FloatingButton';
import FloatingButton from '../Components/FloatingButton';

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
  

