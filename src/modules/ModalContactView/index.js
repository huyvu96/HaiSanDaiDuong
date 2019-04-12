import React, {Commponent} from "react";
import {View, TouchableOpacity, Dimensions, Platform, Image, LayoutAnimation, Alert,Linking,Button} from "react-native";
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
const {height, width} = Dimensions.get("window");
export default class ModalContactView extends ModalContact {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            animationDuration: 150,
            numPhone: '',
            note: '',
            total:'',
            warning: false,
            link_facebook: 'https://www.facebook.com/Haisandaiduong3030/',
            link_web: 'http://haisandaiduong.com/',
        };
        this.openModal = this.openModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
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
    renderHeader() {
        return (
            <View style={{alignItems:'center',height:80}}>
               <RoundAvatar
                            uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                            avatarStyle={{height: 80, width: 80,borderRadius:40,position:'absolute'}}/>
            </View>
        );
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
                        buttonText={'Liên hệ hải sản đại dương'}
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
                        onClick={() =>  this.openLink(this.state.link_web) }
                        buttonText={'Liên hệ website'}
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
                        onClick={() => this.openLink(this.state.link_facebook)}
                        buttonText={'Liên hện Fanpage'}
                        styleText={{
                            color: global.colorTextPrimary,
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

ModalContactView.defaultProps = {};

ModalContactView.propTypes = {};
