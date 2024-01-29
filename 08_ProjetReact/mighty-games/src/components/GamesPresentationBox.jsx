import React, { useState } from 'react'
import styles from './GamesPresentationBox.module.css'




export default function GamesPresentationBox(props) {
  const { nomJeu, imgJeu, genreJeu, plateformeJeu, prixJeu, stock} = props;
  const [gameStock, setGameStock] = useState(stock)
 
  const updateStock = () => {

    if (gameStock > 0) {
      const updatedStock = gameStock - 1
      setGameStock(updatedStock)
      props.ajouterAuPanier({
        nomJeu,
        quantite: 1,
        prixJeu
      })
      }

     else {
      console.log("Plus de stock disponible")
    }
  };

  return (
    <div id={styles.gameInfoBox}>
      <h2 className={styles.h2}>{nomJeu}</h2>
      <img src={`${imgJeu}`} className={styles.imgbox} alt='imgJeu' />
      <div className={styles.paragraphalign}>
        <p><b>Genre :{genreJeu}</b></p>
        <p><b>Plateforme : {plateformeJeu}</b></p>
        <p><b>Prix : {prixJeu}€</b></p>
        {gameStock > 0 ? (
          <p><b>Stock disponible: {gameStock}</b></p>
        ) : (
          <p><b>Plus de stock disponible</b></p>
        )}
        <button onClick={updateStock}>Ajouter au panier</button>
      </div>
    </div>
  )
}
