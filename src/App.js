import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Signin from './components/signin/Signin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/chat/Chat';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID,
});

const auth = firebase.auth()

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
     <Header auth = {auth} user={user}/>
     <section>
       { user ? <Chat user = {user}/> :<Signin auth = {auth}/>}
     </section>
    </div>
  );
}

export default App;
