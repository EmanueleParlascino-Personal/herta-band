import styles from "./App.module.css"

function Page() {


  return (
    <>
    <nav className={styles.navMenu}>
      <a href="#">Shop</a>
      <a href="#">Shows</a>
      <a href="#">Gallery</a>
      <a href="#">News</a>
      <a href="#">Contact</a>
      <div className={styles.dot}></div>
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

export default Page
