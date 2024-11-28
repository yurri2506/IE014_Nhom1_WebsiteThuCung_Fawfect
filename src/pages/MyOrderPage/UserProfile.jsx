import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  ShoppingOutlined,
  BellOutlined,
  PercentageOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Card, Col, Typography } from "antd";

const { Title, Text } = Typography;

const ProfileUser = ({ full_name, src_img, name }) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  // Đồng bộ selectedKey và openKeys với đường dẫn hiện tại
  useEffect(() => {
    const path = location.pathname;
    setSelectedKey(path);

    if (
      ["/account-info", "/edit-email", "/edit-phone", "/edit-password"].includes(
        path
      )
    ) {
      setOpenKeys(["personal-info"]);
    } else {
      setOpenKeys([]);
    }
  }, [location.pathname]);

  const handleClick = (e) => {
    const key = e.key;
    setSelectedKey(key);

    if (
      ["/account-info", "/edit-email", "/edit-phone", "/edit-password"].includes(
        key
      )
    ) {
      setOpenKeys(["personal-info"]);
    } else {
      setOpenKeys([]);
    }

    navigate(key);
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleSubMenuToggle = (key) => {
    setOpenKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [key]
    );
  };

  return (
    <Col span={6}>
      <Card style={{ textAlign: "center" }}>
        <Avatar size={160} src={src_img} />
        <Title level={4}>{full_name}</Title>
        <Text type="secondary">{name}</Text>
        <Menu
          mode="inline"
          style={{ borderRight: "none", marginTop: "20px" }}
          selectedKeys={[selectedKey]}
          openKeys={openKeys}
          onClick={handleClick}
        >
          <Menu.SubMenu
            key="personal-info"
            icon={
              <UserOutlined
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: selectedKey.startsWith("/personal-info")
                    ? "orange"
                    : "inherit",
                }}
              />
            }
            title="Thông tin cá nhân"
            onTitleClick={() => handleSubMenuToggle("personal-info")}
          >
            <Menu.Item
              key="/account-info"
              icon={<UserOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/account-info" ? "orange" : "inherit",
              }}
            >
              Hồ sơ
            </Menu.Item>
            <Menu.Item
              key="/edit-email"
              icon={<MailOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/edit-email" ? "orange" : "inherit",
              }}
            >
              Email
            </Menu.Item>
            <Menu.Item
              key="/edit-phone"
              icon={<PhoneOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/edit-phone" ? "orange" : "inherit",
              }}
            >
              Số điện thoại
            </Menu.Item>
            <Menu.Item
              key="/edit-password"
              icon={<LockOutlined />}
              style={{
                paddingLeft: "50px",
                color: selectedKey === "/edit-password" ? "orange" : "inherit",
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
