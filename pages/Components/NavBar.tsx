import React from 'react'
import styles from "../Styles/navbar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navMenu}>
        <a href="#shop">Shop</a>
        <a href="#shows">Shows</a>
        <a href="#gallery">Gallery</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div className={styles.dot}></div>
    </nav>
  )
}

export default NavBar
