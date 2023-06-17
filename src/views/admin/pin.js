import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Select from "react-select";
import axios from "axios";

import './style.css'

// components

export default function Pin() {
  const [isBank, setIsBank] = useState(false)
  const [pin, setPin] = useState()
  const history = useHistory()  


  const withdraw = (e) => {
    e.preventDefault()
    console.log(pin)
    axios.post('http://localhost:3001/api/withdraw', pin)
      .then(res=> res.status === 200 && history.push('/admin'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Complete Withdrawal</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-10 alignment">
          <form onSubmit={withdraw} className="flex justify alignment">
            <div className="flex justify align-center alignment">
             
        

             {/* This is the bank section that folds when a you pick crypto */}

              <div className="bank flex justify p-10 ">

              <div className="w-full  px-4">
                <div className="relative flex flex-row justify align-center w-400 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Enter Withdrawl Pin
                  </label>
                  <input
                    type="text"
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={pin} 
                    onChange={(e)=> setPin(e.target.value)}
                  />
                </div>
              </div>
              </div>
              <div className="mt-12">
                <Link to='/auth/dashboard'>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Submit 
                </a>
                </Link>
               
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
