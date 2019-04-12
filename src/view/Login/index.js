import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Animated,
    Keyboard,
    ImageBackground,
    Dimensions,
    TextInput,
    Button
} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import global from "../../Styles/global";
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux';
import {
    AccessToken,
    LoginManager
} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import loginService from '../../services/serviceLogin';
import * as ACTION_LOGIN from "../../Redux/ActionCreator/actionLoginCreators";
import * as ACTION_CART from "../../Redux/ActionCreator/cartActionCreator";
import FastImage from 'react-native-fast-image'

import cartService from '../../services/serviceCart';
import login from "../../Redux/Reducer/loginReducer";
import * as Animatable from "react-native-animatable";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import IconButton from "../../Components/Button/IconButton";
import TextComponent from "../../Components/Text/Text";

const {height, width} = Dimensions.get('window');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '+84',
            isInput: false,
            confirmResult: null,
        };
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(130)
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user.toJSON()});
            } else {
                // User has been signed out, reset the state
                this.setState({
                    user: null,
                    message: '',
                    codeInput: '',
                    phoneNumber: '+84',
                    confirmResult: null,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }

    increaseHeightOfLogin = () => {
        Animated.timing(this.loginHeight, {
            toValue: height,
            duration: 500
        }).start(() => {
            this.setState({
                isInput: true,
            })
        })
    };

    decreaseHeightOfLogin = () => {
        Keyboard.dismiss();
        Animated.timing(this.loginHeight, {
            toValue: 130,
            duration: 500
        }).start(() => {
            this.setState({
                isInput: false,
            })
        })
    };

    renderPhoneNumberInput() {
        const {phoneNumber} = this.state;

        return (
            <View style={{paddingLeft: width / 3 - 80, paddingTop: 100}}>
                <TextComponent text={'Hãy nhập số điện thoại của bạn'} size={global.sizeP16}
                               fontFamily={global.fontRegular}
                               color={global.colorTextPrimary}/>
                <TextInput
                    autoFocus
                    style={{height: 40, marginTop: 15, marginBottom: 15}}
                    onChangeText={value => this.setState({phoneNumber: value})}
                    placeholder={'Phone number ... '}
                    value={phoneNumber}
                />
            </View>
        );
    }

    render() {
        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [130, height],
            outputRange: [1, 0]
        });
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [130, height],
            outputRange: [0, 1]
        });

        return (
            // View lớn nhất
            <View style={{flex: 1}}>
                {/* <StatusBar
                backgroundColor="transparent"
                translucent = {true}
            /> */}
                <ImageBackground
                    source={{uri: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
                    style={{flex: 1}}
                >
                    {/* View này là View trên */}
                    <Animatable.View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        opacity: headerTextOpacity
                    }}>
                        <Animatable.View
                            animation="zoomIn" interationCount={1}
                            style={{
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 100,
                                width: 100,
                                opacity: headerTextOpacity
                            }}>
                            <TextComponent text={'HSĐD'} size={global.sizeP25} fontFamily={global.fontBold}
                                           color={global.colorTextPrimary}/>
                        </Animatable.View>
                    </Animatable.View>

                    {/** BOTTOM HALF **/}
                    <Animatable.View animation="slideInUp" interationCount={1}>
                        <Animated.View
                            style={{
                                height: this.loginHeight,
                                backgroundColor: 'white'
                            }}>
                            {/* Nút back */}
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    height: 60,
                                    width: 60,
                                    top: 15,
                                    left: 10,
                                    zIndex: 100,
                                    opacity: headerBackArrowOpacity,
                                    backgroundColor: 'transparent'
                                }}>
                                <IconButton onClick={() => this.decreaseHeightOfLogin()}
                                            nameIcon={'md-arrow-back'}
                                            btnStyle={{
                                                backgroundColor: global.colorTextPrimary, height: 50,
                                                width: 50, borderRadius: 30,
                                            }}
                                            iconStyle={{color: 'white', fontSize: 30, position: 'relative'}}/>
                            </Animated.View>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    flex: 1,
                                    opacity: headerBackArrowOpacity,
                                    backgroundColor: 'transparent'
                                }}>
                                {/* View chính sign in sign up */}

                                <View style={{flex: 1}}>
                                    {this.renderPhoneNumberInput()}
                                </View>

                            </Animated.View>
                            {/* dòng chữ you need to login with facebook */}
                            {/* Biến mất dòng chữ */}
                            <Animated.View
                                style={{
                                    opacity: headerTextOpacity,
                                    alignItems: 'flex-start',
                                    paddingHorizontal: 25,
                                    marginTop: 25
                                }}
                            >
                                <TextComponent numberOfLines={2}
                                               text={'Hải sản đại dương kính chào !!'}
                                               size={global.sizeP20}
                                               fontFamily={global.fontRegular}
                                               color={global.colorTextPrimary}/>
                            </Animated.View>
                            {/* Button log in facebook */}
                            {/* Biến mất button */}

                            <Animated.View
                                style={{
                                    opacity: headerTextOpacity,
                                }}>
                                <ButtonWithIcon style={{
                                    height: 50,
                                    width: width - 30,
                                    backgroundColor: global.colorTextPrimary,
                                    marginTop: 15,
                                    paddingHorizontal: 25,
                                    alignSelf:'center'
                                }}  buttonText={'Khám phá ngay'} styleText={{
                                    color: global.colorFF,
                                    fontSize: 23,
                                }} onClick={() => this.increaseHeightOfLogin()}/>
                            </Animated.View>
                        </Animated.View>
                        {/* view social network */}
                        {/*<View*/}
                        {/*style={{*/}
                        {/*height: 45,*/}
                        {/*backgroundColor: 'white',*/}
                        {/*alignItems: 'center',*/}
                        {/*}}*/}
                        {/*>*/}
                        {/*<TouchableOpacity*/}
                        {/*onPress={() => this.increaseHeightOfLogin()}*/}
                        {/*>*/}
                        {/*<Text style={{*/}
                        {/*color: '#5a7fdf',*/}
                        {/*fontWeight: 'bold',*/}
                        {/*fontSize: 18*/}
                        {/*}}>*/}
                        {/*Or connect using a social account*/}
                        {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                    </Animatable.View>
                    {/* Nút forward */}
                    <Animated.View
                        style={{
                            position: 'absolute',
                            height: 45,
                            width: width / 3,
                            right: 10,
                            bottom: 10,
                            zIndex: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: headerBackArrowOpacity
                        }}>
                        {
                            this.state.isInput ? <ButtonWithIcon style={{
                                height: 45,
                                width: width / 3 - 15,
                                backgroundColor: global.colorTextPrimary,
                                paddingHorizontal: 15,
                            }} buttonText={'NEXT'} styleText={{
                                lineHeight: 24, textAlign: 'center',
                                color: global.colorFF,
                                fontSize: 23
                            }} onClick={() => this.props.navigation.navigate('TabBar')}/> : null
                        }
                    </Animated.View>
                </ImageBackground>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.login.userInfo,
        isLoadingLogin: state.login.isLoadingLogin,
        dataShop: state.cart.dataShop,
        dataCart: state.cart.dataCart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addUserInfo: users => dispatch(ACTION_LOGIN.userLoaded(users)),
        userLoginFail: () => dispatch(ACTION_LOGIN.userLoading()),
        getProduct: () => dispatch(ACTION_CART.getDataProduct())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


