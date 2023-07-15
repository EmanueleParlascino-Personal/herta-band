import React from 'react'
import styles from "../Styles/navbar.module.css"
import {Link} from 'react-scroll';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navMenu}>
          <Link  to="shop" spy={true} smooth={true} offset={-100} duration={500}>Shop</Link>
          <Link  to="shows" spy={true} smooth={true} offset={-100} duration={500}>Shows</Link>
          <Link  to="gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
          <Link  to="news" spy={true} smooth={true} offset={-100} duration={500}>News</Link>
          <Link  to="Contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          <div className={styles.dot}></div>
      </nav>
    </div>
  )
}

export default NavBar
