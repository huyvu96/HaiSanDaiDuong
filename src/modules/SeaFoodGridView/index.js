import React, { Component } from 'react';
import {FlatList, Dimensions,} from 'react-native';
import SeaFoodItem from "../SeaFoodItem";
export default class SeaFoodGirdView extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     data: this.props.data,
        //     page: 1,
        //     refreshing: false,
        // };
    }

    // componentDidMount() {
    //       this.makeRemoteRequest();
    // }

    //  makeRemoteRequest = async () => {
    //         const { page } = this.state;
    //         //console.log("con cho ne"+ page)
    //          await setTimeout(()=>{
    //             this.props.fectchData(page, this.props.nameFecth);
    //         }, 1000);
    //         setTimeout(()=>{
    //                 this.setState({
    //                     data: page === 1 ? this.props.dataFecth : [...this.state.data, ...this.props.dataFecth],
    //                 });
    //             }, 1500);
    // };

    // handleMore = ()=>{
    //     this.setState({
    //         page: this.state.page + 1
    //     }, ()=>{
    //         this.makeRemoteRequest();
    //     })
    // }
    // renderFooter = () => {
    //     // if (!this.props.loading) return null;
    //     return (
    //         this.props.loading ? (null) : (<View style={[styles.viewAcdicator,{height: undefined,paddingVertical: 20}]}><BallIndicator color='white'  size={30} /></View>   
    //     ) );
    // };
    render() {
        return (
                <FlatList
                    data={this.props.data}
                    removeClippedSubviews={true}
                    horizontal={false}
                    numColumns={2}
                    automaticallyAdjustContentInsets={true}
                    extraData={this.state}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) =>
                    <SeaFoodItem
                        uriImage={item.image}
                        title={item.title}
                        subText={item.price}
                        index={index}
                    />
                    }
                    //onEndReached={this.handleMore}
                   // onEndReachedThreshold={0.2}
                    //  contentContainerStyle={{padding:height/60}}
                    //ItemSeparatorComponent = {() => {return (<View style = {{width: height/ 50,}}/>)}}
                    // ListFooterComponent={this.renderFooter}
                    />
        );
    }
}