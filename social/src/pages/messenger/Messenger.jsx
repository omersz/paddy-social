import React, { useContext } from 'react';
import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Convarsation from '../../components/conversations/Convarsation';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';

export default function Messsenger({own}){
    return (
        <>
        <Topbar />
        <div className="messenger">
            <div className='chatMenu'>
                <div className="chatMenuWrapper">
                    <input placeholder='Search for friends' className="chatMenuInput" />
                    <Convarsation/>
                    <Convarsation/>
                    <Convarsation/>
                    <Convarsation/>
                </div>
            </div>
            <div className='chatBox'>
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                       <Message />
                       <Message own={true}/> 
                       <Message /> 
                       <Message /> 
                       <Message /> 
                       <Message /> 
                       <Message /> 
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                        <button className='chatSubmitButton'>Send</button>
                    </div>
                </div>
            </div>
            <div className='chatOnline'>
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div>
        </div>
        </>
    )
}