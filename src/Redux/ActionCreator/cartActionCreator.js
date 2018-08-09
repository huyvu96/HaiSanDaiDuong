import * as NAME_ACTION from '../Constants/actionTypes';
import cartService from '../../services/serviceCart';

export function addItemToCart() {
    return {
        type: NAME_ACTION.ADD_ITEM_TO_CARD,
    }
}

export function isSelectedItem(id) {
    return {
        type: NAME_ACTION.ITEM_IS_SELECTED,
        id
    }
}

export function deleteItemCart(id) {
    return {
        type: NAME_ACTION.DELETE_ITEM_TO_CARD,
        id
    }
}

export function mathTotal() {
    return {
        type: NAME_ACTION.ADD_TOTAL_PRICE
    }
}

export function getDataProductLoading() {
    return {
        type: NAME_ACTION.GET_PRODUCT_LOADING,
    }
}

export function getDataProductSucess(data) {
    return {
        type: NAME_ACTION.GET_PRODUCT_SUCCESS,
        data
    }
}

export function getDataProductFail() {
    return {
        type: NAME_ACTION.GET_PRODUCT_FAIL
    }
}

export function uploadDataCartProductLoading() {
    return {
        type: NAME_ACTION.UPLOAD_CART_PRODUCT_LOADING,
    }
}

export function uploadDataCartProductSucess() {
    return {
        type: NAME_ACTION.UPLOAD_CART_PRODUCT_SUCCESS,
    }
}

export function uploadDataCartProductFail() {
    return {
        type: NAME_ACTION.UPLOAD_CART_PRODUCT_FAIL,
    }
}

export function addCartCheck(id) {
    return async (dispatch) => {
        await dispatch(isSelectedItem(id));
        await dispatch(addItemToCart());
        await dispatch(mathTotal())
    }
}

export function deleteItemCheck(id) {
    return async (dispatch) => {
        await dispatch(deleteItemCart(id));
        await dispatch(addItemToCart());
        await dispatch(mathTotal())
    }
}

export function getDataProduct() {
    return async (dispatch) => {
        await dispatch(getDataProductLoading());
        let data = await cartService.getProductByCategory();
        if (data) {
            dispatch(getDataProductSucess(data));
        } else {
            dispatch(getDataProductFail())
        }
    }
}

export function updateLoadCartProduct(data,uid){
    return async (dispatch) =>{
        console.log('vao roi', data);
        await dispatch(uploadDataCartProductLoading());
        if(data){
            console.log('vao roi 2');
            await cartService.saveProductCart(data,uid);
            dispatch(uploadDataCartProductSucess());
        } else {
            dispatch(uploadDataCartProductFail());
        }
    }
}