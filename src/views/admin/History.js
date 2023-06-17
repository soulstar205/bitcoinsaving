import React from 'react'


const History = ()=>{
    return(
        <>
        <div class="mt-2 mb-4 px-5">
            <h5 class="text-light">Transactions on your account</h5>
        </div>
        <div className='mb-4 row'>
            <div className='col text-center card p-4 bg-light'>
            <nav>
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">

                <h4 class="pt-3 nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#1" role="tab" aria-controls="nav-home" aria-selected="true"> Deposits</h4>

                <h4 class="pt-3 nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#2" role="tab" aria-controls="nav-profile" aria-selected="false">Withdrawals</h4>

                <h4 class="pt-3 nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#3" role="tab" aria-controls="nav-contact" aria-selected="false">Others</h4>
            </div>
            </nav>

            <div className='px-3 py-3 tab-content px-sm-0'>
                <div class="tab-pane fade show active bg-light card p-3">

                    
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default History