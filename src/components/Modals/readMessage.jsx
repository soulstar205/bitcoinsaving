import React from 'react'

const Read = (prop) => {
    return(
        <div className='msg-container'>
            <div className="inner">
                <div className="topic">
                    <p>{prop.topic}</p>
                </div>
                <div className="body">
                    <p className="body">{prop.body}</p>
                </div>
            </div>
        </div>
    )
}
export default Read