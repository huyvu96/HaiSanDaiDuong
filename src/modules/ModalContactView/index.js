import React, { Commponent } from "react";
import { View, TouchableOpacity, Dimensions, Platform, Image, LayoutAnimation, Alert, Linking, Button } from "react-native";
import ModalContact from '../../Components/Modal/ModalContact'
import Text from "../../Components/Text/Text";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import global from "../../Styles/global";
import TextInput from '../../Components/TextInput/TextSingleInput';
import moment from 'moment';
import call from "react-native-phone-call";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";

const args = {
    number: '0934197445', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
const { height, width } = Dimensions.get("window");
export default class ModalContactView extends ModalContact {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            animationDuration: 150,
            numPhone: '',
            note: '',
            total: '',
            warning: false,
            link_facebook: 'https://www.facebook.com/Haisandaiduong3030/',
            link_web: 'http://haisandaiduong.com/',
        };
        this.openModal = this.openModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }
    openModal(params) {
        // this.setState({
        //     numPhone: params.numPhone,
        //     total: params.total
        // });
        super.openModal();
    }

    onCloseModal() {
        this.setState({
            warning: false
        });
        this.props.navigation.goBack();
        this.closeModal();
    }
    renderHeader() {
        return null;
    }
    openLink(url) {
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                Alert.alert("Thông báo", "Trình duyệt của bạn không hổ trợ")
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => { Alert.alert("Thông báo", "Kiểm tra trình duyệt của bạn, có lỗi xảy ra :" + err) });
    }
    renderContent() {
        return (
            <View>
                <ButtonWithIcon
                    onClick={() => call(args).catch(console.error)}
                    style={{ marginTop: 10, backgroundColor: global.colorTextPrimary, paddingHorizontal: 20 }}
                    buttonText={'Liên hệ cửa hàng'}
                    styleText={{
                        color: global.colorFF,
                        fontSize: global.sizeP16,
                        fontFamily: global.fontBold,
                        alignSelf: 'center',
                        //textDecorationLine: 'underline',
                        textAlign: 'center'
                    }}
                />
                <ButtonWithIcon
                    onClick={() => this.openLink(this.state.link_web)}
                    style={{ marginTop: 10, backgroundColor: global.colorTextPrimary, paddingHorizontal: 20 }}
                    buttonText={'Website'}
                    styleText={{
                        color: global.colorFF,
                        fontSize: global.sizeP16,
                        fontFamily: global.fontBold,
                        alignSelf: 'center',
                        //textDecorationLine: 'underline',
                        textAlign: 'center'
                    }}
                />
                <ButtonWithIcon
                    onClick={() => this.openLink(this.state.link_facebook)}
                    style={{ marginTop: 10, marginBottom: 10, backgroundColor: global.colorTextPrimary, paddingHorizontal: 20 }}
                    buttonText={'Fanpage'}
                    styleText={{
                        color: global.colorFF,
                        fontSize: global.sizeP16,
                        fontFamily: global.fontBold,
                        alignSelf: 'center',
                        //textDecorationLine: 'underline',
                        textAlign: 'center'
                    }}
                />

            </View>
        );
    }
    renderBottom() {
        return null;
    }
}

ModalContactView.defaultProps = {};

ModalContactView.propTypes = {};
