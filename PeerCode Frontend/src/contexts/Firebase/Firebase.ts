import app from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import firebase from 'firebase'

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
class Firebase{
    reDB: app.database.Database;
    reSR: app.storage.Storage;
    constructor(){
        if (!firebase.apps.length) {
        app.initializeApp(firebaseConfig)
        }
        this.reDB=app.database();
        this.reSR=app.storage();
    }
    add_user = (id:any) =>
    this.reDB.ref(`live_users/${id}`)
    
    push_update = (id:any) =>
    this.reDB.ref(`live_users/${id}/`)
    
    getcode = (id:any) =>
    this.reDB.ref(`live_users/${id}`)
}
export default Firebase;