import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJcT9VPKXlUhEeUNO-hMoZ1OdzF8AgRuE',
  authDomain: 'plans-app-42234.firebaseapp.com',
  databaseURL: 'https://plans-app-42234.firebaseio.com',
  projectId: 'plans-app-42234',
  storageBucket: '',
  messagingSenderId: '113166476156'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
