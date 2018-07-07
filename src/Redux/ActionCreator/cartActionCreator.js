import * as NAME_ACTION from '../Constants/actionTypes';


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
export function addCartCheck(id){
    return async (dispatch) =>{
        await dispatch(isSelectedItem(id));
        await dispatch(addItemToCart());
        await dispatch(mathTotal())
    }
}
export function deleteItemCheck(id){
    return async (dispatch) =>{
        await dispatch(deleteItemCart(id));
        await dispatch(addItemToCart());
        await dispatch(mathTotal())
    }
}