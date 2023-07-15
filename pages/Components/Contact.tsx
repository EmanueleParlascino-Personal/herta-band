import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styles from "../Styles/contact.module.css"

const Contact = () => {
  return (
    <div>
      <div className='section-title'>
        <h1>Contact</h1>
      </div>
      <h2 className={styles.cta}>Stay tuned</h2>
      <input className={styles.inpt}/>
      <footer className={styles.footer}>
        <div className={styles.socialItem}>
          <SocialIcon url="https://www.facebook.com/" />
        </div>
        <div className={styles.socialItem}>
          <SocialIcon url="https://open.spotify.com/" />
        </div>
        <div className={styles.socialItem}>
          <SocialIcon url="https://www.instagram.com" />
        </div>
        <div className={styles.socialItem}>
          <SocialIcon url="https://www.youtube.com/channel/UC0tISnW4zwlY1abcOXvOuMg" />
        </div>
        <div className={styles.socialItem}>
          <SocialIcon url="https://www.patreon.com/home" />
        </div>
        <div className={styles.socialItem}>
          <SocialIcon url="https://bandcamp.com/" />
        </div>
      </footer>

    </div>
  )
}

export default Contact
