import React from 'react'
import { useNavigate } from 'react-router-dom'
import backArrow from '../../assets/images/backArrow.svg'
import styles from './BackButtonComponent.module.scss'

const BackButtonComponent = () => {
    const navigate = useNavigate();

    return (
      <button className={styles.btn} onClick={() => navigate(-1)}>
        <img src={backArrow} alt="" />
      </button>
    );
}

export default BackButtonComponent