import firebase from 'firebase';

const developmentConfig = {};
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
