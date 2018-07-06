import {StyleSheet,Dimensions } from 'react-native';
import global from "../../Styles/global";
const { height ,width} = Dimensions.get('window');

const styles = StyleSheet.create({
    viewItem:
        {
            elevation: 2,
            backgroundColor: '#FFF',
            height: 250,
            width: (width - (height / 120 * 4)) / 2,
            margin: height / 120,
            borderRadius: height / 100,
            overflow: 'hidden'
        },
    imageItem:
        {
            height: 188,
            width: width / 2,
            resizeMode: 'cover'
        },
    styleTextName: {
        opacity: 0.8,

    },
    styleSubText:{
        marginTop:5,
        opacity: 0.8,
    },
    viewText:{
        marginLeft: 10,
        marginTop:5
    },
    imageItemLinear: {height: height / 2.5, width: width / 2, position: 'absolute'},


});
export default styles;