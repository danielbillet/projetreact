import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import {Main} from './Main'
import NavBar from './NavBar'





export const HomePage = () => {
  return (
    <>
        <NavBar/>
        <Header />
        <Main/>
        <Footer />
    </>
  )
}
