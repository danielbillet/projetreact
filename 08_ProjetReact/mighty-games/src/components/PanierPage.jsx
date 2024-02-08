import React from 'react'
import {Panier} from './Panier' 
import { useCart } from './CartContext'


export const PanierPage = () => {
  const {cartState} = useCart()
  
  return (
    <div><Panier panier={cartState.items} calculerPrixTotal={cartState.total}/>    
    </div>
  )
}
