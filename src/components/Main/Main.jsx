import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {
   const { onSent, ShowResult, RecentPromt, Loading, Resltdata, SetInput, Input } = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.Moiz} alt="" className='img'/>
        </div>
        <div className="main-container">
            {! ShowResult ? 
            <>
            <div className="greet">
                <p><span>Hello, Gemini Clone By Abdul Moiz.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>What’s on your mind, Abdul Moiz?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tell me about React js and React native</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </> :<div className='result'>
                 <div className="result-title">
                    <img src={assets.Moiz} alt="" className='img'/>
                    <p>{RecentPromt}</p>
                 </div>
                 <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {Loading ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>: <p dangerouslySetInnerHTML={{ __html: Resltdata }}></p>}
                 </div>
                </div>
             }
            
            <div className="main-bottom">
                <div className="search-box">
                <input onChange={(e)=> SetInput(e.target.value)} value={Input} type="text" placeholder='Enter a promt here' />
                  <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                   {Input ? <img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null}  
                  </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps. © Abdul Moiz 2025</p>
            </div>
        </div>

    </div>
  )
}

export default Main