import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';
import global from '../../Styles/global';
const {
    height,
    width
} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) * 330;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.coloF3,
    },
    wraperSwiper1: {
        height: height / 3.5,
        backgroundColor: '#DEF3F6'
    },
    swipeImage: {
        height: height / 3.5,
        width: '100%'
    },
    slide: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    viewPage: {
        flexDirection: 'row',
        marginTop: height / 50,
        alignItems: 'center'
    },
    viewAcdicator: {
        height: height / 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        backgroundColor: '#FFF',
        width: 8,
        height: 8,
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10
    },
    act_dot: {
        backgroundColor: global.colorTextPrimary,
        width: 8,
        height: 8,
        borderRadius: 7,
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        fontSize: 35,
        color: global.colorF3
    }
});