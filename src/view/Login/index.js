import React, {Component} from 'react';
import {View,Image,TouchableNativeFeedback} from 'react-native';
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

import cartService from '../../services/serviceCart';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onFacebook = this.onFacebook.bind(this);
    }
    componentWillMount(){
        this.props.getProduct();
    }
    onFacebook() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                return firebase.auth().signInAndRetrieveDataWithCredential(credential);
            })
            .then((currentUser) => {
                loginService.getUserInfo(currentUser.user.uid, (user) => {
                    if (user) {
                        this.props.addUserInfo(user);
                        this.props.navigation.push('TabBar');
                    } else {
                        let userinfo = {
                            displayName: currentUser.user.displayName,
                            email: currentUser.user.email,
                            photoURL: currentUser.user.photoURL,
                            uid: currentUser.user.uid,
                            phoneNumber: "Chưa cập nhật",
                            sex: currentUser.additionalUserInfo.profile.gender || "Chưa cập nhật",
                        };
                        loginService.setUserInfo(userinfo);
                        this.props.addUserInfo(userinfo);
                        this.props.navigation.push('TabBar');
                    }
                })
            })
            .catch((error) => {
                this.props.userLoginFail();
                console.log('hehe', error);
            });
    }

    render() {
        console.log('data ve',this.props.dataShop);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image_background}
                    source={{uri: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
                />
                <TouchableNativeFeedback onPress={() => this.onFacebook()}>
                    <View
                        style={styles.btn_login}
                    >
                        <Icon name='logo-facebook' style={styles.icon_facebook} />
                        <Text text={'Login with facebook'}
                            size={global.sizeP20}
                            color={global.colorFF}
                            style={{marginLeft: 20}}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {userInfo, isLoadingLogin} = state.login.userInfo;
    return {
        userInfo,
        isLoadingLogin,
        dataShop: state.cart.dataShop
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


