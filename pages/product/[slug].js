import React from 'react'
import { useState } from 'react'
import {client , urlFor} from '../../lib/client'
import styles from '../Styles/product.module.css'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({products, product}) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();
    return (
        <div className={styles.container}>
            <div>
            <img src={urlFor(image[index])} className={styles.productImage} />
            <div className={styles.smallImagesContainer}>
                {image?.map((item, i) => (
                <img 
                    key={i}
                    src={urlFor(item)}
                    className={i === index ? `${styles.smallImage} ${styles.selectedImage}` : styles.smallImage}
                    onMouseEnter={() => setIndex(i)}
                />
                ))}
            </div>
            </div>
            <div className={styles.text}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.price}>{price} Euro</p>
                <h4 className={styles.detailsTitle}>Details: </h4>
                <p className={styles.detailsBody}>{details}</p>    
                <div>
                    <div className='quantity'>
                        <h3>Quantity:</h3>
                        <button className='minus' onClick={decQty}>-</button>
                        <span className='num'>{qty}</span>
                        <button className='plus' onClick={incQty}>+</button>
                    </div>
                    <button className={styles.addToCart}>Buy now</button>
                    <button className={styles.addToCart} onClick={() => onAdd(product, qty)}>Add to cart</button>
                </div>   
            </div>
            
        </div>
    )
}


export const getStaticPaths = async () =>{
    const query = `*[_type == "product"]{
        slug{
            current
        }
    }`
    const products = await client.fetch(query);

    const paths = products.map(p => ({
        params:{
            slug: p.slug.current
        }
    }));

    return{
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({params: {slug}}) => {
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(productQuery);

    const query = `*[_type == "product" && category.current == '${product.category}']`;  //testing out getting products in the same category
    const products = await client.fetch(query);

    return {
        props:{products, product}
    }

}

export default ProductDetails
