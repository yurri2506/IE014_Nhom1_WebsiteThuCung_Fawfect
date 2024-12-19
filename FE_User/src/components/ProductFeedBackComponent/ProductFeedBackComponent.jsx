import React from 'react'
import styles from './ProductFeedBackComponent.module.scss'
import { Link } from 'react-router-dom'
import { IoIosStar } from "react-icons/io"

const ProductFeedBackComponent = ({
    img, 
    name,
    star,
    date,
    comment, 
    imgFeedback
}) => {
  return (
    <div className={styles.main}>
        <div className={styles.img}>
            <img src={img} alt="" />
        </div>
        <div className={styles.feedback}>
            <Link to={"/"}>{name}</Link>
            <div className={styles.star}>
                {Array.from({ length: star }).map((_, index) => (
                    <IoIosStar key={index} className={styles.icon} />
                ))}
            </div>
            <div className={styles.date}>
                <p>Ngày đánh giá: {date}</p>
            </div>
            <div className={styles.comment}>
                <span>Nội dung: {comment}</span>
            </div>
            <div className={styles.imgFeedback}>
                {imgFeedback.map((img, index) => (
                    <img key={index} src={img} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductFeedBackComponent