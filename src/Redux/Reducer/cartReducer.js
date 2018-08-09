import * as NAME_ACTION from '../Constants/actionTypes';
import defaultState from "./defaultState";


export default function userLoginReducer(state = defaultState, action) {
    switch (action.type) {
        case NAME_ACTION.ITEM_IS_SELECTED:
            return {...state, dataShop:state.dataShop.map(e=>{
                if(e.id !== action.id) return e;
                return {...e, checked: true};
                })};
        case NAME_ACTION.ADD_ITEM_TO_CARD:
            return {...state, dataCart:state.dataShop.filter(e => e.checked===true)};
        case NAME_ACTION.DELETE_ITEM_TO_CARD:
            return {...state, dataShop:state.dataShop.map(e=>{
                    if(e.id !== action.id) return e;
                    return {...e, checked: false};
                })};
        case NAME_ACTION.ADD_TOTAL_PRICE:
            let arr=[];
            let total ='';
            if(state.dataCart.length !== 0){
                try{
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    state.dataCart.forEach(e =>{
                        if(e.price !== 'Liên hệ'){
                            arr.push(parseInt(e.price))
                        }
                    });
                    total = arr.reduce(reducer);
                }catch (e) {
                    console.log(e)
                }

            }
            return {...state, totalPrice: total};
        case NAME_ACTION.GET_PRODUCT_LOADING:
            return {...state, isLoadingProduct: true};
        case NAME_ACTION.GET_PRODUCT_SUCCESS:
            return {...state, isLoadingProduct: false, dataShop : action.data};
        case NAME_ACTION.GET_PRODUCT_FAIL:
            return {...state, isLoadingProduct: false, dataShop : []};
        case NAME_ACTION.UPLOAD_CART_PRODUCT_LOADING:
            return {...state, isLoadingUploadCart: true};
        case NAME_ACTION.UPLOAD_CART_PRODUCT_SUCCESS:
            return {...state, isLoadingUploadCart: false, dataCart : []};
        case NAME_ACTION.UPLOAD_CART_PRODUCT_FAIL:
            return {...state, isLoadingUploadCart: false};
        default:
            return state;
    }
}
