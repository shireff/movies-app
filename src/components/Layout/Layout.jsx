import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Data from './../Data/Data'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}
