import React, {useContext} from "react";
import { UserContext } from "../../state/userContext";

// components

export default function CardProfile(userData) {
  const {user} = useContext(UserContext)

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
          
            
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-capitalize">
              {user.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {userData.address}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              {userData.email}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {userData.info}
                </p>
             
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
