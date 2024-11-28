import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NotifyComponent.module.scss'
import clsx from 'clsx'

// const NotifyComponent = ({className, img, title1, title2}) => {
//   return (
//     <div className={clsx(styles.main, className)}>
//         <ul>
//             <li>
//                 <Link>
//                     <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
//                     <div className={styles.info}>
//                         <span>{title1}</span>
//                         <span>{title2}</span>
//                     </div>
//                 </Link>
//             </li>
//             <li>
//                 <Link>
//                     <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
//                     <div className={styles.info}>
//                         <span>{title1}</span>
//                         <span>{title2}</span>
//                     </div>
//                 </Link>
//             </li>
//             <li>
//                 <Link>
//                     <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png'/>
//                     <div className={styles.info}>
//                         <span>{title1}</span>
//                         <span>{title2}</span>
//                     </div>
//                 </Link>
//             </li>
//         </ul>
//     </div>
//   )
// }


// const NotifyComponent = ({ notifications, className }) => {

//     const navigate = useNavigate()
//     const handleNotificationClick = (notify) => {
//     console.log("Notification clicked:", notify);
//     if(notify.type === 'Tình trạng đơn hàng'){
//         navigate('/my-order')
//     }
//   };
//     // Kiểm tra xem notifications có dữ liệu không
//     console.log(notifications)
//     if (notifications) {
//         return (
//             <div className={clsx(styles.main, className)} >
//                 <ul>
//                     {notifications.map((notify, index) => (
//                         <li key={index} onClick={handleNotificationClick(notify)}>
//                             <Link>
//                                 <img src='https://cdn.abphotos.link/photos/resized/320x/2022/11/09/1667966442_I7NtmJxar1oP0HZE_1667970485-phpdxsdpe.png' />
//                                 <div className={styles.info}>
//                                     <span>{notify.content}</span>
//                                     <span>{notify.type}</span>
//                                 </div>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     } else {
//         return <p>Không có thông báo nào</p>;
//     }
// };




const NotifyComponent = ({ notifications, className }) => {
    const navigate = useNavigate(); // Dùng để điều hướng nếu cần

    // Hàm xử lý khi click vào thông báo
    const handleNotificationClick = (notify) => {
        if (notify.type === 'Tình trạng đơn hàng') {
            navigate('/my-order')
        }else if(notify.type === 'Sản phẩm'){
            navigate(`/product-details/${notify.product_id}`)
        }
    };  

    // Kiểm tra xem notifications có dữ liệu không
    if (notifications && notifications.length > 0) {
        return (
            <div className={clsx(styles.main, className)}>
                <ul>
                    {notifications.map((notify, index) => (
                        <li key={index} onClick={() => handleNotificationClick(notify)}>
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
                </ul>
            </div>
        );
    } 
};




export default NotifyComponent