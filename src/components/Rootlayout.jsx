import React from 'react'
import Navber from './Home/Navber';
import FooterCom from './FooterCom';
import { Outlet } from "react-router-dom"

const Rootlayout = () => {
  return (
    <>
    <Navber/>
    <Outlet/>
    <FooterCom/>
    
    </>
  )
}

export default Rootlayout