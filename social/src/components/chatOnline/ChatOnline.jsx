import React from 'react'
import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img className='chatOnlineImg' 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='chatOnlineBadge'></div>
            </div>
            <span className="chatOnlineName">Jhon Doe</span>
        </div>
    </div>
  )
}
