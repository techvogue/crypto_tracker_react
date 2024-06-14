import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './component/Main/Home.jsx'
import Contact from './component/contact/index.jsx'
import About from './component/about/index.jsx'
import CoinDetail from './component/coin_detail/coin.jsx'

import './index.css'
import Dashboard from './component/Dashboard/dashboard.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
          
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/CoinDetail/:coinId' element={<CoinDetail/>}/>
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}/>
   
  // </React.StrictMode> 
)
