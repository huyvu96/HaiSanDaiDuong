import * as NAME_ACTION from '../Constants/actionTypes';

export function userLoadOut() {
    return {
        type: NAME_ACTION.USER_LOGOUT
    }
}
export function userLoaded(userInfo) {
    return {
        type: NAME_ACTION.USER_LOADED,
        userInfo
    }
}
export function userLoading() {
    return {
        type: NAME_ACTION.USER_LOADING
    }
}