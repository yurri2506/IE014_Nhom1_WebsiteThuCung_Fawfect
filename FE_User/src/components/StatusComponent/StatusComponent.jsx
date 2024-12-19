import React from 'react'
import clsx from 'clsx'
import styles from './StatusComponent.module.scss'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'

const StatusComponent = ({ className, number, title = "", success, unSuccess, otherSuccess, ...props }) => {
    const classes = clsx({
        [styles.success]: success,
        [styles.unSuccess]: unSuccess,
        [styles.otherSuccess]: otherSuccess
    })

    return (
        <div style={{...props}} className={clsx(styles.main, className)}>
            <div className={classes}>
                <div className={styles.status}>
                    <span>{number}</span>
                </div>
                <span className={styles.title}>{title}</span>
            </div>
        </div>
    )
}

export default StatusComponent