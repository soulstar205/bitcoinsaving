import React, {createContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState('')

    useEffect(()=>{
      const getToken=()=>{
        const token = localStorage.getItem('token')
        setUser(token)
      }
      getToken()
    })
    console.log(user)


 
    const loginUser = async (data) => {
        
        try {
          const response = await axios.post('http://localhost:3001/api/users/login', data);
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
        const response = await axios.post('http://localhost:3001/api/admin/login', data);
        // Assuming the response contains a token or some indication of successful login
        if (response.status === 200) {
          // Set the token in a cookie
          const expires = new Date();
          expires.setDate(expires.getDate() + 2);
          const token = response.data.token
          // const tokenString = JSON.stringify(token);
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
    return(
        <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated,  loginUser, loginAdmin, setUser, user}}>
            {children}
        </UserContext.Provider>
    )
}