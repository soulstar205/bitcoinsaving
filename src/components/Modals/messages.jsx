import React from 'react'
import './style.css'

const Messages = ({prop}) =>{
    console.log(prop)
    return(
        <div className="message-list">
            <ul className='list'>
                    {
                        prop.map((msg)=>(
                            <li>
                            <div className='log-content' data-toggle="modal" data-target="#ReadMessage" >
                                <p>{msg.topic}</p>
                            </div>
                            </li>
                        ))
                    }
            </ul>
            
        </div>
    )
}
export default Messages