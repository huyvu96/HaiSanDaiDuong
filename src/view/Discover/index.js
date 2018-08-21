import React, {Component} from 'react';
import {View, Platform, Image,ScrollView} from 'react-native';
import styles from './styles';
import Text from '../../Components/Text/Text';
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import global from "../../Styles/global";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {BarIndicator} from 'react-native-indicators';
import VideoCardView from '../../modules/VideoCardView';
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";

const data = ['http://sohanews.sohacdn.com/thumb_w/660/2017/1-1487250380868-27-0-400-599-crop-1487303113576.jpg', 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/26220388_1794021527277706_1879985102883991837_o.jpg?_nc_cat=0&oh=9543d56811366484f82b97b443a76927&oe=5BA2A9E4'];

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visiableSwiper: false,
            swipeToClose: true,
            open: false,
            status: false,
            modal2: false
        }

    }

    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({visiableSwiper: true})
            }, 0)
        }

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header
                        customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                        leftHeader={<RoundAvatar
                            uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                            avatarStyle={{height: 35, width: 35}}/>}
                        body={<Text
                            text='Khám phá'
                            color={global.colorF3}
                            size={global.sizeP20}
                            fontFamily={global.fontLight}
                            bold={global.fontWeightDark}/>}
                        rightHeader={
                            <IconButton
                                nameIcon='ios-search'
                                        iconStyle={styles.icon}/>}
                    />
                    <View style={styles.wraperSwiper1}>
                        {
                            this.state.visiableSwiper ? (this.state.visiableSwiper && <Swiper
                                style={styles.wrapperSwiper}
                                dot={<View style={styles.dot}/>}
                                activeDot={<View style={styles.act_dot}/>}
                                autoplay={true}>
                                {
                                    data.map((e, i) => {
                                        return <View key={i}>
                                            <Image
                                                   source={{uri: e}}
                                                   style={styles.swipeImage}/>
                                            <LinearGradient
                                                colors={['rgba(0,0,0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']}
                                                style={styles.slide}/>
                                        </View>
                                    })
                                }
                            </Swiper>) : (
                                <View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30}/></View>)
                        }
                    </View>
                    <VideoCardView data = {this.props.dataVideo}/>
                </View>
            </ScrollView>

        );
    }
}
function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
        dataShop: state.cart.dataShop,
        dataVideo: state.cart.dataVideo

    };
}
function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: items => dispatch(ACTION.addItemToCart(items)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover);

