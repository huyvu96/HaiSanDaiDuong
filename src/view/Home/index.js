import React, { Component } from 'react';
import { View} from 'react-native';
import styles from '../../Styles/styles';
import data from '../../data';
import SeaFoodGridView from '../../modules/SeaFoodGridView';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import TabItems from "../../modules/Tabs/TabItems";
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import ModalBox from 'react-native-modalbox';
import ButtonWithIcon from '../../Components/Button/ButtonWithIcon';
import FloatingButton from '../../Components/Button/FloatingButton';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isList: false,
        openPhone:false,
        openCart:false,
        index: 0,
            routes: [
        { key: '1', title: 'Cá Tươi' },
        { key: '2', title: 'Cá sống' },
        { key: '3', title: 'Cua - Ghẹ' },
        { key: '4', title: 'Sò - Ốc' },
        { key: '5', title: 'Tôm - Mực' },]
      };
    }
    _renderScene = ({ route }) => {
      switch (route.key) {
        case '1':
          return <SeaFoodGridView data={data.dataCaTuoi}/>
        case '2':
          return <SeaFoodGridView data={data.dataCaSong}/>
        case '3':
        return <SeaFoodGridView data={data.dataCuaGhe}/>
        case '4':
        return <SeaFoodGridView data={data.dataSoOc}/>
        case '5':
        return <SeaFoodGridView data={data.dataMucBachTuot}/>
        default: return null;
      }
    };
    _handleIndexChange = index =>
      this.setState({
        index,
      });
    render() {
      //console.log(this.state.openPhone)
      return (
        <View style ={styles.container}>
            <Header
            customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
            leftHeader={<IconButton nameIcon ='ios-search' iconStyle ={{fontSize: 35, color: global.colorF3}}/>}
            body={<Text 
                text='Hải Sản Đại Dương' 
                color = {global.colorF3} 
                size={global.sizeP20} 
                fontFamily={global.fontLight}
                bold={global.fontWeightDark}/>}
            rightHeader={
             <IconButton nameIcon ='ios-cart' iconStyle ={{fontSize: 35, color: global.colorF3}} onClick={()=> this.props.navigation.push('Cart')}/>}
            />
          <TabItems
            renderScene={this._renderScene}
            index={this.state.index}
            routes={this.state.routes}
            onIndexChange={this._handleIndexChange}
          />
          {
            this.state.openPhone ? (null) : (<FloatingButton nameIcon='ios-call' onPress={()=> {this.setState({openPhone: true})}}/>)
          }
          <ModalBox
                style={{justifyContent:'center', alignItems:'center',height:'30%', width:'80%', borderRadius: 20, backgroundColor: global.colorTextPrimary}}
                isOpen={this.state.openPhone}
                swipeToClose={true}
                position='center'
                onClosed={()=> console.log('onClosed')}
                onOpened={()=> console.log('onOpen')}
                backdropPressToClose={false}
                onClosingState={()=> this.setState({openPhone:false})}>
                <Text text='Chọn số điện thoại gọi ngay nào'
                color ={global.colorF3}
                fontFamily={global.fontRegular}
                size={global.sizeP18}
                style={{textAlign:'center'}}/>
                <ButtonWithIcon
                buttonText='08888.333.333'
                style={{margin:5,width: 200, height: 45, backgroundColor: global.colorF3, borderRadius: 20, alignSelf:'center', alignItems:'center', justifyContent:'center'}}
                styleText={{color: global.colorTextPrimary,fontSize: global.sizeP16, fontFamily: global.fontBold,alignSelf:'center', textDecorationLine:'underline', textAlign:'center' }}
                />
                <ButtonWithIcon
                buttonText='08888.333.333'
                style={{margin:5,width: 200, height: 45, backgroundColor: global.colorF3, borderRadius: 20, alignSelf:'center', alignItems:'center', justifyContent:'center'}}
                styleText={{color: global.colorTextPrimary,fontSize: global.sizeP16, fontFamily: global.fontBold,alignSelf:'center', textDecorationLine:'underline', textAlign:'center' }}
                />
          </ModalBox>
          
        </View>
      );
    }
  }

  export default Home;
  

