import React from "react";
import { Routes, Route, Redirect, Switch } from "react-router-dom";
// components

import AdminNavbar from "./../components/Navbars/AdminNavbar.js";
import Sidebar from "./../components/Sidebar/Sidebar.js";
import HeaderStats from "./../components/Headers/HeaderStats.js";
import FooterAdmin from "./../components/Footers/FooterAdmin";
// views
import Dashboard from "./../views/admin/Dashboard.js";
import Plans from "./../views/admin/Plans.js";
import MyPlan from "./../views/admin/MyPlan";
import Settings from "./../views/admin/Settings.js";
import Deposit from "./../views/admin/Deposit.js";
import Withdraw from "./../views/admin/Withdraw.js";
import Pin from './../views/admin/pin'
import History from "../views/admin/History";
import CompletePay from "../views/admin/CompletePay.js";



export default function Admin() {
  return (
    <>


      <Sidebar />
      <div className="relative md:ml-64 bg-lightBlue-600">
        <AdminNavbar />
        {/* Header */}
        
        <div className=" mx-auto w-full">
          <Switch>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/Plans" component={Plans} />
            <Route path="/admin/myplans" component={MyPlan}  />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/deposit" component={Deposit} />
            <Route path="/admin/withdraw" component={Withdraw} />
            <Route path="/admin/payment" component={CompletePay} />
            <Route path="/admin/pin" component={Pin} />
            <Route path="/admin/history" component={History} />
            <Redirect from="/admin" to="/admin/dashboard" />          
            
          </Switch>
          <FooterAdmin />
        </div>
      </div>

    </>
  );
}
