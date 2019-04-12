import React, { Component } from 'react';
import {FlatList,Alert} from 'react-native';
import SeaFoodListItem from "../SeaFoodListItem";
import * as ACTION from "../../Redux/ActionCreator/cartActionCreator";
import {connect} from "react-redux";
import Currency from "../../Global/Currency";
import PropTypes from 'prop-types';
import FloatingButton from "../../Components/Button/FloatingButton";
const SeaFoodListView =({data,onRemove}) =>{
        return (
            <FlatList
                data={data}
                removeClippedSubviews={true}
                horizontal={false}
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
                        onRemove={() => onRemove(item)}
                />}/>
        );
};
SeaFoodListView.propTypes = {
    data: PropTypes.array,
    onRemove: PropTypes.func
};
export default SeaFoodListView;