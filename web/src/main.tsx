import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import  Home  from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/habits' Component={App} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
