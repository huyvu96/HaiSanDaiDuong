import { StyleSheet ,Platform} from 'react-native';

 const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:"#f3f3f3",
      // marginTop: 20,
        justifyContent:'center',

    },
    wrapper:{
        //marginLeft:15,
        //marginRight: 10,
        paddingLeft:15, paddingRight:15,
        flexDirection: 'row',
        justifyContent:"space-between",
        flex:1,
        alignItems: 'center',
    },
    leftHeader:{width:50,alignItems:'flex-start'},
    rightHeader:{width:50,alignItems:'flex-end'},
    bodyHeader:{ flex: 1, maxWidth: 200, alignItems: "center" }
});
export default styles;