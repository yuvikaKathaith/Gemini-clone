import React from 'react'
import { useState, useContext } from 'react'
import './Sidebar.css'
import menu from './menu_icon.png'
import plus from './plus_icon.png'
import message from './message_icon.png'
import ques from './question_icon.png'
import history from './history_icon.png'
import setting from './setting_icon.png'
import { Context } from './Context.jsx'



function Sidebar() {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);

  const loadPrompt = async(prompt) => {
      setRecentPrompt(prompt);
      await onSent(prompt);
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={menu} alt='' />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={plus} alt='' />
          {extended? <p>New Chat</p> : null}
        </div>
        {extended?
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item,index)=>{
                return(
                  <div key={index} onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={message} alt='' />
                    <p>{item.slice(0,18)}...</p>
                  </div>
                );
            })}
          </div>
          :
          null
        }
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={ques} alt='' />
          {extended? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={history} alt='' />
          {extended? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={setting} alt='' />
          {extended? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;