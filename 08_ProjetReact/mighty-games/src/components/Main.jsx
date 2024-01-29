import React, { useState } from 'react'
import GamesPresentationBox from './GamesPresentationBox'
import {Panier} from './Panier'
import styles from './GamesData.module.css'
import gamesData from './GamesData'
import style from "./Panier.module.css"

 export const Main = () =>{
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (jeu) => {
    const existingGameIndex = panier.findIndex((item) => item.nomJeu === jeu.nomJeu);

    if (existingGameIndex !== -1) {
      const updatedPanier = [...panier]
      updatedPanier[existingGameIndex].quantite += 1
      setPanier(updatedPanier)
    } 
    else {
      setPanier([...panier, { ...jeu, quantite: 1 }])
    }
  };
  const calculerPrixTotal = () => {
    let prixTotal = 0

    for (const jeu of panier) {
      prixTotal += jeu.prixJeu * jeu.quantite;
    }

    return prixTotal.toFixed(2)


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
      <Panier panier={panier} calculerPrixTotal={calculerPrixTotal}/>
      </div>
    </div>
  )
}

