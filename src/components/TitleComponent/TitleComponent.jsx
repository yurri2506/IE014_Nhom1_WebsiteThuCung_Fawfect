import React from 'react'
import styles from './TitleComponent.module.scss'

const TitleComponent = ({ 
  title, 
  textTransform, 
  textAlign, 
  fontSize,
  fontWeight = "800",
  margin = "30px 0",
  color = "#000",
  className,
  ...props
}) => {
  return (
    <div 
      className={styles.title}
      style={{
        textAlign:textAlign, 
        textTransform: textTransform, 
        margin: margin,
        ...props
      }}
    >
        <h2 className={className} style={{fontSize: fontSize, color: color, fontWeight: fontWeight}}>{title}</h2>
    </div>
  )
}

export default TitleComponent