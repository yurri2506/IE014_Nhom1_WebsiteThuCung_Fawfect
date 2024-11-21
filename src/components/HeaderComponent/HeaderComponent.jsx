import React, { useEffect, useState } from "react";
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
import { jwtDecode } from "jwt-decode";
import { getUserDetails } from "../../services/User.service";
import myAvatarFalse from "../../assets/images/avatar-false.jpg";

const HeaderComponent = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const reduxUser = useSelector((state) => state.user);

  // Gửi request lấy thông tin người dùng từ API
  const fetchUserData = async (userId) => {
    try {
      console.log("Fetching user data for userId:", userId);

      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("AccessToken is missing");
        setIsLoggedIn(false);
        return;
      }

      const userData = await getUserDetails(userId, accessToken);

      console.log("Fetched User Data:", userData);

      if (
        !userData.data ||
        !userData.data.user_name
      ) {
        throw new Error("Invalid user data");
      }
      if (userData.data.user_avt_img){
        setUser({
          name: userData.data.user_name,
          avatar: `data:image/jpeg;base64,${userData.data.user_avt_img}`,
        });
      } else {
        setUser({
          name: userData.data.user_name,
          avatar: `${myAvatarFalse}`,
        });
      }
      setIsLoggedIn(true); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  // Kiểm tra token và lấy thông tin người dùng
  useEffect(() => {
    if (!reduxUser.isAuthenticated) {
      // Người dùng đã đăng xuất
      setIsLoggedIn(false);
      setUser(null);
    } else {
      // Người dùng đã đăng nhập
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          console.log("Decoded Token:", decoded);
          if (decoded?.id) {
            fetchUserData(decoded.id);
          } else {
            console.error("Invalid token: No userId found");
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          setIsLoggedIn(false);
        }
      } else {
        console.log("No accessToken found");
        setIsLoggedIn(false);
      }
    }
  }, [reduxUser.isAuthenticated]);
  

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
              {isLoggedIn ? (
                <li className={styles.userInfo}>
                  <Link to={"/my-order"}>
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className={styles.avatar}
                    />
                    <span>{user.name}</span>
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
