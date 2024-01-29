import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import {Main} from './Main'
import {Link , Outlet} from "react-router-dom"



export const HomePage = () => {
  return (
    <>
    <Link to="/">Home Page</Link>
    <Link to="/Panier">Mon Panier</Link>
      <Outlet/>
        <Header />
        <Main/>
        <Footer />
    </>
  )
}
