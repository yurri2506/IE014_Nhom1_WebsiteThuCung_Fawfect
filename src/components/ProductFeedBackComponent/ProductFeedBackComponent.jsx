import React from 'react'
import styles from './ProductFeedBackComponent.module.scss'
import { Link } from 'react-router-dom'
import { IoIosStar } from "react-icons/io"

const ProductFeedBackComponent = ({
    img, 
    name,
    star,
    date,
    quanlity,
    isDecription,
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
                <p>Ngày bán: {date.saleDate}</p>
                <p>Loại sản phẩm: {date.productType}</p>
            </div>
            <div className={styles.quanlityAndisDecription}>
                <span>
                    Chất lượng sản phẩm:
                    <p>{quanlity}</p>
                </span>
            </div>
            <div className={styles.quanlityAndisDecription}>
                <span>
                    Đúng với mô tả:
                    <p>{isDecription}</p>
                </span>
            </div>
            <div className={styles.comment}>
                <span>{comment}</span>
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