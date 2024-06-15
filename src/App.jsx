import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/footer'
function App() {
 

  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>

    </>
  )
}

export default App
