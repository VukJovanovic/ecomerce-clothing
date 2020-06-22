import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDWhRpccFXK5ZUF_UDO5XAgK9Wf-_gjipQ',
	authDomain: 'crwn-db-94f0e.firebaseapp.com',
	databaseURL: 'https://crwn-db-94f0e.firebaseio.com',
	projectId: 'crwn-db-94f0e',
	storageBucket: 'crwn-db-94f0e.appspot.com',
	messagingSenderId: '946159732313',
	appId: '1:946159732313:web:ad46c33e08c7d02d695348',
	measurementId: 'G-H4S3J521FT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
