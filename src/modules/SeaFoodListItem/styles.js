import {StyleSheet, Dimensions} from 'react-native';
import global from "../../Styles/global";

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    viewItem: {
        elevation: 2,
        backgroundColor: '#FFF',
        margin: 5,
        padding:5,
        alignItems: 'center',
        flexDirection: 'row', flex: 1,
        borderRadius: height / 100,
        overflow: 'hidden',
    },
    imageItem: {
        //alignSelf: 'stretch',
        height: height / 9,
        width: height / 9,
        borderRadius: 10,
        // position: 'relative',
        resizeMode: 'cover',
    },
    viewLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    nameFish: {
        textAlign: 'center',
    },
    buttonStyle: {
        height: 30,
        width: '10%',
        flex: 0.4
    },
    textStyle:{
        fontSize: global.sizeP16,
        fontFamily: global.fontRegular
    }
});
export default styles;