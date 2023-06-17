import React, {useState, useContext, useEffect} from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from './state/userContext';
import Cookies from 'js-cookie';

// Components
import ProtectedRoute from './views/protected';
import SuperAminProtectedRoute from './views/superAdminProtect'

// layouts

import Admin from "./layouts/Admin.js";
import SuperAdmin from "./layouts/SuperAdmin";
import Auth from "./layouts/Auth.js";
import Plans from "./views/admin/Plans"

// views without layouts

import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js"; 
import Index from "./views/Index.js";
import { setTokenSourceMapRange } from 'typescript';


const App = () => {

  const token = localStorage.getItem('token')
    return(
    <BrowserRouter>
    
    <Switch>

      <Route
          path="/super-admin"
          render={() =>
            token ? <SuperAdmin /> : <Redirect to="/auth/super-admin/login" />
          }
        />
      <Route
          path="/admin"
          render={() =>
            token ? <Admin /> : <Redirect to="/auth/login" />
          }
        />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing"  component={Landing} />
      {/* <Route path="/profile" exact component={Profile} /> */}
      <Route path="/admin/plans" component={Plans} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from='/*'  to="/" />
      
    </Switch>
      
  </BrowserRouter>

    )
}
export default App