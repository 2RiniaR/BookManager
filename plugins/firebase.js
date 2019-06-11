import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCDX62HSpkgiJkNAXr24h40_Dq-VIvz4lk',
    authDomain: 'venture-labo-manager.firebaseapp.com',
    databaseURL: 'https://venture-labo-manager.firebaseio.com',
    projectId: 'venture-labo-manager',
    storageBucket: 'venture-labo-manager.appspot.com',
    messagingSenderId: '842803090496',
    appId: '1:842803090496:web:93f3f11d281b3cac'
  })
}

export default firebase
