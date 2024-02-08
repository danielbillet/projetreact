 import React from 'react'
 import styles from "./Panier.module.css"
import { useCart } from './CartContext';

 export function Panier() {
  const {cartState} = useCart()


  if (!cartState.items || cartState.items.length === 0) {
    return <p>Le panier est vide.</p>;
  } else {
    const calculerPrixTotalPourJeu = (jeu) => {
      return (jeu.prixJeu * jeu.quantite).toFixed(2)
    }

  const prixTotal = typeof cartState.total === 'number' ? cartState.total.toFixed(2) : 'N/A'


   return (
     <div>
       <h2>Panier</h2>
       <ul>
         {cartState.items.map((jeu, index) => (
           <li key={index}>
             {jeu.nomJeu} - Quantité: {jeu.quantite} - Prix: {calculerPrixTotalPourJeu(jeu)}€
           </li>
         ))}
       </ul>
       <p className={styles.prixTotalPanier}>Prix total du panier : {prixTotal}€</p>
     </div>
   )
 }
}