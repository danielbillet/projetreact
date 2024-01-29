import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <>
    <div id={styles.footer}>
    <h2>Votre espace de discussion</h2>
    <ul>
        <li>Le forum</li>
        <li>Vos suggestions</li>
        <li>Vos réclamations</li>
    </ul>
    </div>
    
    </>
  )
}
