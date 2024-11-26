import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotifyComponent.module.scss'
import clsx from 'clsx'

const NotifyComponent = ({className, img, title1, title2}) => {
  return (
    <div className={clsx(styles.main, className)}>
        <ul>
            <li>
                <Link>
                    <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
                    <div className={styles.info}>
                        <span>{title1}</span>
                        <span>{title2}</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link>
                    <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
                    <div className={styles.info}>
                        <span>{title1}</span>
                        <span>{title2}</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link>
                    <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
                    <div className={styles.info}>
                        <span>{title1}</span>
                        <span>{title2}</span>
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NotifyComponent