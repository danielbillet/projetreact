 import React from 'react'
 import styles from "./Panier.module.css"

 export function Panier({ panier, calculerPrixTotal}) {

   return (
     <div>
       <h2>Panier</h2>
       <ul>
         {panier.map((jeu, index) => (
           <li key={index}>
             {jeu.nomJeu} - Quantité: {jeu.quantite} - Prix: {jeu.prixJeu}€
           </li>
         ))}
       </ul>
       <p className={styles.prixTotalPanier}>Prix total du panier : {calculerPrixTotal()}€</p>
     </div>
   );
 }