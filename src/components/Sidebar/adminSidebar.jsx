/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";

// import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const history = useHistory()

    const logoutFunc =()=>{
        localStorage.clear();
        history.push('/')
    }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 px-3 py-3">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link

            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            BINARY LEGIT
          </Link>
          {/* User */}
         
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                  onClick={() => setCollapseShow("hidden")}
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/super-admin"
                  >
                    BINARY LEGIT 
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
           
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                onClick={() => setCollapseShow("hidden")}
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/super-admin/dashboard"
                >
                  <i
                  onClick={() => setCollapseShow("hidden")}
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/super-admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
              <li className="items-center" >
                <Link
                onClick={() => setCollapseShow("hidden")}
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/super/plans") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/super-admin/plans"
                >
                  <i
                  
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/super-admin/plans") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  PLANS
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

               <li className="items-center" >
                <Link
                onClick={() => setCollapseShow("hidden")}
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/super-admin/userlist"
                >
                  <i className={"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm" +  
                  (window.location.href.indexOf("/super-admin/userlist") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")}></i>{" "}
                  Manage Users
                </Link>
              </li>  

               <li className="items-center" onClick={()=>logoutFunc()} >
                <Link
                
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className={"fas fa-clipboard-list text-blueGray-300 mr-2 text-sm" +  
                  (window.location.href.indexOf("/") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")}></i>{" "}
                  Logout
                </Link>
              </li>     

            
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
        
            
          </div>
        </div>
      </nav>
    </>
  );
}
