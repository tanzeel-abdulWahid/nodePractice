import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { travelApi } from './services/travelApi';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={travelApi}>
    <App />
  </ApiProvider>

)
