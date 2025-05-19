import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const [Extended, Setextended] = useState(false);
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=> Setextended(prev=> !prev)} className='menu' src={assets.menu_icon} alt="Menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus-icon" />
                { Extended?<p>New Chat</p>:null }
            </div>
            { Extended ? <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>Who is Abdul Moiz...</p>
                </div>
            </div>: null}
            
        </div>
        <div className="bottom">
            <div className="bottom-items recent-entry">
                <img src={assets.question_icon} alt="" />
               {Extended ?<p>Help</p> : null}
            </div>
            <div className="bottom-items recent-entry">
                <img src={assets.history_icon} alt="" />
               {Extended ? <p>Activity</p>: null}
            </div>
            <div className="bottom-items recent-entry">
                <img src={assets.setting_icon} alt="" />
               {Extended ?  <p>Settings</p> : null}
            </div>

        </div>

    </div>
  )
}

export default Sidebar