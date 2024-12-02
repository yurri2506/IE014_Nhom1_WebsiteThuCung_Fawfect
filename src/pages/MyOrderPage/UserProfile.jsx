import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MyOrderPage.scss";
import styles from './MyOrderPage.module.scss'
import {
  UserOutlined,
  ShoppingOutlined,
  BellOutlined,
  PercentageOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
  PushpinOutlined
} from "@ant-design/icons";
import { Avatar, Menu, Card, Col, Typography } from "antd";

const { Title, Text } = Typography;

const ProfileUser = ({ full_name, src_img, name, isInViewport, isInMobile  }) => {
  const [selectedKey, setSelectedKey] = useState("2");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const path = location.pathname;
    setSelectedKey(path);

    const submenuPaths = [
      "/account/profile",
      "/account/edit-email",
      "/account/edit-phone",
      "/account/edit-password",
      "/account/edit-address"
    ];
  
    if (submenuPaths.includes(path)) {
      setOpenKeys(["/account"]); 
    } else {
      setOpenKeys([]); 
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    const key = e.key;
    setSelectedKey(key);
    if (key === "/account/edit-email" || key === "/account/edit-phone") {
      navigate("/verification", { state: { nextPage: key } });
    } else {
      navigate(key);
    }
  };

  const handleLogout = () => {
    navigate("/logout");
    window.location.reload();
  };

  const handleSubMenuToggle = (key) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [key]
    );
  };

  return (
    
    <Col span={6}>
      <Card className={styles.profile}>
        <div className={styles.info}>
          <div>
            <Avatar className={styles.img} src={src_img} />
          </div>
          <div className={styles.name}>
            <Title>{full_name}</Title>
            <Text type="secondary">{name}</Text>
          </div>
        </div>
        <Menu
          mode="inline"
          style={{ borderRight: "none", marginTop: "20px" }}
          selectedKeys={[selectedKey]}
          openKeys={openKeys}
          onClick={handleClick}
        >
          <Menu.SubMenu
            key="/account"
            icon={
              <UserOutlined
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: selectedKey.startsWith("/account")
                    ? "orange"
                    : "inherit",
                }}
              />
            }
            title="Thông tin cá nhân"
            onTitleClick={() => handleSubMenuToggle("/account")}
          >
            <Menu.Item
              key="/account/profile"
              icon={<UserOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account/profile" ? "orange" : "inherit",
              }}
            >
              Hồ sơ
            </Menu.Item>
            <Menu.Item
              key="/account/edit-email"
              icon={<MailOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account/edit-email" ? "orange" : "inherit",
              }}
            >
              Email
            </Menu.Item>
            <Menu.Item
              key="/account/edit-phone"
              icon={<PhoneOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account/edit-phone" ? "orange" : "inherit",
              }}
            >
              Số điện thoại
            </Menu.Item>
            <Menu.Item
              key="/account/edit-address"
              icon={<PushpinOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account/edit-address" ? "orange" : "inherit",
              }}
            >
              Địa chỉ
            </Menu.Item>
            <Menu.Item
              key="/account/edit-password"
              icon={<LockOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account/edit-password" ? "orange" : "inherit",
              }}
            >
              Mật khẩu
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="/my-order"
            icon={<ShoppingOutlined />}
            style={{
              color: selectedKey === "/my-order" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Đơn hàng
          </Menu.Item>
          <Menu.Item
            key="/notifications"
            icon={<BellOutlined />}
            style={{
              color: selectedKey === "/notifications" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Thông báo
          </Menu.Item>
          <Menu.Item
            key="/voucher"
            icon={<PercentageOutlined />}
            style={{
              color: selectedKey === "/voucher" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Kho voucher
          </Menu.Item>
          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined />}
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
            onClick={handleLogout}
          >
            Đăng xuất
          </Menu.Item>
        </Menu>
      </Card>
    </Col>
  );
};

export default ProfileUser;