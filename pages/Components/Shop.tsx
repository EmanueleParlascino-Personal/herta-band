import React from 'react'
import styles from "../Styles/shop.module.css"
import { urlFor } from '../../lib/client'
import Link from 'next/link'


const Shop = ({products}) => {
    const clothing = products?.filter(p => p.category === "Clothing")
    const accessories = products?.filter(p => p.category === "Accessories")
    const tabs = products?.filter(p => p.category === "Tabs")
    
    return (
        <div className={styles.container}>
            <div className='section-title'>
                <h1>Merch</h1>
            </div>
            <div className={styles.wrapper}>
                {clothing?.map(p => 
                <Link href = {`/product/${p.slug.current}`}>
                    <div className={styles.clippedBorder}>
                        <img src ={urlFor(p.image[0])} className={styles.image} />
                    </div>
                </Link>)}
            </div>
            <Link href = {`/Merch`}>
                <p className={styles.seeMore}>See More..</p>
            </Link>
           
        </div>
    )
}


export default Shop
