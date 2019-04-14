import React, { Component } from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import TextComponent from "../Text/Text";
import global from "../../Styles/global";
const { height, width } = Dimensions.get('window');

const IconButton = ({ nameIcon, btnStyle, iconStyle, badge, onClick }) => {
    let buttonStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        //width: width / 3 - 50
    };
    let badgeStyle = {
        position: 'absolute',
        top: 0, left: 0, bottom: 0, right: 0,
        backgroundColor: global.red,
        borderRadius: 10,
        height: 20, width: 20,
        alignItems: 'center',
        justifyContent: 'center'
    };
    return (
        <TouchableOpacity style={[buttonStyle, btnStyle]} onPress={onClick}>
            <Icon name={nameIcon} style={iconStyle} />
            {badge ?
                <View style={badgeStyle}><TextComponent text={badge} size={global.sizeP15} color={global.colorF4}
                    style={{
                        lineHeight: 15,
                        textAlign: 'center'
                    }} /></View> : null}
        </TouchableOpacity>
    );
};

IconButton.propTypes = {
    nameIcon: PropTypes.string,
    badge: PropTypes.string,
    btnStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    iconStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    onClick: PropTypes.func
};

export default IconButton;
