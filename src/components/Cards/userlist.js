import React, {useState, useEffect, useContext} from "react";
import {Link } from 'react-router-dom'
import AddUser from "../../components/Modals/addUser";
import axios from "axios";
import '../Modals/style.css'
// components

import { UserContext } from "../../state/userContext";

export default function Userlist() {
  const {url} = useContext(UserContext)
  const [update, setUpdate] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [user, setUsers] = useState([])


  useEffect(() => {
    const fetchUsers = async () => {
      
      try {
          const response = await axios.get(`${url}/users`);
          const fetchedUsers = response.data;
          setUsers(fetchedUsers);
          console.log(fetchedUsers)   
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  console.log(user)

  function handleClick(prop){
    setIsOpen(true)
    setId(prop.id)
    setName(prop.name)
  }
  console.log(id, name)

  function closeModal() {
    setIsOpen(false);
  }
 

  const updateUsers = () => {
    const newUpdate = {

    }
  }


  return (
    <>
    <div className="relative bg-lightBlue-600 pb-32">
        <div className="md:px-10 mx-auto w-full">

        <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row px-4">
        <div>
            <h5 class="mb-2 text-white op-7">User List</h5> 
        </div>
        <div class="py-2 ml-md-auto py-md-0">
            <a href="" class="mr-2 btn btn-success btn-border" data-toggle="modal" data-target="#Adduser">Add user</a>
          </div>
        </div>
      <div className="flex flex-wrap  mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Clients
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Account balance
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Phone Number
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Status
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                user.reverse().map((user)=>(

                  <tr key={user.id}
                   className="cursor-pointer bg-white hover:bg-sky-300 "
                   
                    >
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                 {user.name}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  ${user.balance}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.email}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.phone}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {user.active? "Active": "Banned"}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <Link to={{
                    pathname: "/super-admin/user",
                    state : user._id
                    }}
                    >

                    <button type="submit"  class="btn btn-secondary"  onClick={()=> handleClick({id: user.id, name: user.name})}>Manage</button>
                  </Link>
                </td>


              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
              {/* Another one */}
              <div class="modal" tabindex="-1" id="Adduser" role="dialog">
                  <div class="modal-dialog" role="document">
                     <AddUser/>
                  </div>
              </div>
    </>
  );
}
