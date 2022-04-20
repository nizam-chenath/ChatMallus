import React from 'react';
import google from '../../assets/google.svg'
import './Signin.css';
import firebase from 'firebase/compat/app'

const Signin = ({auth}) => {

  const signinwithGoogle = e =>{
    e.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div>
        <p>Sign in for start chat....!!</p>
        <button className="signin-btn" onClick={signinwithGoogle}>
          <img src={google} alt="" />
          <span>sign in with google</span>
        </button>
    </div>
  )
}

export default Signin