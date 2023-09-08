import React from 'react'
import { useState } from 'react'
import styles from "./Styles/shop.module.css"
import { urlFor } from '../lib/client'
import { client } from '../lib/client'
import Link from 'next/link'


const Shop = ({products}) => {
    const clothing = products?.filter(p => p.category === "Clothing")
    const accessories = products?.filter(p => p.category === "Accessories")
    const tabs = products?.filter(p => p.category === "Tabs")

    const [section, setSection] = useState(["Clothing"])


    
    return (
        <div className={styles.container}>
            <div className={styles.sectionsNav}>
                <a onClick={() => setSection("Clothing")} className={section == "Clothing" ? styles.sectionActive : styles.sectionInactive}>Clothing</a>
                <a onClick={() => setSection("Accessories")} className={section == "Accessories" ? styles.sectionActive : styles.sectionInactive}>Accessories</a>
                <a onClick={() => setSection("Tabs")} className={section == "Tabs" ? styles.sectionActive : styles.sectionInactive}>Tabs</a>
            </div>

            {section == "Clothing" ? 
            <div className={styles.wrapper}>
                {clothing?.map(p => 
                <Link href = {`/product/${p.slug.current}`}>
                    <div className={styles.clippedBorder}>
                        <img src ={urlFor(p.image[0])} className={styles.image} />
                    </div>
                </Link>)}
            </div>: section == "Accessories" ?  
            <div className={styles.wrapper}>
                {accessories?.map(p => 
                <Link href = {`/product/${p.slug.current}`}>
                    <div className={styles.clippedBorder}>
                        <img src ={urlFor(p.image[0])} className={styles.image} />
                    </div>
                </Link>)}
            </div>:
            <div className={styles.wrapper}>
                {tabs?.map(p => 
                <Link href = {`/product/${p.slug.current}`}>
                    <div className={styles.clippedBorder}>
                        <img src ={urlFor(p.image[0])} className={styles.image} />
                    </div>
                </Link>)}
            </div> }
            
            
            
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);



    return {
        props:{products}
    }

}


export default Shop
