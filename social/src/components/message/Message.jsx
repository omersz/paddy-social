import React from 'react'
import "./message.css"
import {format} from "timeago.js"

export default function Message({ message, own }) {
  return (
    <div  className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className='messageImg' src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="messageText">{message.text}</p>
        </div>
        <div className='messageBottom'>{format(message.createdAt)}</div>
    
    </div>
  )
}
