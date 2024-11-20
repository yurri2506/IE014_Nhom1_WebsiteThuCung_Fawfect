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
import { jwtDecode } from "jwt-decode"; // Import thư viện jwt-decode
import { getUserDetails } from "../../services/User.service"; // Hàm gọi API đăng nhập

const HeaderComponent = () => {
  const [user, setUser] = useState(null); // Trạng thái lưu thông tin người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  // Gửi request lấy thông tin người dùng từ API
  const fetchUserData = async (userId) => {
    try {
      console.log("Fetching user data for userId:", userId);

      const accessToken = localStorage.getItem("accessToken"); // Lấy accessToken từ localStorage
      if (!accessToken) {
        console.error("AccessToken is missing");
        setIsLoggedIn(false);
        return;
      }

      // Sử dụng hàm `getUserDetails` để lấy thông tin người dùng 
      const userData = await getUserDetails(userId, accessToken); // Giả định hàm `getUserDetails` đã được định nghĩa

      console.log("Fetched User Data:", userData); // Log dữ liệu trả về

      if (!userData.data || !userData.data.user_name|| !userData.data.user_avt_img ) { 
        throw new Error("Invalid user data");
      }

      setUser({
        name: userData.data.user_name,
        avatar: `data:image/jpeg;base64,${userData.data.user_avt_img}`, // Cập nhật avatar
      });
      setIsLoggedIn(true); // Đánh dấu trạng thái đăng nhập
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
      setIsLoggedIn(false); // Đánh dấu trạng thái không đăng nhập nếu có lỗi
    }
  };

  // Kiểm tra token và lấy thông tin người dùng
  const checkToken = () => {
    const refreshToken = localStorage.getItem("refreshToken"); // Lấy refreshToken từ localStorage
    if (refreshToken) {
      try {
        const decoded = jwtDecode(refreshToken); // Giải mã token
        console.log("Decoded Token:", decoded); // Log để kiểm tra
        if (decoded?.payload?.id) {
          // Thay "id" bằng trường chính xác từ token
          fetchUserData(decoded.payload.id); // Gửi request lấy thông tin người dùng
        } else {
          console.error("Invaliddd token: No userId found");
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
      }
    } else {
      console.log("No refreshToken found");
      setIsLoggedIn(false);
    }
  };

  // useEffect để kiểm tra token khi component render
  useEffect(() => {
    checkToken();

    // Lắng nghe sự kiện token thay đổi
    const handleTokenChange = () => {
      console.log("Token changed");
      checkToken();
    };

    window.addEventListener("tokenChanged", handleTokenChange);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener("tokenChanged", handleTokenChange);
    };
  }, [isLoggedIn]);

  // Log trạng thái user khi thay đổi
  useEffect(() => {
    console.log("User State Updated:", user);
  }, [user]);

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
              {user ? (
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
