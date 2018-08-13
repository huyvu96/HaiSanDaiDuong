import React, {Commponent} from "react";
import {View, TouchableOpacity, Dimensions, Platform, Image, LayoutAnimation} from "react-native";
import ModalOder from '../../Components/Modal/ModalOder'
import Text from "../../Components/Text/Text";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import global from "../../Styles/global";
import TextInput from '../../Components/TextInput/TextSingleInput';

const {height, width} = Dimensions.get("window");
export default class ModalOderView extends ModalOder {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            animationDuration: 150,
            numPhone: '',
            note: ''
        };
    }

    openModal(params) {
        super.openModal();
    }

    onCloseModal() {
        super.onCloseModal();
    }

    renderHeader() {
        return (
            <View>
                <Text text={'Thêm thông tin cho đơn hàng'}
                      color={global.colorF3}
                      fontFamily={global.fontBold}
                      size={global.sizeP20}
                      style={{textAlign: 'center', marginBottom: 20}}/>
            </View>
        );
    }

    renderContent() {
        return (
            <View>
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

            </View>
        );
    }

    renderBottom() {
        return (
            <View style={{flexDirection: 'row'}}>
                <ButtonWithIcon
                    onClick={() => this.onCloseModal()}
                    buttonText={'Tiếp tục mua hàng'}
                    style={{
                        margin: 5,
                        height: 40,
                        backgroundColor: global.colorF3,
                        borderRadius: 20,
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
                    onClick={() => this.props.cartAction.updateLoadCartProduct(this.props.dataCart, this.props.userInfo.uid)}
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
        );
    }
}

ModalOderView.defaultProps = {};

ModalOderView.propTypes = {};
