import React, { Component } from 'react';
import {FlatList,Alert} from 'react-native';
import SeaFoodListItem from "../SeaFoodListItem";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import Currency from "../../Global/Currency";

class SeaFoodListView extends Component {
    _onRemove(item){
        Alert.alert(
            null,
            'Bạn có muốn xoá sản phẩm này ?',
            [
                {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Có', onPress: () =>   {
                        this.props.deleteItemCheck(item.id)
                    }},
            ],
            { cancelable: false }
        )
    }
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
                    <SeaFoodListItem
                        index={index}
                        title={item.title}
                        uriImage={item.image}
                        subText={item.price !== 'Liên hệ' ? Currency.convertNumberToCurrency(item.price) + ' / Kg' : item.price}
                        onRemove={() => this._onRemove(item)}
                />}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeaFoodListView);