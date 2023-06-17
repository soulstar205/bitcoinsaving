import React from "react";
// import { useLocation } from 'react-router-dom';
import { Routes, Route, Redirect, Switch } from "react-router-dom";

// components
import UserPage from "../views/admin/superAdmin/userPage";
import Dashboard from "../views/admin/superAdmin/dashboard";
import Plans from "../views/admin/superAdmin/plans";
import Navbar from "../views/admin/superAdmin/navbar";
import Userlist from "../components/Cards/userlist.js";
import Sidebar from "../components/Sidebar/adminSidebar";



export default function SuperAdmin() {
  // const location = useLocation();

  // useEffect(() => {
  //   window.location.reload();
  // }, [location]);


  return (
    <>
    <Sidebar />
    <div className="relative md:ml-64 bg-lightBlue-600">
    <Navbar/>
    <div className="bg-info mt-10">
      <Switch>
        <Route path="/super-admin/plans" component={Plans}/>
        <Route path="/super-admin/user" component={UserPage}/>
        <Route path="/super-admin/userlist"  component={Userlist}/>
        <Redirect from="/admin/super-admin" to="/super-admin" />          
        <Route path="/" component={Dashboard}/>
      </Switch>
    </div>
    </div>
    </>
  );
}
