import React from 'react'
import clsx from 'clsx'
import styles from './MoreComponent.module.scss'
import { Link } from 'react-router-dom'

const MoreComponent = ({ className }) => {
    const products = [
        "Đồ ăn", 
        "Sữa", 
        "Trang phục", 
        "Dụng cụ vệ sinh",
        "Sữa tắm",
        "Chuồng",
        "Balo"
    ]
    return (
        <div className={clsx(className, styles.more)}>
            <ul>
                {products.map((product) => {
                    return (
                        <li 
                            key={product}>
                            <Link to={"/"}>{product}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MoreComponent