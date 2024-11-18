import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import Avatar from '../../assets/images/avatar.jpg'

import { FaUser, FaLock, FaBox, FaBell, FaGift, FaSignOutAlt } from 'react-icons/fa'

const cx = classNames.bind(styles)

function SideBar() {
    const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(false);

    const togglePersonalInfo = () => {
        setIsPersonalInfoOpen(!isPersonalInfoOpen);
    };

    return (
        <div className={cx('sidebar-wrapper')}>
            <div className={cx('container')}>
                <img src={Avatar} alt='avatar' className={cx('images')} />
                <div className={cx('content')}>
                    <span className={cx('user-name')}>Nguyễn Lê Thanh Huyền<br></br></span>
                    <span className={cx('username')}>yurri_2506</span>
                </div>
                <nav className={cx('nav')}>
                    <div className={cx('nav-item')} onClick={togglePersonalInfo}>
                        <FaUser className={cx('icon')} />
                        <span className={cx('nav-link')}>Thông tin cá nhân</span>
                    </div>
                    {isPersonalInfoOpen && (
                        <div className={cx('submenu')}>
                            <a href="#" className={cx('submenu-link')}>
                                <FaUser className={cx('icon')} />
                                Hồ sơ tài khoản
                            </a>
                            <a href="#" className={cx('submenu-link')}>
                                <FaLock className={cx('icon')} />
                                Đổi mật khẩu
                            </a>
                        </div>
                    )}
                    <a href="#" className={cx('nav-link')}>
                        <FaBox className={cx('icon')} />
                        Đơn hàng
                    </a>
                    <a href="#" className={cx('nav-link')}>
                        <FaBell className={cx('icon')} />
                        Thông báo
                    </a>
                    <a href="#" className={cx('nav-link')}>
                        <FaGift className={cx('icon')} />
                        Kho voucher
                    </a>
                    <a href="#" className={cx('nav-link', 'logout')}>
                        <FaSignOutAlt className={cx('icon')} />
                        Đăng xuất
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default SideBar
