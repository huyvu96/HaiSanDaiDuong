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
                <Text>Screen Name</Text>
            </View>
        );
    }
}

