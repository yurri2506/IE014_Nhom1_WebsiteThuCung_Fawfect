import React from 'react'
import { IoIosStar } from 'react-icons/io'
import { RiVerifiedBadgeFill } from "react-icons/ri"
import styles from './FeedBackComponent.module.scss'

const FeedBackComponent = ({ customer, review }) => {
  return (
    <div className={styles.feedback}>
        <div className={styles.star}>
            <IoIosStar className={styles.icon}/>
            <IoIosStar className={styles.icon}/>
            <IoIosStar className={styles.icon}/>
            <IoIosStar className={styles.icon}/>
            <IoIosStar className={styles.icon}/>
        </div>
        <div className={styles.review}>
            <div className={styles.customer}>
                <span>{customer}</span>
                <RiVerifiedBadgeFill className={styles.icon}/>
            </div>
            <p>{review}</p>
        </div>
    </div>
  )
}

export default FeedBackComponent