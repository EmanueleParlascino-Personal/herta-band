import React from 'react'
import styles from "../Styles/navbar.module.css"
import {Link} from 'react-scroll';
import Image from 'next/image';
import logo from '../../public/images/pngegg.png'
import cartIcon from '../../public/images/cartIcon.png'
import Cart from './Cart';
import { useStateContext } from '../../context/StateContext';


const NavBar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className={styles.container}>
      <Image src={logo} alt="" className={styles.logo} />
      <nav className={styles.navMenu}>
          <Link  to="shop" spy={true} smooth={true} offset={-100} duration={500}>Merch</Link>
          <Link  to="shows" spy={true} smooth={true} offset={-100} duration={500}>Shows</Link>
          <Link  to="gallery" spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link>
          <Link  to="news" spy={true} smooth={true} offset={-100} duration={500}>News</Link>
          <Link  to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          <div className={styles.dot}></div>
      </nav>
      <button className={styles.cartButton} onClick={() => setShowCart(true)}><Image src={cartIcon} alt=""  className={styles.cartIcon}/></button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar
