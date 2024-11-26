import React, { useState, useEffect } from "react";
import { Col, Input, Row, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./HeaderComponent.module.scss";
import { GrNotification } from "react-icons/gr";
import { TbHelpSquare } from "react-icons/tb";
import { FaChevronDown, FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { SearchOutlined } from "@ant-design/icons";
import MoreComponent from "../MoreComponent/MoreComponent";
import whiteLogo from "../../assets/images/whiteLogo.svg";
import { useSelector } from "react-redux";
import myAvatarFalse from "../../assets/images/avatar-false.jpg";

const HeaderComponent = () => {
  const [avatar, setAvatar] = useState(myAvatarFalse);
  const [userName, setUserName] = useState("Người dùng");

  // Lấy thông tin từ Redux
  const { isAuthenticated, user_name, user_avt_img } = useSelector(
    (state) => state.user
  );

  // Xử lý avatar và tên người dùng
  useEffect(() => {
    if (isAuthenticated) {
      setUserName(user_name || "Người dùng");
      if (user_avt_img) {
        // Xử lý hiển thị avatar từ API (base64) hoặc mặc định
        const avatarSrc = `data:image/jpeg;base64,${user_avt_img}`;
        setAvatar(avatarSrc);
      } else {
        setAvatar(myAvatarFalse);
      }
    } else {
      // Người dùng chưa đăng nhập
      setAvatar(myAvatarFalse);
      setUserName("Người dùng");
    }
  }, [isAuthenticated, user_name, user_avt_img]);

  return (
    <div className={styles.header}>
      <div className="container">
        {/* Logo */}
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={whiteLogo} alt="Logo" />
          </Link>
        </div>

        {/* User Options */}
        <Row className={styles.userOptions}>
          <Col span={16} offset={8}>
            <ul>
              <li>
                <Link to={"/"}>
                  <GrNotification />
                  <span>Thông báo</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <TbHelpSquare />
                  <span>FAQ</span>
                </Link>
              </li>
              {isAuthenticated ? (
                <li className={styles.userInfo}>
                  <Link to={"/my-order"}>
                    <img
                      src={avatar}
                      alt="User Avatar"
                      className={styles.avatar}
                    />
                    <span>{userName}</span>
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/sign-in">
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up">
                      <span>Đăng ký</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </Col>
        </Row>

        {/* Search */}
        <Row className={styles.search}>
          <Col span={12} offset={6}>
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              suffix={
                <Button
                  className={styles.searchButton}
                  icon={<SearchOutlined className={styles.icon} />}
                />
              }
            />
          </Col>
          <Col className={styles.cart} span={6}>
            <ul>
              <li>
                <Link>
                  <FaRegHeart />
                  <span>Yêu thích</span>
                </Link>
              </li>
              <li>
                <Link to={"/my-cart"}>
                  <PiShoppingCartBold />
                  <span>Giỏ hàng</span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Navigation */}
        <Row>
          <Col className={styles.nav} span={16} offset={4}>
            <ul>
              <li>
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className={styles.forDog}>
                <Link>
                  Sản phẩm cho chó
                  <FaChevronDown className={styles.icon} />
                </Link>
                <MoreComponent className={styles.moreDog} />
              </li>
              <li className={styles.forCat}>
                <Link>
                  Sản phẩm cho mèo
                  <FaChevronDown className={styles.icon} />
                </Link>
                <MoreComponent className={styles.moreCat} />
              </li>
              <li>
                <Link to={"/about"}>Về chúng tôi</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderComponent;