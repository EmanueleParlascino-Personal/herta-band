import React from 'react'
import ImageGallery from 'react-image-gallery';
import { urlFor } from '../../lib/client'




const Gallery = ({images}) => {
  const imagesMapped = images?.map(image =>{
    const imaged = { original: urlFor(image.image), thumbnail: urlFor(image.image) }
    return imaged})
  return (
    <div className='gallery-container'>
      <ImageGallery items={imagesMapped} /> 
    </div>
  )
}

export default Gallery
