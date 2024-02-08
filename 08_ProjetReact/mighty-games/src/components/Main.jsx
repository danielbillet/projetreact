import React, { useState } from 'react'
import GamesPresentationBox from './GamesPresentationBox'
import styles from './GamesData.module.css'
import gamesData from './GamesData'
import style from "./Panier.module.css"
import { PanierPage } from './PanierPage'
import { useCart } from './CartContext'



 export const Main = () =>{

  const {cartState, dispatch} = useCart()

  const ajouterAuPanier = (jeu) => {
    dispatch({type: 'ADD_TO_CART', payload: jeu})
  }

  const calculerPrixTotal = () => {
    return cartState.total.toFixed(2)
  }

  return (
    <div id={styles.gamesDataContainer}>
      <div className={styles.GamesDataMainContainer}>
        {gamesData.map((game, index) => (
          <GamesPresentationBox
            key={index}
            ajouterAuPanier={ajouterAuPanier}
            {...game}
          />
        ))}
      </div>
      <div className={style.panierRender}>
      <PanierPage panier={cartState.items} calculerPrixTotal={calculerPrixTotal}/>
      </div> 
    </div>
  )
}

