import React from 'react';
import {Link} from 'react-router-dom'
import './plan.css'

export const Card = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md grid text-center vertical-middle p-5 justify-left"
      style={{ width: '100%', height: '100%' }}>
          
          
          <div className="text-2xl font-medium mb-3 div shadow-md font-bold ">
            $500 - $999
          </div>
          <div className="mt-5 mb-5 text-center ">
                <Link to='/auth/register'>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                >
                  Get started 
                </a>
                </Link>
               
              </div>
            <div className="text-xl font-medium mb- div shadow-md">
            Minimum Possible Deposit --{">"} <span className="font-medium font-bold">$500</span> 
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md">
            Maximum Possible Deposit --{">"} <span className="font-medium font-bold">$999</span> 
            </div>
            <div className="text-xl font-medium mb-3 block-line div shadow-md">
            Minimum Return --{">"} <span className="font-medium font-bold">$1,348</span>
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md">
            Maximum Return --{">"} <span className="font-medium font-bold">$2,786</span>
            </div>
            <div className="text-xl font-medium div shadow-md">
            Duration --{">"} <span className="font-medium font-bold"> 1 Week</span>
            </div>
      </div>
);
};


export const Silver = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md grid text-center vertical-middle p-5 justify-left"
      style={{ width: '100%', height: '100%' }}>
          
       
          <div className="text-2xl font-medium mb-3 div shadow-md div2 font-bold">
            $1,000 - $4,999
          </div>
          <div className="mt-5 mb-5 text-center ">
                <Link to='/auth/register'>
                <a
                  href="#"
                  target="_blank"
                  className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                >
                  Get started 
                </a>
                </Link>
               
              </div>
            <div className="text-xl font-medium mb-3 div shadow-md div2">
            Minimum Possible Deposit --{">"} <span className="font-medium font-bold">$1000</span> 
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md div2">
            Maximum Possible Deposit--{">"} <span className="font-medium font-bold">$4,999 </span> 
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md block-line div2">
            Minimum Return --{">"} <span className="font-medium font-bold">$1,560</span>
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md div2">
            Maximum Return --{">"} <span className="font-medium font-bold">$7,798</span>
            </div>
            <div className="text-xl font-medium div shadow-md div2">
            Duration --{">"} <span className="font-medium font-bold"> 1 Week</span>
            </div>
      </div>
);
};

export const Gold = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md grid text-center vertical-middle p-5 justify-left"
      style={{ width: '100%', height: '100%' }}>
          
        
          <div className="text-2xl font-medium mb-3 div3 font-bold">
            $5,000 - $9,999
          </div>
          <div className="mt-5 mb-5 text-center">
                <Link to='/auth/register'>
                <a
                  href="#"
                  target="_blank"
                  className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                >
                  Get started 
                </a>
                </Link>
               
              </div>
            <div className="text-xl font-medium mb-3 div shadow-md div3">
            Minimum Possible Deposit --{">"} <span className="font-medium font-bold">$5000</span> 
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md div3">
            Maximum Possible Deposit--{">"} <span className="font-medium font-bold">$9,999 </span> 
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md block-line div3">
            Minimum Return --{">"} <span className="font-medium font-bold">$9,200</span>
            </div>
            <div className="text-xl font-medium mb-3 div shadow-md div3">
            Maximum Return --{">"} <span className="font-medium font-bold">$18,000</span>
            </div>
            <div className="text-xl font-medium div shadow-md div3">
            Duration --{">"} <span className="font-medium font-bold"> 1 Month</span>
            </div>
      </div>
);
};