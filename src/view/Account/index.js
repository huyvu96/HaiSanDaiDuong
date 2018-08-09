import React, {Component} from 'react';
import {View, Dimensions, Image} from 'react-native';
import styles from '../../Styles/styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import WrapperView from "../../Components/Wrapper/WrapperView";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";

const {width} = Dimensions.get('window');

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
        console.log(this.props.userInfo);
        return (
            <View style={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<RoundAvatar uriImage={photoURL}
                                             avatarStyle={{height: 35, width: 35}}/>}
                    body={<Text
                        text={displayName}
                        color={global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton nameIcon='ios-settings' iconStyle={{fontSize: 35, color: global.colorF3}}/>}
                />
                <Image source={{uri: photoURL}}
                       resizeMode={Image.resizeMode.cover}
                       blurRadius={0.5}
                       style={{backgroundColor: global.colorC5, height: 200, width: '100%'}}
                />
                <RoundAvatar uriImage={photoURL}
                             avatarStyle={{
                                 height: 80,
                                 width: 80,
                                 borderRadius: 60,
                                 position: 'absolute',
                                 top: 245 - 80 / 2,
                                 right: width / 2 - 45
                             }}/>
                <WrapperView data={this.props.dataCart} heading={'Lịch sử đặt hàng'}/>
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
  

