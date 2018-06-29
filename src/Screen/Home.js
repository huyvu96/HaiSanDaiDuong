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
const { height, width } = Dimensions.get('window')
import styles from '../Styles/styles';
import data from '../data';
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
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visiableSwiper: false,
        }

    }
    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({ visiableSwiper: true })
            }, 0)
        }
    }
    render() {
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
                        }}>Search video, channel for you</Text>
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
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Cá đại dương</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'Phim lẻ'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                               !this.state.visiableSwiper ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Sò - Ốc</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'Phim bộ'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                !this.state.visiableSwiper  ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Cua - Ghẹ</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'Phim bộ'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                !this.state.visiableSwiper  ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Tôm</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'TV Show'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                !this.state.visiableSwiper  ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>     
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Mực - Bạch Tuột</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'TV Show'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                !this.state.visiableSwiper ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>      
                        <View style={styles.wraper2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.viewPage}>
                                    <Text style={styles.tron}>#</Text>
                                    <Text style={styles.titlePage}>Hải Sản Hiếm</Text>
                                </View>
                                <TouchableNativeFeedback onPress={()=> this.props.navigation.navigate('ScreenViewMore',{category:'TV Show'})}>
                                    <View style={styles.viewPage}>
                                        <Text style={[styles.tron, { fontWeight: '200', fontSize: height / 40 }]}>Xem thêm</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            {
                                !this.state.visiableSwiper  ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>)
                                    : (<ListHashTag data={data} navigation={this.props.navigation} />)
                            }
                        </View>   
                    </View>
                    
                </ScrollView>
                <FloatingAction
                    // showBackground={false}
                    // actions={[]}
                    // floatingIcon={<Icon name='md-cart' style={{ fontSize: height / 20, color: 'white', alignSelf:'center' }} />                }
                    />
            </View>
        );
    }
}

