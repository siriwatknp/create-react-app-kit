import firebase from 'firebase';

const developmentConfig = {
  apiKey: 'AIzaSyCOEUP0WenLSE0T-cjRNa6m7oqMSI6tq3M',
  authDomain: 'react-app-ce8ba.firebaseapp.com',
  databaseURL: 'https://react-app-ce8ba.firebaseio.com',
  projectId: 'react-app-ce8ba',
  storageBucket: 'react-app-ce8ba.appspot.com',
  messagingSenderId: '552804122338',
};
const stagingConfig = developmentConfig;
const productionConfig = {};
const config = {
  development: developmentConfig,
  staging: stagingConfig,
  production: productionConfig,
};

const fireBaseApp = firebase.initializeApp(config[process.env.REACT_APP_STAGE]);

export const db = fireBaseApp.database();
export const auth = fireBaseApp.auth();
