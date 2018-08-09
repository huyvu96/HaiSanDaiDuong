import firebase from 'react-native-firebase';


class cartService {
    static async saveDataPropduct(callback) {
        await firebase.database().ref().child(`Propduct`).push(callback);
    }
    static getProductByCategory(){
        let items = [];
        firebase.database().ref('Propduct').on('value', (snap) => {
            snap.forEach((child) => {
                let item = child.val();
                item['key'] = child.key;
                items.push(item);
            });
        });
        return items;
    }
    static async saveProductCart(callback, uid){
        await firebase.database().ref().child(`Cart/${uid}`).push(callback);
    }
}
module.exports = cartService;