  
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD9IVt_m4wXLxvzqSnhWZtIXzaUBcv5avg',
    authDomain: 'meeting-room-4ffdc.firebaseapp.com',
    projectId: 'meeting-room-4ffdc',
    storageBucket: 'meeting-room-4ffdc.appspot.com',
    messagingSenderId: '794471345020',
    appId: '1:794471345020:web:84f9212832de24e7fd52f9',
    measurementId: 'G-HTPWFZMGZ6'
};
  
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();