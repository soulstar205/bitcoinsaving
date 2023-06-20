import React, {  useState } from 'react'
import axios from 'axios'


const SendMessage =({user})=>{
    const [topic, setTopic] = useState('')
    const [body, setbody] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const userId = user._id
    console.log(userId)

    const sendMessage = async(e)=>{
        e.preventDefault()
        const newMessage ={
            topic, body
        }
        try {
            const res = await axios.post(`http://localhost:3001/api/control/message/${userId}`, newMessage)
            if(res.status === 200){
                setSuccess("Message sent successfully")
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    
    return (
    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">Send Message</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
                    <p class="text-dark">{`This message will be sent to ${user.name}`}</p>

                     {/* This is the end of the alerts */}
                    {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                         <strong> {success} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 
                    {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                         <strong> {error} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 

                    {/* This is the end of the alerts */}

                    <form  role="form" method="post" action="" onSubmit={sendMessage}>
                        <input type="hidden" name="_token" value=""/>                        
                        <div class=" form-group">
                            <input type="text" value={topic} onChange={(e)=> setTopic(e.target.value)} name="subject" class="form-control bg-light text-dark" placeholder="Subject" required=""/>
                        </div>
                        <div class=" form-group">
                            <textarea placeholder="Type your message here" value={body} onChange={(e)=> setbody(e.target.value)} class="form-control bg-light text-dark" name="message" row="8" required=""></textarea>
                        </div>
                        <div class=" form-group">
                            <input type="hidden" name="user_id" value="66"/>
                            <input type="submit" class="btn btn-dark" value="Send"/>
                        </div>
                    </form>
        </div> 
        </div>  
        
        
    )
}
export default SendMessage