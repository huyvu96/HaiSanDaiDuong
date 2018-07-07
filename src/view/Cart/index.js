import React, { Component } from 'react';
import {View, Dimensions,} from 'react-native';
import styles from '../../Styles/styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import SeaFoodListView from "../../modules/SeaFoodListView";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
const { height, width } = Dimensions.get('window');
import Currency from '../../Global/Currency';
import ModalBox from 'react-native-modalbox';


class Cart extends Component {
    state ={
        isOpen: false
    }
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
            rightHeader={<Text text={this.props.dataCart.length.toString() === '0' ? '0' :this.props.dataCart.length.toString() }
             color={global.colorF3}
             size={global.sizeP18}
            fontFamily={global.fontBold}
            style={{backgroundColor:global.red, height:30, width:30, borderRadius:20, textAlign:'center'}}/>}
            />
            <View style ={{flexDirection:'row',
                justifyContent:'space-between',
                backgroundColor: global.colorFF,
                elevation: 2,
                margin:5,
                padding:10,
                borderRadius:5,
                alignItems:'center'}}>
                <Text text={'Tạm tính: '} color={global.red} fontFamily={global.fontRegular} size={global.sizeP18}/>
                <Text text={(this.props.total !== '' ? Currency.convertNumberToCurrency(this.props.total) : '0') + ' VNĐ'} color={global.red} fontFamily={global.fontRegularItalic} size={global.sizeP18}/>
            </View>
            <SeaFoodListView data={this.props.dataCart}/>
            <View style ={{width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
                alignSelf:'flex-end'
            }}>
                <ButtonWithIcon buttonText={'Đặt hàng ngay'} onClick={()=> this.setState({isOpen: true})}/>
            </View>
            <ModalBox
                style={{
                    //justifyContent: 'center',
                    //alignItems: 'center',
                    height: '50%',
                    width: '80%',
                    borderRadius: 20,
                    backgroundColor: global.colorTextPrimary,
                    //flex:1
                }}
                isOpen={this.state.isOpen}
                swipeToClose={true}
                position='center'
                onClosed={() => console.log('onClosed')}
                onOpened={() => console.log('onOpen')}
                backdropPressToClose={false}
                onClosingState={() => this.setState({isOpen: false})}>
                <Text text='Thêm thông tin cho đơn hàng'
                      color={global.colorF3}
                      fontFamily={global.fontRegular}
                      size={global.sizeP18}
                      style={{textAlign: 'center'}}/>
                <ButtonWithIcon
                    buttonText='08888.333.333'
                    style={{
                        margin: 5,
                        width: 200,
                        height: 45,
                        backgroundColor: global.colorF3,
                        borderRadius: 20,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    styleText={{
                        color: global.colorTextPrimary,
                        fontSize: global.sizeP16,
                        fontFamily: global.fontBold,
                        alignSelf: 'center',
                        textDecorationLine: 'underline',
                        textAlign: 'center'
                    }}
                />

                    <ButtonWithIcon
                        buttonText='Gui don hang'
                        style={{
                            margin: 5,
                            width: 200,
                            height: 45,
                            backgroundColor: global.red,
                            borderRadius: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        styleText={{
                            color: global.colorFF,
                            fontSize: global.sizeP16,
                            fontFamily: global.fontBold,
                            alignSelf: 'center',
                            textDecorationLine: 'underline',
                            textAlign: 'center'
                        }}
                    />
            </ModalBox>
        </View>
      );
    }
  }
function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
        dataShop: state.cart.dataShop,
        total: state.cart.totalPrice
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: items => dispatch(ACTION.addItemToCart(items)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);

  
