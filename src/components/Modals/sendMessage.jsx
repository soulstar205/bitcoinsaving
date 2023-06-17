import React from 'react'


const SendMessage =({user})=>{
    
    return (
    <div class="modal-content">
        <div class="modal-header bg-light">
        <h4 class="modal-title text-dark">Send Message</h4>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
                    <p class="text-dark">{`This message will be sent to ${user}`}</p>
                    <form  role="form" method="post" action="">
                        <input type="hidden" name="_token" value=""/>                        
                        <div class=" form-group">
                            <input type="text" name="subject" class="form-control bg-light text-dark" placeholder="Subject" required=""/>
                        </div>
                        <div class=" form-group">
                            <textarea placeholder="Type your message here" class="form-control bg-light text-dark" name="message" row="8" required=""></textarea>
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