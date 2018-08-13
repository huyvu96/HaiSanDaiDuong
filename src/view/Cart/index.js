import React, {Component} from 'react';
import {View, Dimensions, KeyboardAvoidingView,Keyboard} from 'react-native';
import styles from '../../Styles/styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import SeaFoodListView from "../../modules/SeaFoodListView";
import * as cartAction from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import ModalOderView from '../../modules/ModalOderView';
const {height, width} = Dimensions.get('window');
import Currency from '../../Global/Currency';
import ModalBox from 'react-native-modalbox';
import TextInput from '../../Components/TextInput/TextSingleInput';

class Cart extends Component {
    state = {
        isOpen: false,
        numPhone: '',
        note: ''
    };
    render() {
        return (
            <View style={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<IconButton nameIcon='ios-arrow-back'
                                            iconStyle={{fontSize: 35, color: global.colorF3}}
                                            onClick={() => this.props.navigation.goBack()}/>}
                    body={<Text
                        text='Giỏ hàng'
                        color={global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={<Text
                        text={this.props.dataCart.length.toString() === '0' ? '0' : this.props.dataCart.length.toString()}
                        color={global.colorF3}
                        size={global.sizeP18}
                        fontFamily={global.fontBold}
                        style={{
                            backgroundColor: global.red,
                            height: 30,
                            width: 30,
                            borderRadius: 20,
                            textAlign: 'center'
                        }}/>}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: global.colorFF,
                    //elevation: 2,
                    margin: 5,
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center'
                }}>
                    <Text text={'Tạm tính: '} color={global.red} fontFamily={global.fontRegular} size={global.sizeP18}/>
                    <Text
                        text={(this.props.total !== '' ? Currency.convertNumberToCurrency(this.props.total) : '0') + ' VNĐ'}
                        color={global.red} fontFamily={global.fontRegularItalic} size={global.sizeP18}/>
                </View>
                <SeaFoodListView data={this.props.dataCart}/>
                <View style={{
                    width: '100%',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 20,
                    alignSelf: 'flex-end'
                }}>
                    <ButtonWithIcon buttonText={this.props.dataCart.length === 0 ? 'Giỏ hàng trống' : 'Đặt hàng ngay'}
                                    onClick={() => (this.props.dataCart.length === 0 ? console.log('onClick') : this.refs.modalOder.openModal())}/>
                </View>
                <ModalOderView
                    {...this.props}
                    ref={'modalOder'}
                    styleModalPopupCustom={{backgroundColor:global.colorTextPrimary}}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
        dataShop: state.cart.dataShop,
        total: state.cart.totalPrice,
        userInfo: state.login.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cartAction: bindActionCreators(cartAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

  

