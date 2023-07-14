import React from 'react'
import styles from '../Styles/shows.module.css'

const Shows = ({shows}) => {
  return (
    <div className={styles.wrapper}>
      <div className='section-title'>
        <h1>Shows</h1>
      </div>
      <div className={styles.showsContainer}>
        {shows.map(show =>
          <div style={{width:'100%'}}>
            <hr style={{color: 'black'}}/>
            <div className = {styles.show}>
              <div className={styles.leftArea}>
                <p>{show.dateTime}</p>
                <p>{show.place}</p>
                <p>{show.venue}</p>
              </div>
              <div className={styles.center}>
                <a href={show.link} className={styles.linky}>Get Tickets</a>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Shows
