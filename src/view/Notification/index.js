import React, { Component } from 'react';
import {View} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import NotificationListView from '../../modules/NotificationListView'
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<RoundAvatar uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                                             avatarStyle={{height:35, width:35}}/>}
                    body={<Text
                        text='Thông báo'
                        color = {global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton nameIcon ='md-radio-button-on' iconStyle ={styles.icon} />}
                />
                <NotificationListView data={this.props.dataVideo}/>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
        dataShop: state.cart.dataShop,
        dataVideo: state.cart.dataVideo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: items => dispatch(ACTION.addItemToCart(items)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);


