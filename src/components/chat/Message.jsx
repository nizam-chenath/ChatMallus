import React from 'react'
import profile from '../../assets/profile.webp'

const Message = ({message, user}) => {
    const {text, uid, photoURL} = message
    const messageClass = uid === user.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
        <img src={photoURL || profile} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default Message