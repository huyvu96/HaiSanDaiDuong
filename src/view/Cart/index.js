import React, {Component} from 'react';
import {View, Dimensions, KeyboardAvoidingView,Keyboard} from 'react-native';
import styles from '../../Styles/styles';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import SeaFoodListView from "../../modules/SeaFoodListView";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";

const {height, width} = Dimensions.get('window');
import Currency from '../../Global/Currency';
import ModalBox from 'react-native-modalbox';
import TextInput from '../../Components/TextInput/TextSingleInput';

class Cart extends Component {
    state = {
        isOpen: false,
        numPhone: '',
        note: ''
    }
    componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
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
                                    onClick={() => (this.props.dataCart.length === 0 ? console.log('onClick') : this.setState({isOpen: true}))}/>
                </View>
                <ModalBox
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '55%',
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
                    <KeyboardAvoidingView behavior="padding">
                        <Text text={'Thêm thông tin cho đơn hàng'}
                              color={global.colorF3}
                              fontFamily={global.fontBold}
                              size={global.sizeP20}
                              style={{textAlign: 'center', marginBottom: 20}}/>

                        <TextInput
                            value={this.state.numPhone}
                            onChangeText={input => this.setState({numPhone: input})}
                            nameIcon={'ios-call-outline'}
                            placeholder={'Hãy để lại số điện thoại của bạn'}
                            warning={true}
                            keyboardType={'numeric'}
                            maxLength={11}
                            returnKeyType={'done'}/>
                        <TextInput
                            value={this.state.note}
                            onChangeText={input => this.setState({note: input})}
                            nameIcon={'ios-clipboard-outline'}
                            placeholder={'Ghi chú khác'}
                            multiline={true}
                            style={{textAlignVertical: "top"}}
                            maxLength={100}
                            returnKeyType={'done'}
                            returnKeyLabel={'Done'}
                            keyboardType={'email-address'}
                            numberOfLines={4}/>
                        <View style={{flexDirection: 'row'}}>
                            <ButtonWithIcon
                                onClick={() => this.setState({isOpen: false})}
                                buttonText={'Tiếp tục mua hàng'}
                                style={{
                                    margin: 5,
                                    //width: (width / 2) - 100,
                                    height: 40,
                                    backgroundColor: global.colorF3,
                                    borderRadius: 20,
                                    //alignSelf: 'center',
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                styleText={{
                                    color: global.colorTextPrimary,
                                    fontSize: global.sizeP14,
                                    fontFamily: global.fontBold,
                                    alignSelf: 'center',
                                    textDecorationLine: 'underline',
                                    textAlign: 'center'
                                }}
                            />
                            <ButtonWithIcon
                                buttonText={'Gửi đơn hàng'}
                                style={{
                                    margin: 5,
                                    //width: (width / 2) - 100,
                                    height: 40,
                                    backgroundColor: global.red,
                                    borderRadius: 20,
                                    flex: 1,
                                    //alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                styleText={{
                                    color: global.colorFF,
                                    fontSize: global.sizeP14,
                                    fontFamily: global.fontBold,
                                    alignSelf: 'center',
                                    textDecorationLine: 'underline',
                                    textAlign: 'center'
                                }}
                            />
                        </View>
                    </KeyboardAvoidingView>

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

  

