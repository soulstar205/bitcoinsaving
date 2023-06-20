import React from 'react'
import './style.css'

const Messages = ({prop}) =>{
    console.log(prop)
    return(
        <div className="message-list log-out">
            <ul>
                    {
                        prop.map((msg)=>(
                            <li>
                            <div className='log-content'>
                                <p>{msg.title}</p>
                            </div>
                            </li>
                        ))
                    }
            </ul>
        </div>
    )
}
export default Messages