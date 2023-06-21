import React,{useContext, useState} from "react";
import { UserContext } from "../../state/userContext";

// components

import {CardStats} from "../../components/Cards/CardStats.js";

export default function HeaderStats() {
  const {user} = useContext(UserContext)
  // const [timer, setTimer] = useState(0)
  // const [deposit, setDeposit] = useState(0)
  // const [currentValue, setCurrentValue] = useState(0)
  // const [rate, setRate] = useState(0)
  // const [alert, setAlert] = useState('')
  console.log(user.deposits)

  
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-10 pt-10">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/12 xl:w-2/12 px-2 mb-2">
                <CardStats
                  statSubtitle="DEPOSIT"
                  statTitle={user.deposits && user.deposits.length > 0 ? `$${user.deposits[0].amount}` : "$0"}
                  statIconName="fa fa-download"
                  statIconColor="bg-red-500"
                />
              </div> 
              <div className="w-full lg:w-4/12 xl:w-3/12 px-2 mb-2">
                <CardStats
                  statSubtitle="PROFIT"
                  statTitle={`$${user.profit}`}
                  statIconName="fa fa-coins"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-2 mb-2" >
                <CardStats
                  statSubtitle="ACC BALANCE"
                  statTitle={`$${user.balance}`}
                  statIconName="fa fa-dollar-sign"
                  statIconColor="bg-purple-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-3/12 px-2 mb-2">
                <CardStats
                  statSubtitle="TOTAL BONUS"
                  statTitle={`$${user.bonus}`}
                  statIconName="fa fa-gift"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
