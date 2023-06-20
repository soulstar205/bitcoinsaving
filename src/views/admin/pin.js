import React, { useContext, useState } from "react";
import { useHistory } from "react-router";

//components and states
import { UserContext } from "../../state/userContext";
import './style.css'

// components

export default function Pin() {
  const {defaultPin} = useContext(UserContext)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [congrats, setCongrats] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()  

 

  const withdraw = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if(pin === defaultPin){
        setCongrats('Your witdrawal request is being processed')
        setLoading(false)
        history.push(`/admin`)
      }else{
        setError("Pin Incorrect! Contact your account manager.")
        setLoading(false)
        return
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 ">
        <div className="rounded-t bg-white mb-0 py-6 px-5">
        {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                         <strong> {error} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 
          {congrats && <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong> {congrats} </strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
          </div>} 
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Complete Withdrawal</h6>
          </div>
        </div>
        <div className="w-full mt-10 p-4 h-400 flex align-center justify">
       
       
        <form class="flex-container-2" >
          <div class="col-auto ">
            <label for="staticEmail2" > <h5>
            Withdrawal Pin
              </h5></label>
          </div>
          <div class="col-auto">
            <input type="text" value={pin} onChange={(e)=>setPin(e.target.value)}
            className="form-control border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
             id="inputPassword2" placeholder="Enter pin"/>
          </div>
          <div class="btn-1 ">
            <button type="submit" class="btn btn-primary " onClick={(e)=>withdraw(e)}>Submit</button>
          </div>
          {loading && <div class="spinner-border text-info" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>}
        </form>
        </div>
      </div>
    </>
  );
}
