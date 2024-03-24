import React from 'react'
import { useContext } from 'react'
import './Mains.css'
import user from './user_icon.png'
import compass from './compass_icon.png'
import bulb from './bulb_icon.png'
import msg from './message_icon.png'
import code from './code_icon.png'
import gallery from './gallery_icon.png'
import mic from './mic_icon.png'
import send from './send_icon.png'
import { Context } from './Context.jsx'
import gemini from './gemini_icon.png'



function Main() {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} =useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={user} alt='' />
      </div>
      <div className="main-container">
        {!showResult?
          <>
              <div className="greet">
              <p><span>Hello, Yuvika</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={compass} alt='' />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={bulb} alt='' />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={msg} alt='' />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={code} alt='' />
              </div>
            </div>
          </>
          :
          <div className='result'>
              <div className="result-title">
                <img src={user} alt='' />
                <p>{recentPrompt}</p>       
              </div>
              <div className="result-data">
                <img src={gemini} alt='' />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
              </div>
          </div>
        }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
            <div>
              <img src={gallery} />
              <img src={mic} />
              {input? <img onClick = {()=> onSent()} src={send} /> : null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
    
  ) 
}
export default Main