import firebase from 'react-native-firebase';


class loginService {
    static async setUserInfo(userinfo){
        await firebase.database().ref().child(`User/${userinfo.uid}`).set(userinfo)
    }
    static async getUserInfo(uid, callback){
        await firebase.database().ref(`User/${uid}`).on('value', (userinfo) => {
            if(userinfo.exists())
                callback(userinfo.val());
            else
                callback(false)
        })
    }
    static async updateUserInfo(uid,phoneNumber){
        await firebase.database().ref().child(`User/${uid}/phoneNumber`).set(phoneNumber)
    }
}
module.exports = loginService;