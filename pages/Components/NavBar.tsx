import React from 'react'
import styles from "../Styles/navbar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navMenu}>
        <a href="#shop">Shop</a>
        <a href="#">Shows</a>
        <a href="#">Gallery</a>
        <a href="#">News</a>
        <a href="#">Contact</a>
        <div className={styles.dot}></div>
  </nav>
  )
}

export default NavBar
