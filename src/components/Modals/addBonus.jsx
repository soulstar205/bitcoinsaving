import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from 'axios'
import './style.css'

// components
import { UserContext } from "../../state/userContext";

const AddBonus = ({user}) => {
    const {url} = useContext(UserContext)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [amount, setAmount] = useState(0)
  

  const userId = user._id 

  const sendProfit = async (e) =>{
    e.preventDefault()
    const newMoney ={
        amount
    }
    try {
        const res = await axios.put(`${url}/control/bonus/${userId}`, newMoney)
        if(res.status === 200){
            setSuccess("Profit added successfully")
        }
    } catch (error) {
        console.log(error)
        setError(error.message)
    }
  }


  return (

    <div class="modal-content">
        <div class="modal-header bg-light">
        <h5 class="modal-title text-dark">{`You are adding Bonus to ${user.name}'s account.`}</h5>
            <button type="button" class="close text-dark" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body bg-light">
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

                    <form  role="form" method="post" action="" onSubmit={sendProfit}>
                                         
                        <div class=" form-group">
                            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} name="subject" class="form-control bg-light text-dark" placeholder="Subject" required=""/>
                        </div>
                        
                        <div class=" form-group">
                            <input type="hidden" name="user_id" value="66"/>
                            <input type="submit" class="btn btn-dark" value="Send"/>
                        </div>
                    </form>
        </div>
    </div>
  
  );
};

export default AddBonus;