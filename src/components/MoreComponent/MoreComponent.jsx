import React from "react";
import clsx from "clsx";
import styles from "./MoreComponent.module.scss";
import { Link } from "react-router-dom";

const MoreComponent = ({ className, parent }) => {
  const products = [
    "Thức ăn",
    "Phụ kiện",
    "Đồ chơi",
    "Chăm sóc vệ sinh",
    "Trang phục",
  ];
  return (
    <div className={clsx(className, styles.more)}>
      <ul>
        {products.map((product) => {
          return (
            <li key={product}>
              <Link to={`/get-all-product?category_level_1=${parent}&category_level_2=${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoreComponent;
