import {StyleSheet, Dimensions} from 'react-native';
import global from "../../Styles/global";

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    viewItem: {
        elevation: 2,
        backgroundColor: '#FFF',
        margin: 5,
        padding:5,
        //alignItems: 'center',
        flex: 1,
        borderRadius: height / 100,
        overflow: 'hidden',
    },
    imageItem: {
        //alignSelf: 'stretch',
        height: 50,
        width: 50,
        // position: 'relative',
        //resizeMode: 'cover',
    },
    viewLeft: {
        //alignItems: 'center',
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        alignItems:'center',
        flex: 1
    },
    nameFish: {
        //textAlign: 'center',
    },
    buttonStyle: {
        height: 30,
        width: '10%',
        flex: 0.4
    },
    textStyle:{
        fontSize: global.sizeP16,
        fontFamily: global.fontRegular
    },
    videoStyle:{
        height: 250,
        width: '100%',
        borderRadius:10
    },
    gradient:{
        position: "absolute",
        borderRadius:10,
        width: '100%',
        margin:5,
        height:250,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    }
});
export default styles;