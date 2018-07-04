import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    FlatList,
    ScrollView,
    Dimensions,
    Image,
    TouchableNativeFeedback,
    ImageBackground,
    TextInput,
    StatusBar
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import ListHashTag from '../Components/Lists/ListHashTag';
import LinearGradient from 'react-native-linear-gradient'
import FloatingAction from '../Components/FloatingButton';
//import { FloatingAction } from 'react-native-floating-action';
import Wrapper from '../Components/Wrapper/WrapperView';
const { height, width } = Dimensions.get('window')
import styles from '../Styles/styles';
import datat from '../data';
import ModalBox from 'react-native-modalbox';
import ModalCard from '../Components/Modal/ModalCart';
import * as NAME_ACTION from '../Redux/Constants/actionTypes';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import{connect} from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiableSwiper:false,
            swipeToClose: true,
            open: false,
            status: false,
            data: datat,
            dataStre: [],
            modal2: false
        }
        this.onPressProduct = this.onPressProduct.bind(this);
        this.onPressShop = this.onPressShop.bind(this);

    }
    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({ visiableSwiper: true})
            }, 0)
        }
       
    }
    async onPressProduct(id){
        const cart=[];
        const mapping = await this.state.data.map(e=>{
            if (e.id != id) return e;
            return {...e, checked: !e.checked};   
        })
        this.setState({data: mapping}, ()=>{
            
        })
       await this.state.data.map(e=>{
            if(e.id != id) return e;
            if(!e.checked) {
                //this.props.dispatch({type: NAME_ACTION.DELETE_ITEM_TO_CARD, item: e})
                this.state.dataStre.pop(e)
            } else{
               // this.props.dispatch({type: NAME_ACTION.ADD_ITEM_TO_CARD, item: e})
               cart.push(e)
               this.state.dataStre.push(e)
            }
        });
        console.log(mapping);
        console.log(this.state.dataStre)
        //return mapping;
    }
     async onPressShop(id){
        // // const start = await this.state.dataStre.slice(0, id);
        // // const end = await  this.state.dataStre.slice(id + 1);
        // const mapping1  = await this.state.dataStre.map(e=>{
        //     if (e.id != id) return e;
        //     return {...e, checked: !e.checked};   
        // })
        // this.setState({
        //     dataStre: mapping1
        // })
        // const mapping2 = await this.state.data.map(e=>{
        //     if (e.id != id) return e;
        //     return {...e, checked: !e.checked};   
        // })
        // this.setState({data: mapping2})
    }
    render() {
        const{data} = this.state
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={{
                        padding: height / 120, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', position: 'absolute',
                        left: 0,
                        top: 0,
                        zIndex: 100
                    }}>
                        <Icon name='ios-search' style={{ fontSize: height / 20, color: 'white' }} />
                        <Text style={{
                            marginLeft: height / 120, fontSize: height / 40, padding: 5, alignSelf: 'stretch', color: 'white', textAlign: 'center', height: height / 20
                            , borderRadius: height / 20, borderColor: 'white', borderWidth: 0.8, flex: 1
                        }}>Cá thu, cua biển,..v..v</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.wraperSwiper1}>
                            {
                                this.state.visiableSwiper ? (this.state.visiableSwiper && <Swiper
                                    style={styles.wrapperSwiper}
                                    dot={<View style={{ backgroundColor: '#FFF', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    activeDot={<View style={{ backgroundColor: '#e53935', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    autoplay={true}>
                                    <ImageBackground source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2017/1-1487250380868-27-0-400-599-crop-1487303113576.jpg'}} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                    <ImageBackground source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2017/1-1487250380868-27-0-400-599-crop-1487303113576.jpg'}} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground><ImageBackground source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2017/1-1487250380868-27-0-400-599-crop-1487303113576.jpg'}} style={styles.slide}>
                                        <LinearGradient colors={['rgba(0,0,0, 0.7)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']} style={styles.slide} />
                                    </ImageBackground>
                                </Swiper>) : (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                            }
                        </View>
                        <Wrapper heading = 'Hải sản hiếm' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                        <Wrapper heading = 'Cá đại dương' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                        <Wrapper heading = 'Sò - Ốc' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                        <Wrapper heading = 'Cua - Ghẹ' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                        <Wrapper heading = 'Tôm' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                        <Wrapper heading = 'Mực - Bạch Tuột' data ={data.dataCaTuoi} navigation={this.props.navigation} />
                    </View>                   
                </ScrollView>
                <ModalBox
                style={[styles.modal, styles.modal1]}
                isOpen={this.state.open}
                swipeToClose={true}
                position='bottom'
                onClosed={()=> this.setState({open: false})}
                onOpened={this.onOpen}
                backdropPressToClose={false}
                onClosingState={this.onClosingState}>
                <ModalCard
                    nameIcon='ios-arrow-dropdown-circle-outline'
                    heading1='Chọn thêm hải sản'
                    heading2='Giỏ hàng'
                    dataCart={this.state.dataStre}
                    dataShop={this.state.data}
                    onPressCart={this.onPressProduct}
                    onPressShop={this.onPressShop}
                    onPressCheck={()=> this.setState({modal2: true})}
                    onPressIcon={()=> this.setState({ open: false})}
                />
                 </ModalBox>
                 {
                     this.state.open ? (null) : (<FloatingAction onPress ={()=> {this.setState({open : true})}}/>)
                 }
                 <ModalBox
                style={{height:'50%'}}
                isOpen={this.state.modal2}
                swipeToClose={true}
                position='center'
                onClosed={()=> this.setState({modal2: false})}
                onOpened={this.onOpen}
                backdropPressToClose={false}
                onClosingState={this.onClosingState}>
                <Text>Dien so dien thoai vao va ket thuc</Text>
                 </ModalBox>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return { 
         dataCart: state.cart.dataCart,
         dataShop: state.cart.dataShop, 
    };
}

export default connect(mapStateToProps)(Home);
