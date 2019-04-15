import React, { Commponent } from "react";
import { View, TouchableOpacity, Dimensions, Platform, Image, LayoutAnimation, Alert } from "react-native";
import ModalOder from '../../Components/Modal/ModalOder'
import Text from "../../Components/Text/Text";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import global from "../../Styles/global";
import TextInput from '../../Components/TextInput/TextSingleInput';
import moment from 'moment';

const { height, width } = Dimensions.get("window");
export default class ModalOderView extends ModalOder {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            animationDuration: 150,
            numPhone: '',
            note: '',
            total: '',
            warning: false
        };
        this.openModal = this.openModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onAddCartToSever = this.onAddCartToSever.bind(this);
    }

    openModal(params) {
        this.setState({
            numPhone: params.numPhone,
            total: params.total
        });
        super.openModal();
    }

    onCloseModal() {
        this.setState({
            warning: false
        });
        this.props.navigation.goBack();
        this.closeModal();
    }
    _onUpdate(item) {
        Alert.alert(
            null,
            'Bạn có muốn xoá sản phẩm này ?',
            [
                { text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Có', onPress: () => {
                        this.props.cartAction.deleteItemCheck(item.id)
                    }
                },
            ],
            { cancelable: false }
        )
    }
    onAddCartToSever() {
        const { numPhone } = this.state;
        if (numPhone && numPhone.length >= 10) {
            let data = {
                data: this.props.dataCart,
                uid: this.props.userInfo.uid,
                numPhone: numPhone,
                note: this.state.note,
                timeIn: moment(new Date()).format("DD/MM/YYYY hh:mm:ss"),
                total: this.state.total
            };
            this.props.cartAction.updateLoadCartProduct(data);
            this.onCloseModal();
            this.setState({
                numPhone: '',
                note: ''
            })
        } else {
            this.setState({
                warning: true
            })
        }
    }

    renderHeader() {
        return (
            <View>
                <Text text={'Thêm thông tin cho đơn hàng'}
                    color={global.colorF3}
                    fontFamily={global.fontBold}
                    size={global.sizeP20}
                    style={{ textAlign: 'center', marginBottom: 20 }} />
            </View>
        );
    }

    renderContent() {
        return (
            <View>
                <TextInput
                    value={this.state.numPhone}
                    onChangeText={input => this.setState({ numPhone: input, warning: false })}
                    nameIcon={'ios-call-outline'}
                    placeholder={'Hãy để lại số điện thoại của bạn'}
                    warning={this.state.warning}
                    onFocus={() => this.setState({ warning: false })}
                    onSubmitEditing={() => this.setState({ warning: false })}
                    keyboardType={'numeric'}
                    maxLength={11}
                    returnKeyType={'done'} />
                <TextInput
                    value={this.state.note}
                    onChangeText={input => this.setState({ note: input })}
                    nameIcon={'ios-clipboard-outline'}
                    placeholder={'Ghi chú khác'}
                    multiline={true}
                    style={{ textAlignVertical: "top" }}
                    maxLength={100}
                    returnKeyType={'done'}
                    returnKeyLabel={'Done'}
                    keyboardType={'email-address'}
                    numberOfLines={4} />

            </View>
        );
    }

    renderBottom() {
        return (
            <View style={{ flexDirection: 'row' }}>
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
                    onClick={() => this.onAddCartToSever()}
                    buttonText={'Gửi đơn hàng'}
                    style={{
                        margin: 5,
                        height: 40,
                        backgroundColor: global.red,
                        borderRadius: 20,
                        flex: 1,
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
