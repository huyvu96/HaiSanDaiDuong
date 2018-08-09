import * as NAME_ACTION from '../Constants/actionTypes';
import defaultState from "./defaultState";


export default function loginReducer(state = defaultState, action){
    switch(action.type){
        case NAME_ACTION.USER_LOGOUT:
            return {...state, userInfo: null};
        case NAME_ACTION.USER_LOADED:
            return {...state, userInfo: action.userInfo, isLoadingLogin: false,};
        case NAME_ACTION.USER_LOADING:
            return {...state, isLoadingLogin: true};
        default: return state;
    }
}
