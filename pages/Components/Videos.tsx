import React from 'react'

const Videos = () => {
  return (
    <div className='center-video'>
        <div className='section-title'>
            <h1>Videos</h1>
        </div>
        <div>
        <iframe width="760" 
                height="515" 
                src="https://www.youtube.com/embed/IpUKO-WKaqo" 
                title="YouTube video player" 
                frameborder="0" 
                className='video'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <iframe width="760" 
                height="515" 
                src="https://www.youtube.com/embed/IpUKO-WKaqo" 
                title="YouTube video player" 
                frameborder="0" 
                className='video'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Videos