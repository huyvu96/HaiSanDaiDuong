import React, { Component } from 'react';
import {View,Dimensions} from 'react-native';
import styles from '../../Styles/styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import WrapperView from "../../Components/Wrapper/WrapperView";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
const{width} = Dimensions.get('window');
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style ={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<RoundAvatar uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                                             avatarStyle={{height:35, width:35}}/>}
                    body={<Text
                        text='Huy Vũ'
                        color = {global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton nameIcon ='ios-settings' iconStyle ={{fontSize: 35, color: global.colorF3}} />}
                />
                <View style ={{backgroundColor: global.colorC5, height:200,width:'100%'}}/>
                <RoundAvatar uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                             avatarStyle={{height:80, width:80,borderRadius:60, position:'absolute', top: 245 - 80/2 , right: width/2 - 45}}/>
                <WrapperView data={this.props.dataCart} heading={'Lịch sử đặt hàng'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);
  

