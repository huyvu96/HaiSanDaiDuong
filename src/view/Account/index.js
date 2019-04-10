import React, {Component} from 'react';
import {View, Dimensions, Image, Alert} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import FastImage from 'react-native-fast-image'

const {width} = Dimensions.get('window');

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    orderHistory() {
        //this.props.navigation.navigate('History');
        Alert.alert("I lovve yoou react native")
    }

    render() {
        const {
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
            sex
        } = this.props.userInfo;
        return (
            <View style={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<RoundAvatar
                        uriImage={'https://scontent.fsgn5-2.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=107&_nc_oc=AQmb-5-k1sI5qSeloiNBLt4y58-QAVdE_XvJd7fSengFmRhWvfjXe7nxwMOobekhhyg&_nc_ht=scontent.fsgn5-2.fna&oh=d017d0d67ad9564a80d1125e7d3fc60d&oe=5D48AD2F'}
                        avatarStyle={{height: 35, width: 35}}/>}
                    body={<Text
                        text={displayName}
                        color={global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontBold}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton nameIcon='ios-settings' iconStyle={styles.icon}
                                    onClick={() => this.props.navigation.navigate('History')}/>}
                />
                <FastImage source={{uri: photoURL}}
                           blurRadius={0.5}
                           resizeMode={FastImage.resizeMode.cover}
                           style={styles.image}
                />
                <RoundAvatar uriImage={photoURL}
                             avatarStyle={styles.round_avatar}/>

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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
  

