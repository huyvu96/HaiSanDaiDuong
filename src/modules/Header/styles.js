import { StyleSheet, Platform, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#f3f3f3",
        // marginTop: 20,
        justifyContent: 'center',
    },
    wrapper: {
        //marginLeft:15,
        //marginRight: 10,
        paddingLeft: 15, paddingRight: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1,
        alignItems: 'center',
    },
    leftHeader: { maxWidth: width / 2 - 150, width: width / 2 - 100, alignItems: 'flex-start' },
    rightHeader: { maxWidth: width / 2 - 150, width: width / 2 - 100, alignItems: 'flex-end' },
    bodyHeader: { flex: 2, alignItems: "center" }
});
export default styles;