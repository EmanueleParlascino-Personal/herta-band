import React from 'react'
import { urlFor } from '../../lib/client'
import styles from "../Styles/banner.module.css"
import Carousel from "nuka-carousel"

const Banner = ({banners}) => {
  return (
    <div>
    <Carousel autoplay = {true} cellAlign = {'center'}  wrapAround={true} speed = {1000} autoplayInterval = {5000}>
      {banners.map(banner =>
        <div>
          <img src ={urlFor(banner.image)} className='banner-image'/>
          <div className={styles.textContainer}> 
              <h1 className={styles.title}>{banner.product}</h1>
              <h3 className={styles.subtitle}>{banner.smallText}</h3>
          </div>
        </div>
      )}
      </Carousel>
    </div>
  )
}

export default Banner
