import React from 'react'
import styles from './BrandComponent.module.scss'

const BrandComponent = ({ src, alt }) => {
  return (
    <div className={styles.brand}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default BrandComponent