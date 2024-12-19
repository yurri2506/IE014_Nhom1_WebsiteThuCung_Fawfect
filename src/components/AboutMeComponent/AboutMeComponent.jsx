import React from 'react'
import styles from './AboutMeComponent.module.scss'

const AboutMeComponent = ({avt, aboutName, aboutPara1, aboutPara2, aboutPara3 }) => {
  return (
    <div className={styles.main}>
        <div className={styles.img}>
            <img src={avt} alt="" />
        </div>
        <div className={styles.aboutMore}>
            <h3>{aboutName}</h3>
            <ul>
                <li>{aboutPara1}</li>
                <li>{aboutPara2}</li>
                <li>{aboutPara3}</li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMeComponent