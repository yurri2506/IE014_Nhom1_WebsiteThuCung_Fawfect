import React from 'react'
import clsx from 'clsx'
import styles from './ButtonComponent.module.scss'

const ButtonComponent = ({ title, icon, margin, primary, iconSmall, iconLarge, ...props }) => {

  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.iconSmall]: iconSmall,
    [styles.iconLarge]: iconLarge
  })
  return (
    <div 
      style={{
      width: "100%", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      margin: margin
    }}
    >
      <button 
        type="button" 
        className={classes}
        {...props}
      >
        <img src={icon} alt="" />
        {title}
      </button>
    </div>
  )
}

export default ButtonComponent