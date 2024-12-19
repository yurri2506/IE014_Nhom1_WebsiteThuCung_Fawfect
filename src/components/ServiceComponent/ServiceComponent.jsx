import React from 'react'
import styles from './ServiceComponent.module.scss'

const ServiceComponent = ({ src, alt, text, width }) => {
  return (
    <div className={styles.service}>
            <img src={src} alt={alt}></img>
            <span style={{width: width}}>{text}</span>
    </div>
  )
}

export default ServiceComponent