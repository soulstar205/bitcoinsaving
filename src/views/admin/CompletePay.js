import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../state/userContext'

const CompletePay = () => {
     const location = useLocation()
     const {user, url} = useContext(UserContext)
     const [bankName, setBankName] = useState('')
     const [accName, setAccName] = useState('')
     const [accNumber, setAccNumber] = useState(null)
     const [swift, setSwift] = useState('')
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(false)
     const [success, setSuccess] = useState(null)

     const [ pay, amount] = location.state
     const userId = user._id

     console.log(user)

     const handleSubmit = async (e) =>{
         e.preventDefault()
         setLoading(true)
          const deposit = {
            bankName, accName, accNumber, swift, amount
          }
          try {
              const res = await axios.put(`${url}/control/deposit/${userId}`, deposit)
              console.log(res.data)
              setLoading(false)
              setSuccess(res.data.message)
              setAccName('')
              setAccNumber(null)
              setBankName('')
              setSwift('')
          } catch (error) {
              console.log(error.message)
              setError(error.message)
              setLoading(false)
          }
     }
  

    return(
        <div className="flex flex-wrap bg-light p-5">
            <div className="w-7/12  mb-12 xl:mb-0 px-4">
            <div class="mt-2 mb-4">
                <h1 class="title1 text-dark">Complete Payment</h1>
            </div>

            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card bg-light shadow-lg p-2 p-md-4'>
                    {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                          {success}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 

                    {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>}
                        <div className='card-body'>
                            <div>
                                <span class="text-dark">You are to make payment of <strong>${amount}</strong> using your selected payment method. Screenshot and upload the proof of payment using</span>
                                <h6>
                                <strong class="text-dark">{pay}</strong>
                                </h6>
                            </div>
                            <h3 class="text-dark">
                                <strong>{pay} </strong>
                            </h3>
                            <div class="d-block">
                                <h5 class="text-dark">Bank Name</h5>
                            </div>
                            <div class="mb-3 input-group">
                                <input type="text" class="form-control myInput text-dark bg-light" value={bankName} onChange={(e)=> setBankName(e.target.value)} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary"  type="button" id="button-addon2" disabled=""><i class="fas fa-copy"></i></button>
                                </div>
                            </div>
                            <div class="d-block">
                                <h5 class="text-dark">Account Name</h5>
                            </div>
                            <div class="mb-3 input-group">
                                <input type="text" class="form-control myInput  text-dark bg-light" value={accName} onChange={(e)=> setAccName(e.target.value)} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary"  type="button" id="button-addon2" disabled=""><i class="fas fa-copy"></i></button>
                                </div>
                            </div>
                            <div class="d-block">
                                <h5 class="text-dark">Account Number</h5>
                            </div>
                            <div class="mb-3 input-group">
                                <input type="text" class="form-control myInput  text-dark bg-light" value={accNumber} onChange={(e)=> setAccNumber(e.target.value)} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary"  type="button" id="button-addon2" disabled=""><i class="fas fa-copy"></i></button>
                                </div>
                            </div>
                            <div class="d-block">
                                <h5 class="text-dark">Swift Code</h5>
                            </div>
                            <div class="mb-3 input-group">
                                <input type="text" class="form-control myInput text-dark bg-light" value={swift} onChange={(e)=> setSwift(e.target.value)} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary"  type="button" id="button-addon2" disabled=""><i class="fas fa-copy"></i></button>
                                </div>
                            </div>
                        </div>

                        <div>
                     
                            <form method="post"  encType="multipart/form-data">
                                <input type="hidden" name="_token" value=""/>													
                                <div class="form-group">
                                    <h5 class="text-dark">Upload Payment proof after payment.</h5>
                                    <input type="file" name="proof" class="form-control col-lg-4 bg-light text-dark" required=""/>
                                </div>
                                <input type="hidden" name="amount" value="4000.00"/>
                                <input type="hidden" name="paymethd_method" value="Bank Transfer"/>

                                <div class="form-group">
                                    <input type="submit" class="btn btn-dark" onClick={handleSubmit} value="Submit Payment"/>
                                </div> 
                            </form>
                            {loading && <div class="spinner-border text-info" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>}
                        </div>
                   
                    </div>
                </div>
            </div>
            
            </div>        
        </div>
    )
}
export default CompletePay