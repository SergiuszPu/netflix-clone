import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './components/context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase}}>
      <App />
    </FirebaseContext.Provider>
  </>, 
  document.getElementById('root'));
