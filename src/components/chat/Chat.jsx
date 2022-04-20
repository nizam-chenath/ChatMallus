import React, {useState, useRef} from 'react'
import './Chat.css'
import sendicon from '../../assets/sndicon.webp'
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import { useCollectionData} from "react-firebase-hooks/firestore"
import Message from './Message'

const Chat = ({ user }) => {
  
    const [message, setMessage] = useState();
    const dummy = useRef();
    const firestore = firebase.firestore()

    const messagesRef = firestore.collection("messages");
 const query = messagesRef.orderBy("createsAt").limit(100) 
 const [messages] = useCollectionData(query, {idfield: "id"})

    const sendMsg = async e => {
        e.preventDefault();
      
        const  {uid,photoURL} = user
      await  messagesRef.add({
            text: message,
            createsAt: firebase.firestore.FieldValue.serverTimestamp(), // for get time
            uid,photoURL,
        });
        setMessage("");
        dummy.current.scrollIntoView({behavior: "smooth"});
    };

  return (
   <>   
    <div className="chat-section">
      

        {
            messages && messages.map((msg) => <Message key = {msg.id} message={msg} user={user}/>)
        }
        <span ref={dummy}></span>
    </div>
    <form onSubmit={sendMsg}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message"/>
        <button>
            <img src={sendicon} alt="" />
        </button>
    </form>
   </> 
  )
}

export default Chat