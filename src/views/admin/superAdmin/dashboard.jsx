import React, {useEffect, useContext, useState} from 'react'
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import TopPanel from '../../../components/Cards/superadmin-top-panel'
import AdminStats from '../../../components/Cards/AdminStats'
import axios from 'axios'
import { UserContext } from '../../../state/userContext';

const Dashboard = () =>{
    const [users, setUsers] = useState([]);
    const [adminName, setAdminName] = useState('')

    useEffect(() => {
      const fetchUsers = async () => {
          const storedToken = Cookies.get('token')
        
        try {
            const response = await axios.get('http://localhost:3001/api/users');
            const fetchedUsers = response.data;
            // const decodedToken = jwt.verify(storedToken, 'syQXbm1wI6j9vlONVK3ZGFSR8y27WpHA');
            // const username = decodedToken.username;
            setUsers(fetchedUsers);
            console.log(fetchedUsers)   
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUsers();
    }, []);
    console.log(users)


    return(
        <div>
           <TopPanel />
           <AdminStats user={users}/>
        </div>
    )
}
export default Dashboard