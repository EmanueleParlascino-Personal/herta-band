import React from 'react'
import { urlFor } from '../../lib/client'
import styles from "../Styles/banner.module.css"

const Banner = ({banners}) => {
  return (
    <div>
        <img src ={urlFor(banners[0].image)} className='banner-image'/>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{banners[0].product}</h1>
            <h3 className={styles.subtitle}>{banners[0].smallText}</h3>
        </div>
    </div>
  )
}

export default Banner
