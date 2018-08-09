
import { combineReducers } from 'redux';
import cart from './cartReducer';
import login from './loginReducer';
const rootReducer = combineReducers ({
    cart,
    login
});
export default rootReducer;