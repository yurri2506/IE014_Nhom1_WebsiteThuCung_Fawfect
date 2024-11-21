import React from "react";
import "./styles.scss";
import { Row, Col, Typography, Image } from "antd"; // Added Image here

const { Title, Text } = Typography;

export const OrderCart = ({ order_status, src_img, product_title, product_description, number, price_old, price_new }) => {
  return (
    <>
      <Row className="order-status">
        <Col span={24} className="status-product">
          <Text style={{ color: "orange", fontSize: "20px" }}>{order_status}</Text>
        </Col>
      </Row>
      <Row className="product-order">
        <Col span={4}>
          <Image
            style = {{width: "120px",       
            height: "120px"}}
            src={src_img}
            alt="product"
          />
        </Col>
        <Col span={14}>
          <Title level={4}>{product_title}</Title>
          <Text className="title-description" type="primary">
            {product_description}
          </Text>
          <br />
          <Text>x{number}</Text>
        </Col>
        <Col span={3} style={{ textAlign: "right" }}>
          <Text delete style={{ color: "#aaa", fontSize: "16px" }}>
            {price_old}đ
          </Text>
        </Col>
        <Col span={3} style={{ textAlign: "right" }}>
          <Text style={{ color: "orange", fontSize: "16px" }}>{price_new}đ</Text>
        </Col>
      </Row>
    </>
  );
};

export default OrderCart;
