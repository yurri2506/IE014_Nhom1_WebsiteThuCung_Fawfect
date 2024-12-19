import React, { useState } from 'react'
import styles from './InputFormComponent.module.scss'
import { MdOutlineVisibility } from "react-icons/md"
import { MdOutlineVisibilityOff } from "react-icons/md"
import clsx from 'clsx'

const InputFormComponent = ({ className, type = "text", 
    placeholder,
    width,
    height,
    borderRadius,
    icon, 
    margin = "0",
    isPassword = false,
    positionProps = {},
    ...props }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className={clsx(className, styles.input)}>
      <input 
        style={{margin: margin, width: width, height: height, borderRadius: borderRadius}} 
        type={type === "password" && showPassword ? "text" : type}
        required
        // value={value}
        placeholder={placeholder} 
        {...props}
      />
      <span style={{...positionProps.mainSpan}}>{icon}</span>
      {type === "password" && 
        <span style={{...positionProps.otherSpan}} onClick={togglePasswordVisibility}>
          {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
        </span>
      }
    </div>
  )
}

export default InputFormComponent