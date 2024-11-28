import React from "react";
import "./MyOrderPage.scss";
import styles from './MyOrderPage.module.scss'
import { Row, Col, Typography, Image } from "antd"; // Added Image here
import clsx from "clsx";

const { Title, Text } = Typography;

export const OrderCart = ({ src_img, product_title, product_description, number, price_old, price_new }) => {
  return (
    <div className={styles.orderCart}>
        <div className={styles.img}>
          <img src={src_img} alt="Product"/>
        </div>
        <div className={styles.title}>
          <h3>{product_title}</h3>
          <p>{product_description}</p>
          <span>x{number}</span>
        </div>
        <div className={styles.price}>
          <span>{price_old}đ</span>
          <span>{price_new}đ</span>
        </div>
    </div>
  );
};

export default OrderCart;
