import React, { Component } from 'react';
import {FlatList,Alert} from 'react-native';
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import Currency from "../../Global/Currency";
import NotificationListItem from "../NotificationListItem";

class NotificationListView extends Component {

    render() {
        return (
            <FlatList
                data={this.props.data}
                removeClippedSubviews={true}
                horizontal={false}
                // contentContainerStyle={{padding:10}}
                automaticallyAdjustContentInsets={true}
                extraData= {this.props}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) =>
                    <NotificationListItem
                        index={index}
                        title={item.title}
                        uriImage={'https://scontent.fsgn5-1.fna.fbcdn.net/v/t31.0-8/28947677_2062594664016900_292927065248317668_o.jpg?_nc_cat=0&oh=775d76fd07b115764f1f664753d00866&oe=5BE4B82F'}
                        uriVideo={item.uriVideo}
                        subText={item.releaseDate}/>}
            />
        );
    }
}
function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: id => dispatch(ACTION.addItemToCart(id)),
        deleteItemCheck: id => dispatch(ACTION.deleteItemCheck(id)),
        addCartCheck: id => dispatch(ACTION.addCartCheck(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationListView);