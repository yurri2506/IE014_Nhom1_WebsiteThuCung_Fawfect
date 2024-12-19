import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BottomMenuComponent.module.scss";
import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";

const BottomMenuComponent = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const handleMouseEnter = (index) => {
        setHoveredIndex(index); 
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className={styles.bottomMenu}>
            <Link 
                to="/" 
                className={styles.menuItem}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredIndex === 0 ? <IoHomeSharp /> : <IoHomeOutline />}
                <span>Trang chủ</span>
            </Link>
            <Link 
                to="/notify" 
                className={styles.menuItem}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredIndex === 1 ? <IoMdNotifications /> : <IoIosNotificationsOutline />}
                <span>Thông báo</span>
            </Link>
            <Link 
                to="/wish-list" 
                className={styles.menuItem}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredIndex === 2 ? <FaHeart /> : <FaRegHeart />}
                <span>Yêu thích</span>
            </Link>
            <Link 
                to="/profile" 
                className={styles.menuItem} 
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
            >
                {hoveredIndex === 3 ? <FaUser /> : <FaRegUser />}
                <span>Cá nhân</span>
            </Link>
        </div>
    );
};

export default BottomMenuComponent;
