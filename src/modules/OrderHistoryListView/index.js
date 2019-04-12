import React, { Component } from 'react';
import {FlatList,Alert} from 'react-native';
import OrderHistoryListItem from '../OrderHistoryListItem';
import PropTypes from 'prop-types';
const OrderHistoryListView = ({data}) =>{
    return(
        <FlatList
                data={data}
                removeClippedSubviews={true}
                extraData={this.props}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item,index})=>
                    <OrderHistoryListItem
                        id={item.id}
                        time={item.time}
                        total={item.total}
                        data={item.product}
                     />
                }
        />
    );
}

OrderHistoryListView.propTypes = {
    data: PropTypes.array,
};
export default OrderHistoryListView;