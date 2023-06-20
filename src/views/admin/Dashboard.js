import React, { useState, useEffect, useContext } from "react";
import jwt from 'jsonwebtoken';
import { useLocation } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats";
import CardLineChart from "../../components/Cards/CardLineChart";
import axios from "axios";
import { UserContext } from "../../state/userContext";



export default function Dashboard() {
  // const {user} = useContext(UserContext)
  const [show, setShow] = useState(true);
  const [userData, setUserData] = useState({})
  const location = useLocation()

 
  const searchParams = new URLSearchParams(location.search);
  const success = searchParams.get('prop');

  const decodeToken = (token) => {
    try {
      const decodedToken = jwt.decode(token);
      return decodedToken;
    } catch (error) {
      console.log('Error decoding token:', error);
      return null;
    }
  };

  const token = localStorage.getItem('token')
  const decodedToken = decodeToken(token);
  console.log(decodedToken)

  const userId = decodedToken.userId
  


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`https://bitcoinserver.vercel.app/api/users/${userId}`); // Replace with your API endpoint
        const fetchedMessages = response.data;
        setUserData(fetchedMessages);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);
  
  console.log(userData)

  // const updateRead = async (messageId) => {
  //   const data = {
  //     userId: user._id,
  //     messageId,
  //     readStatus: true
  //   }
  //   try {
  //     const res = await axios.put('/api/update', {...data})
  //     const result = res.data
  //     console.log(result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  return (  
    <>
         {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
                         <strong> {success} </strong>
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          </button>
                    </div>} 

      <HeaderStats user={userData}/>
      <div className="flex flex-wrap -mt-35">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <div className="w-full p-3">
            <h3 className="px-2 w-full text-light">Personal Trading Chart</h3>
          </div>
          <CardLineChart />
        </div>
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
      </div>
    </>
  );
}
