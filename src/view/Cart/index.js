import React, {Component} from 'react';
import {View, Dimensions, KeyboardAvoidingView,Keyboard} from 'react-native';
import styles from './styles';
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
                                            iconStyle={styles.icon}
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
                        style={styles.right_header}/>}
                />
                <View style={styles.view_tamtinh}>
                    <Text text={'Tạm tính: '} color={global.red} fontFamily={global.fontRegular} size={global.sizeP18}/>
                    <Text
                        text={(this.props.total !== '' ? Currency.convertNumberToCurrency(this.props.total) : '0') + ' VNĐ'}
                        color={global.red} fontFamily={global.fontRegularItalic} size={global.sizeP18}/>
                </View>
                <SeaFoodListView data={this.props.dataCart}/>
                <View style={styles.view_list_card}>
                    <ButtonWithIcon buttonText={this.props.dataCart.length === 0 ? 'Giỏ hàng trống' : 'Đặt hàng ngay'}
                                    onClick={() => (this.props.dataCart.length === 0 ? console.log('onClick') : this.setState({isOpen: true}))}/>
                </View>
                <ModalBox
                    style={styles.modal_box}
                    isOpen={this.state.isOpen}
                    swipeToClose={false}
                    position='center'
                    onClosed={() => this.setState({isOpen: false})}
                    onOpened={() => console.log('onOpen')}
                    backdropPressToClose={true}
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
                                style={[styles.btn_with_icon,{backgroundColor: global.colorF3}]}
                                styleText={styles.btn_with_icon_text}
                            />
                            <ButtonWithIcon
                                onClick={() => this.props.uploadCartItem(this.props.dataCart, this.props.userInfo.uid)}
                                buttonText={'Gửi đơn hàng'}
                                style={[styles.btn_with_icon,{backgroundColor: global.red}]}
                                styleText={[styles.btn_with_icon_text,{color:global.grayLightColor}]}
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
        total: state.cart.totalPrice,
        userInfo: state.login.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: items => dispatch(ACTION.addItemToCart(items)),
        uploadCartItem: (items,uid) => dispatch(ACTION.updateLoadCartProduct(items,uid))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

  

