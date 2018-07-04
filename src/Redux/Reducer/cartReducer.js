
import  * as NAME_ACTION from '../Constants/actionTypes';

const defaultState= {
    dataCart: [],
    dataShop: [{
        id: 1,
        checked: false,
        title: 'Ốc',
        price:'Liên hệ',
        image: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen1.jpg',
    },{
        id:2,
        checked: false,
        title: 'Cá thu',
        price:'Liên hệ',
        image: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen2.jpg'
    },{
        id: 3,
        checked: false,
        title: 'Tôm',
        price:'Liên hệ',
        image: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'
    },{
        id: 4,
        checked: false,
        title: 'Mực',
        price:'Liên hệ',
        image: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen4.jpg'
    },{
        id: 5,
        checked: false,
        title: 'Ghẹ',
        price:'Liên hệ',
        image: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen1.jpg',
    }]
}

export default function userLoginReducer(state = defaultState, action){
    switch(action.type){
        case NAME_ACTION.ADD_ITEM_TO_CARD:
        return {...state, dataShop: state.dataShop.map(e =>{
                if(e.id !== action.id) return e;
                return {...e, checked : !e.checked}
        })};
        // case NAME_ACTION.DELETE_ITEM_TO_CARD:
        // return {...state, dataCart: state.dataCart.pop(action.item)};
        default: return state;
    }
}