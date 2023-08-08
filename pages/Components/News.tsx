import React from 'react'
import styles from "../Styles/news.module.css"

const News = () => {
  return (
    <div className='center-video'>
      <div className='section-title'>
        <h1>News</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.newsContainer}>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5C06/production/_115385532_gettyimages-810407450.jpg" alt="ss" className={styles.newsThumbnail}/>
          <div>
            <a className={styles.newsLink}>Title</a>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5C06/production/_115385532_gettyimages-810407450.jpg" alt="ss" className={styles.newsThumbnail}/>
          <div>
            <a className={styles.newsLink}>Title</a>
          </div>
        </div>
        <div className={styles.newsContainer}>
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5C06/production/_115385532_gettyimages-810407450.jpg" alt="ss" className={styles.newsThumbnail}/>
          <div>
            <a className={styles.newsLink}>Title</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
