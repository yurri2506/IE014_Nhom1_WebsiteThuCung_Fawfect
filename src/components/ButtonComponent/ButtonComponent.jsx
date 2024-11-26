import React from 'react'
import clsx from 'clsx'
import styles from './ButtonComponent.module.scss'

const ButtonComponent = ({ title, icon, margin, 
  width,
  height,
  className,
  widthDiv = "100%",
  minWidth,
  fontSize,
  borderRadius = "0", 
  disabled,
  primary,
  showIcon = true,
  iconSmall, 
  iconLarge, 
  ...props }) => {

  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.iconSmall]: iconSmall,
    [styles.iconLarge]: iconLarge,
    [styles.disabled]: disabled
  }, className)
  return (
    <div 
      style={{
      width: widthDiv, 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      margin: margin
    }}
    >
      <button
        type="button" 
        className={classes}
        style={{borderRadius: borderRadius, width: width, height: height, minWidth: minWidth}}
        {...props}
      >
        {showIcon && <img src={icon} alt="" />}
        <div style={{fontSize: fontSize}}>
          <p style={{margin: "0"}}>{title}</p>
        </div>
      </button>
    </div>
  )
}

export default ButtonComponent