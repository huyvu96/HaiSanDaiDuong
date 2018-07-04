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
import ListHashTag from '../Lists/ListHashTag';
const { height, width } = Dimensions.get('window')
import styles from './styles';
import PropTypes from "prop-types";

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
export default class WrapperView extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const {heading, data, navigation} = this.props;
        return (
            <View style={styles.wraper2}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#F4F4F4'}}>
                    <View style={styles.viewPage}>
                        <Text style={styles.tron}>#</Text>
                        <Text style={styles.titlePage}>{heading}</Text>
                    </View>
                    <TouchableNativeFeedback onPress={()=> this.props.onPress}>
                         <Text style={[styles.tron,styles.viewPage, {textDecorationLine: 'underline',fontWeight: '200', fontSize: height / 40, marginRight: 5 }]}>Xem thêm</Text>
                    </TouchableNativeFeedback>
                </View>
                <View style={{backgroundColor:'#FFFFFF', borderRadius: 7, borderColor:'#FFFFFF', borderWidth:1}}>
                <ListHashTag data={data} navigation={navigation}/>
                </View>
                {/* {!this.state.visiableSwiper  ? (<View style={styles.viewAcdicator}><BarIndicator color='white' count={4} size={30} /></View>) */}
            </View>   
        );
    }
}
WrapperView.defaultProps = {
    data: [],
  };
  
  WrapperView.propTypes = {
    heading: PropTypes.string,
    data:PropTypes.array.isRequired,
    //onPress: PropTypes.func,
  };
  

