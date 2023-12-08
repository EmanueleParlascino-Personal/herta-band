import React from 'react'
import styles from "../Styles/navbar.module.css"

import Link from 'next/link'
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
          <Link  href = {'../'}>Merch</Link>
          <Link  href = {'./'}>Shows</Link>
          <Link  href = {'./'}>Gallery</Link>
          <Link  href = {'./'}>News</Link>
          <Link  href = {'./'}>Contact</Link>
          <div className={styles.dot}></div>
      </nav>
      <button className={styles.cartButton} onClick={() => setShowCart(true)}><Image src={cartIcon} alt=""  className={styles.cartIcon}/></button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar
