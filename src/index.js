import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './app'
import {UserProvider} from './state/userContext'


ReactDOM.render(
  
    <UserProvider>
      <App />
    </UserProvider>,

  document.getElementById("root")
);
