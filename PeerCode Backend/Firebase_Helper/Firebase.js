var firebase=require('firebase')
var app=require('firebase/app')
var firebaseConfig = {
    apiKey: "AIzaSyD1TUI1UGhmAiy_L5KWwr8hgZyrJrflFMA",
    authDomain: "peercode-b0a64.firebaseapp.com",
    databaseURL: "https://peercode-b0a64.firebaseio.com",
    projectId: "peercode-b0a64",
    storageBucket: "peercode-b0a64.appspot.com",
    messagingSenderId: "108456705933",
    appId: "1:108456705933:web:cbf6186f28eac489a647c4",
    measurementId: "G-VT4DT027JY"
};
class FirebaseClass{
    constructor(){
        if (!firebase.apps.length) {
        app.initializeApp(firebaseConfig)
        }
        this.reDB=app.database();
        this.reSR=app.storage();
    }
    get_users = () =>
    this.reDB.ref(`live_users/`)
    getcode = (id) =>
    this.reDB.ref(`live_users/${id}`)
}
module.exports.FirebaseClass