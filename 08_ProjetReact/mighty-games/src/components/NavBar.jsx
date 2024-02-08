import React from 'react'
import {Link, Outlet } from "react-router-dom"

export default function NavBar  () {
  return (
    <div>  
    <Link to="/">Home Page</Link>
    <Link to="/PanierPage">Mon Panier</Link> 
    <Outlet/>
  </div>
  )
}

