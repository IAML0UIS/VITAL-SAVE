import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { VitalSave } from './VitalSave';

import "../src/assets/scss/paper-dashboard.scss";
import "perfect-scrollbar/css/perfect-scrollbar.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <VitalSave />
    </BrowserRouter>
  </React.StrictMode>,
)
