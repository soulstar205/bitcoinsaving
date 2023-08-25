import React, {createContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState('')
    const defaultPin = '2340419'

    const url = 'https://bitcoinserver.vercel.app/api'
    // const url = 'http://localhost:3001/api'

    const decodeToken = (token) => {
      try {
        const decodedToken = jwt.decode(token);
        return decodedToken;
      } catch (error) {
        console.log('Error decoding token:', error);
        return null;
      }
    };

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        const getToken = async () => {
          try {
            const decoded = decodeToken(token);
            const getUser = await axios.get(`${url}/users/${decoded.userId}`);
            const res = getUser.data;
            setUser(res);
          } catch (error) {
            // Handle the error here
            console.error('Error occurred while retrieving user:', error);
            // You can also set the user to null or perform other actions
          }
        };
        getToken();
      } else {
        // Handle the case when the token is not present
        // You can set the user to null or perform other actions
      }
    }, []);
    
    console.log(user)
 
    const loginUser = async (data) => {
        
        try {
          const response = await axios.post(`${url}/users/login`, data);
          // Assuming the response contains a token or some indication of successful login
          if (response.status === 200) {
            // Set the token in a cookie
            const expires = new Date();
            expires.setDate(expires.getDate() + 2);
            const token = response.data.token
            Cookies.set('token', token, { expires: expires, secure: true, sameSite: 'strict' });
            // Navigate the user to the admin page
            setIsAuthenticated(true);
            localStorage.setItem('token', token);
                // Set a session cookie with a token or relevant session information
            return { success: true };
            // history.push('/admin')
          } else {
            // Handle unsuccessful login
            // Show an error message o r perform any other necessary actions
            return { success: false, error: 'Login failed' };
          }
        } catch (error) {
          // Handle error
          // Show an error message or perform any other necessary actions
          console.log(error)
          return { success: false, error: error.message };
        }
      };

      const loginAdmin = async (data) => {
        try {
          const response = await axios.post(`${url}/admin/login`, data);
      
          if (response.status === 200) {
            const token = response.data.token;
            const expires = new Date();
            expires.setDate(expires.getDate() + 2);
      
            // Store the token in both cookie and local storage
            Cookies.set('token', token, { expires, secure: true, sameSite: 'strict' });
            localStorage.setItem('token', token);
      
            return { success: true };
          } else {
            return { success: false, error: 'Login failed' };
          }
        } catch (error) {
          console.log(error);
          return { success: false, error: 'An error occurred during login' };
        }
      };
      

      
    // const loginAdmin = async (data) => {
    //   try {
    //     const response = await axios.post(`${url}/admin/login`, data);
    //     // Assuming the response contains a token or some indication of successful login
    //     if (response.status === 200) {
    //       // Set the token in a cookie
    //       const expires = new Date();
    //       expires.setDate(expires.getDate() + 2);
    //       const token = response.data.token
    //       // const tokenString = JSON.stringify(token);
    //       Cookies.set('token', token, { expires: expires, secure: true, sameSite: 'strict' });
    //       // Navigate the user to the admin page
    //       setIsAuthenticated(true);
    //       localStorage.setItem('token', token);
    //       // Set a session cookie with a token or relevant session information
    //       return { success: true };
    //       // history.push('/admin')
    //     } else {
    //       // Handle unsuccessful login
    //       // Show an error message o r perform any other necessary actions
    //       return { success: false, error: 'Login failed' };
    //     }
    //   } catch (error) {
    //     // Handle error
    //     // Show an error message or perform any other necessary actions
    //     console.log(error)
    //     return { success: false, error: error.message };
    //   }
    // };


    return(
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated,  loginUser, loginAdmin, setUser, user, defaultPin, url}}>
            {children}
        </UserContext.Provider>
    )
}