import React from "react";

// components
import { Card } from "../../assets/utils/planCard"
import { Silver } from "../../assets/utils/planCard"
import { Gold } from "../../assets/utils/planCard"


export default function Plans() {
  return (
    <div className="container">
      <section className="block relative z-1 bg-blueGray-300 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  mt-24">
              <div className="flex flex-wrap">

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-light">
                    Basic Plan
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <Card/>
              
                    </div>
        
                </div>

                <div className="w-full lg:w-4/12 px-4">  
                  <h5 className="text-xl font-semibold pb-4 text-center text-light">
                    Silver Plan
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <Silver/>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-light">
                    Premium
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <Gold/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
