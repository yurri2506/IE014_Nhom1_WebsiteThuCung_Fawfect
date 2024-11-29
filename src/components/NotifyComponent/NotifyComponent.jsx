import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NotifyComponent.module.scss'
import clsx from 'clsx'

const NotifyComponent = ({ notifications, className }) => {
    const navigate = useNavigate();

    // Hàm xử lý khi click vào thông báo
    const handleNotificationClick = (notify) => {
        if (notify.type === 'Tình trạng đơn hàng') {
            navigate('/my-order')
        } else if (notify.type === 'Sản phẩm') {
            navigate(`/product-details/${notify.product_id}`)
        }
    };  

    const visibleNotifications = notifications.slice(0, 6);

    const handleShowMore = () => {
        navigate("/notify")
    };

    // Kiểm tra xem notifications có dữ liệu không
    if (notifications && notifications.length > 0) {
        return (
            <div className={clsx(styles.main, className)}>
                <ul>
                    {visibleNotifications.map((notify, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleNotificationClick(notify)}
                            className={clsx({
                                [styles.isRead]: notify.isRead,
                                [styles.isUnread]: !notify.isRead,
                            })}
                        >
                            <Link>
                                <img
                                    src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'
                                    alt="Notification icon"
                                />
                                <div className={styles.info}>
                                    <span>{notify.content}</span>
                                    <span>{notify.type}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li onClick={handleShowMore} className={styles.more}>
                        <Link to={"/"}>
                            Xem thêm
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
};




export default NotifyComponent