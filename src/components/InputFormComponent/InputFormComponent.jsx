import React from 'react'
import styles from './InputFormComponent.module.scss'
import { MdPhonePaused } from 'react-icons/md'

const InputFormComponent = ({ placeholder, icon, margin = "0" }) => {
  return (
    <div className={styles.input}>
        <span>{icon}</span>
        <input style={{margin: margin}} type="tel" pattern="[0-9]{10}" required placeholder={placeholder} />
    </div>
  )
}

export default InputFormComponent