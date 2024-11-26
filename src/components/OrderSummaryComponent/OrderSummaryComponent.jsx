import React, { useState } from 'react'
import styles from './OrderSummaryComponent.module.scss'
import { RiCoupon3Line } from "react-icons/ri";
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import UnderLineComponent from '../UnderLineComponent/UnderLineComponent';

const OrderSummaryComponent = ({ totalAmount, discount, shippingFee, safe, onClick }) => {
    const [coupon, setCoupon] = useState('');

    const handleApplyCoupon = () => {
      // Logic để xử lý mã giảm giá (nếu có)
      console.log('Coupon applied:', coupon);
    };
  
    return (
      <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <input
          type="text"
          placeholder="Nhập mã giảm giá..."
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <span><RiCoupon3Line /></span>
        <button className={styles.btn} onClick={handleApplyCoupon}>Áp dụng</button>
        <UnderLineComponent 
          width= "100%"
          height= "2px"
          background= "rgba(0, 0, 0, 0.2)"
          margin= "30px 0 20px"
        />
        <p>Giảm giá: <p className={styles.normal}>  {discount.toLocaleString()} VNĐ</p></p>
        <p>Phí vận chuyển <p className={styles.normal}>{shippingFee.toLocaleString()} VNĐ</p></p>
        <p>Tiết kiệm <p className={styles.normal}>{safe.toLocaleString()} VNĐ</p></p>
        <p>Tổng thanh toán: <p className={styles.total}>{totalAmount.toLocaleString()} VNĐ</p></p>
        <div className={styles.wrapBtn}>
          <ButtonComponent 
            primary
            title="Mua hàng"
            width="80%"
            textAlign="center"
            onClick={onClick}
            className={styles.btnBuy}
          />
        </div>
      </div>
    );
}

export default OrderSummaryComponent