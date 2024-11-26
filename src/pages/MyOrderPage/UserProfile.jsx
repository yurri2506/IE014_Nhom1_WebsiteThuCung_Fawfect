import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import {
  UserOutlined,
  ShoppingOutlined,
  BellOutlined,
  PercentageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Card, Col, Typography } from "antd";

const { Title, Text } = Typography;

const ProfileUser = ({ full_name, src_img, name }) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };
  
  const handleLogout = (e) => {
    navigate("/logout");
  };

  return (
    <Col span={6}>
      <Card style={{ textAlign: "center" }}>
        <Avatar size={160} src={src_img} />
        <Title level={4}>{full_name}</Title>
        <Text type="secondary">{name}</Text>
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          style={{ borderRight: "none", marginTop: "20px" }}
          selectedKeys={[selectedKey]}
          onClick={handleClick}
        >
          <Menu.Item
            key="1"
            icon={<UserOutlined style={{ marginLeft: "25px" }} />}
            style={{
              color: selectedKey === "1" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Thông tin cá nhân
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<ShoppingOutlined style={{ marginLeft: "25px" }} />}
            style={{
              color: selectedKey === "2" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Đơn hàng
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<BellOutlined style={{ marginLeft: "25px" }} />}
            style={{
              color: selectedKey === "3" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Thông báo
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<PercentageOutlined style={{ marginLeft: "25px" }} />}
            style={{
              color: selectedKey === "4" ? "orange" : "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            Kho voucher
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<LogoutOutlined style={{ marginLeft: "25px" }} />}
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
