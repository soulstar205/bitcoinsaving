import React, { useState } from "react";
import {Link} from 'react-router-dom'

// components
import CardLineChart from "../../components/Cards/CardLineChart";
import Payment from "../../components/Modals/payment";


export default function Deposit() {
    const [pay, setPay] = useState('')
    const [amount, setAmount] = useState('')

    const submitPay = () => {
        if(pay === "Bank Transfer"){
          window.location.href="/bank-details"
        }else{
          
        }
    }

  return (
    <div className=" bg-light p-5 w-full">
    <div className="w-8/12 sm:w-72 mb-11/12 xl:mb-0 px-4">
    {pay && <div className="alert alert-success alert-dismissible fade show" role="alert">
                         <strong> {`You have chosen to pay using ${pay}.`} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 
    <form action="" method="post" id="submitpaymentform">
          <input type="hidden" name="_token" value=""/>												
          <div class="row">
            <div class="mb-4 col-md-12">
              <h5 class="card-title text-dark mb-2">Enter Amount</h5>
              <input class="form-control text-dark bg-light shadow shadow-2 " placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}  type="number" name="amount" required/>
            </div>
            <div class="mb-4 col-md-12 shadow shadow-1" >
              <input type="hidden" name="payment_method" id="paymethod"/>
            </div>
            <div class="mt-2 mb-2 col-md-12">
              <h5 class="card-title text-dark">Choose Payment Method from the list below</h5>
            </div>
            <div class="mb-2 col-md-6 ">
              <a style={{cursor: "pointer"}} data-method="Bank Transfer" id="12" class="text-decoration-none" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Bank Transfer")}>
                <div class="rounded shadow bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                        Bank Transfer
                    </span> 
                  </div>
                </div>
              </a>
            </div>
              <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Paypal" id="10" class="text-decoration-none " data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Paypal")} >
                <div class="rounded shadow shadow-1 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                      <img src="https://lulo.com" alt="" class="" style={{width: "25px"}}/>
                        Paypal
                    </span> 
                  </div>
                </div>
              </a>
            </div>
              <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Paystack" id="9" class="text-decoration-none" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Paystack")}>
                <div class="rounded shadow shadow-1 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                      <img src="" alt="" class="" style={{width: "25px"}}/>
                        Paystack
                    </span> 
                  </div>
                </div>
              </a>
            </div>
            <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer" }}data-method="Stripe" id="7" class="text-decoration-none" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Stripe")}>
                <div class="rounded shadow shadow-1 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                      <img src="https://lulo.com" alt="" class="" style={{width: "25px"}}/>
                        Stripe
                    </span> 
                  </div>
                </div>
              </a>
            </div>
                <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Litecoin" id="3" class="text-decoration-none" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Litecoin")}>
                <div class="rounded shadow shadow-1 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                        <img src="https://lulo.com" alt="" class="" style={{width: "25px"}}/>
                          Litecoin
                    </span> 
                  </div>
                </div>
              </a>
            </div>
                  <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Ethereum"  class="text-decoration-none" id="liveToastBtn" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Ethereum")}>
                <div class="rounded shadow shadow-1 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                        <img src="https://lulo.com" alt="" class="" style={{width: "25px"}}/>
                          Ethereum
                    </span> 
                  </div>
                </div>
              </a>
            </div>
              <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Bitcoin"  class="text-decoration-none  " id="liveToastBtn" data-toggle="modal" data-target="#paymentModal" onClick={()=>setPay("Bitcoin")}>
                <div class="rounded shadow shadow-2 bg-light p-2">
                  <div class="card-body">
                    <span class="text-dark">
                      Bitcoin
                    </span> 
                  </div>
                </div>
              </a>
            </div>																										
              <div class="mt-2 mb-1 col-md-12">
                <Link to={{
                pathname: "/admin/payment",
                state: [pay, amount]
                }} >
                <input type="submit" class="px-5 btn btn-primary btn-lg" value="Procced to Payment"/>
                </Link>
              </div>
                                      
          </div>
        </form>

        {/* This is the toast alert */}

       
    </div>
    {/* Another one */}
    {/* <div class="modal" tabindex="-1" id="paymentModal" role="dialog">
                    <div class="modal-dialog" role="document">
                        <Payment method={pay} amount={amount}/>
                    </div>
                </div> */}
    </div>
   
  );
}
