import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
    <nav>
        <div className='nav-container'>
              <ul>
                <li><a href="#one">Shop</a></li>
                <li><a href="#two">Shows</a></li>
                <li><a href="#three">Gallery</a></li>
                <li><a href="#four">News</a></li>
                <li><a href="#five">Contact</a></li>
              </ul>
        </div>
    </nav>
      <section className="banner-section">
        <h2>Banner</h2>
        <div className='shop-item'>this is the banner space</div>
      </section>
      <section id="one" className="shop-section">
        <h2>Shop</h2>
        <div className='shop-item'>this is a shop item</div>
      </section>
      <section id="two" className="shows-section">
        <h2>Shows</h2>
      </section>
      <section id="three" className="gallery-section">
        <h2>Gallery</h2>
      </section>
      <section id="four" className="news-section">
        <h2>News</h2>
      </section>
      <section id="five" className="contact-section">
        <h2>Contact</h2>
      </section>
    </>
  )
}

export default App
