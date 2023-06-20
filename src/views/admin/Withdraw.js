import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './style.css'

// state
import { UserContext } from "../../state/userContext";

export default function CardSettings() {
  const {user, url} = useContext(UserContext)
  const [isBank, setIsBank] = useState(false)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [code, setCode] = useState('')
  const [amount, setAmount] = useState('')
  const [wallet, setWallet] = useState('')
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState('')
  const [error, setError] = useState(null)
  const [info, setInfo] = useState()
  const history = useHistory()


  const userId = user._id

  const success = 'Enter Pin'

  const withdraw = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      username,
      email,
      firstName,
      lastName,
      code,
      amount,
    };
    const coin = { amount, wallet };
    console.log(amount)
    if (amount === '') return
    try {
      let response;
      if (plan === "bank transfer") {
        response = await axios.put(
          `${url}/control/deposit/${userId}`,
          data
        );
      } else {
        response = await axios.put(
          `${url}/control/deposit/${userId}`,
          coin
        );
      }
      // Access the response data
      console.log(response.data);
      
      // Additional logic using the response data
      history.push(`/admin/pin?prop=${success}`)
  
    } catch (error) {
      // Handle any errors that occurred during the API call
      setError(error.message)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value
    if(selectedOption === "bank transfer"){
      setIsBank(true)
      setPlan(selectedOption)
    }else{
      setIsBank(false)
      setPlan(selectedOption)
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words h-full w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 ">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
          </div>
          {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                </div>}
        </div>
        <div className="flex-auto px-4 lg:px-10 pt-2">
          <form onSubmit={withdraw}>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Choose withdrawal method
                  </label>
                    <select value={plan} onChange={handleSelectChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="litecoin">Litecoin</option>
                        <option value="bank transfer">Bank Transfer</option>
                      </select>
                </div>
              </div>
              <div className={isBank? "none": "w-full lg:w-6/12 px-4"}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Wallet address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={wallet} 
                    onChange={(e)=> setWallet(e.target.value)}
                  />
                </div>

              </div>
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    amount
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={amount} 
                    onChange={(e)=> setAmount(e.target.value)}
                  />
                </div>
              </div>

            {/* This is the bank section that folds when a you pick crypto */}

              <div className="bank flex flex-wrap">

              <div className={isBank? "w-full lg:w-6/12 px-4": "none"}>
                <div className={isBank? "relative w-full mb-3": "none"}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    account name
                  </label>
                  <input
                    type="text"
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className={isBank? "w-full lg:w-6/12 px-4": "none"}>
                <div className={isBank? "relative w-full mb-3": "none"}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    account Number
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className={isBank? "w-full lg:w-6/12 px-4": "none"}>
                <div className={isBank? "relative w-full mb-3": "none"}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    swift code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={firstName} 
                    onChange={(e)=> setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className={isBank? "w-full lg:w-6/12 px-4": "none"}>
                <div className={isBank? "relative w-full mb-3": "none"}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    branch
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={lastName} 
                    onChange={(e)=> setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className={isBank? "w-full lg:w-6/12 px-4": "none"}>
                <div className={isBank? "relative w-full mb-3": "none"}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ifsc code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={code} 
                    onChange={(e)=> setCode(e.target.value)}
                  />
                </div>
              </div>
             
              <div className="mt-2 mb-3 flex align-center ml-4">
                <button type="button" onClick={withdraw} class="btn btn-secondary">Submit</button>
              </div>
               {loading && <small>Loading...</small>}
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
