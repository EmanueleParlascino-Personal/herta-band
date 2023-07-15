import React from 'react'

const News = () => {
  return (
    <div className='center-video'>
      <div className='section-title'>
        <h1>News</h1>
      </div>
      <iframe width="760" 
              height="515" 
              src="https://www.youtube.com/embed/IpUKO-WKaqo" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
    </div>
  )
}

export default News
