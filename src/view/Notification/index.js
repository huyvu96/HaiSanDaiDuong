import React, { Component } from 'react';
import {View} from 'react-native';
import styles from '../../Styles/styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";

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
                    leftHeader={<IconButton nameIcon ='ios-search' iconStyle ={{fontSize: 35, color: global.colorF3}}/>}
                    body={<Text
                        text='Thông báo'
                        color = {global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton nameIcon ='md-list' iconStyle ={{fontSize: 35, color: global.colorF3}} />}
                />
            </View>
        );
    }
}

export default Notification;


