import React, { useState } from "react";

// components
import CardLineChart from "../../components/Cards/CardLineChart";


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
    <div className="flex flex-wrap bg-light p-5">
    <div className="w-6/12  mb-12 xl:mb-0 px-4">
    <form action="javascript:;" method="post" id="submitpaymentform">
          <input type="hidden" name="_token" value="ZFALmorBuqLrszmSNEvrU0su7Nw9Qhh37aypr9mg"/>												
          <div class="row">
            <div class="mb-4 col-md-12">
              <h5 class="card-title text-dark">Enter Amount</h5>
              <input class="form-control text-dark bg-light " placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}  type="number" name="amount" required=""/>
            </div>
            <div class="mb-4 col-md-12 shadow shadow-1" >
              <input type="hidden" name="payment_method" id="paymethod"/>
            </div>
            <div class="mt-2 mb-1 col-md-12">
              <h5 class="card-title text-dark">Choose Payment Method from the list below</h5>
            </div>
            <div class="mb-2 col-md-6 ">
              <a style={{cursor: "pointer"}} data-method="Bank Transfer" id="12" class="text-decoration-none" onClick={()=>setPay("Bank Transfer")}>
                <div class="rounded shadow bg-light">
                  <div class="card-body">
                    <span class="text-dark">
                        Bank Transfer
                    </span> 
                  </div>
                </div>
              </a>
            </div>
              <div class="mb-2 col-md-6">
              <a style={{cursor: "pointer"}} data-method="Paypal" id="10" class="text-decoration-none " onClick={()=>setPay("Paypal")} >
                <div class="rounded shadow shadow-1 bg-light">
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
              <a style={{cursor: "pointer"}} data-method="Paystack" id="9" class="text-decoration-none" onClick={()=>setPay("Paystack")}>
                <div class="rounded shadow shadow-1 bg-light">
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
              <a style={{cursor: "pointer" }}data-method="Stripe" id="7" class="text-decoration-none" onClick={()=>setPay("Stripe")}>
                <div class="rounded shadow shadow-1 bg-light">
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
              <a style={{cursor: "pointer"}} data-method="Litecoin" id="3" class="text-decoration-none" onClick={()=>setPay("Litecoin")}>
                <div class="rounded shadow shadow-1 bg-light">
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
              <a style={{cursor: "pointer"}} data-method="Ethereum"  class="text-decoration-none" id="liveToastBtn" onClick={()=>setPay("Ethereum")}>
                <div class="rounded shadow shadow-1 bg-light">
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
              <a style={{cursor: "pointer"}} data-method="Bitcoin"  class="text-decoration-none  " id="liveToastBtn" onClick={()=>setPay("Bitcoin")}>
                <div class="rounded shadow shadow-2 bg-light">
                  <div class="card-body">
                    <span class="text-dark">
                      <img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" alt="" class="" style={{width: "25px"}}/>
                      Bitcoin
                    </span> 
                  </div>
                </div>
              </a>
            </div>																										
              <div class="mt-2 mb-1 col-md-12">
                <input type="submit" class="px-5 btn btn-primary btn-lg" value="Procced to Payment"/>
              </div>
                                      
          </div>
        </form>

        {/* This is the toast alert */}

        <div class="toast-container position-fixed top-0 righ-0 end-0 p-3 fade-in bg-white rounded ">
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="true">
            <div class="toast-header">
              <a></a>
              <strong class="me-auto">Payment Method</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              {`You have chosen to pay with ${pay}`}
            </div>
          </div>
        </div>
    </div>
    </div>
   
  );
}
