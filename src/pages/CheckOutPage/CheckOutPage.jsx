import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './CheckOutPage.module.scss'
import { FaLocationDot } from "react-icons/fa6";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import momo from '../../assets/images/momo.svg'
import visa from '../../assets/images/visa.svg'
import applePay from '../../assets/images/applePay.svg'


const CheckOutPage = () => {
    const location = useLocation();   
    const { cartItems = [], checkedItems = [], discount = 0, shippingFee = 0 } = location.state || {};
    const selectedItems = cartItems.filter(item => checkedItems.includes(item.id));
    const totalItemsPrice = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalAmount = Math.max(0, totalItemsPrice + shippingFee - discount);
    // const [address, setAddress] = useState()
  return (
    <div className={styles.main}>
      <div className="container">
        <h2>Thanh toán</h2>

        <div className={styles.address}>
          <div className={styles.title}>
            <FaLocationDot style={{color: "#E87428", fontSize: "1.5rem", marginBottom: "4px"}}/>
            <h3>Địa chỉ nhận hàng</h3>
          </div>
          <div className={styles.infoAddress}>
            <p>Phương Uyên</p>
            <p>(+84) 382868383</p>
            <div className={styles.info}>
              <p>324 Xô Viết Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh</p>
              <div className={styles.change}>
                <span>Mặc định</span>
                <Link to={"/"}>Thay đổi</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productCheckOut}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.price.toLocaleString('vi-VN')}₫</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toLocaleString('vi-VN')}₫</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.discount}>
          <div style={{display: "flex", alignItems: "center"}}>
            <h3>Mã giảm giá</h3>
            <Link to={"/"}>Chọn voucher khác</Link>
          </div>
          <ul>
            <li>
              BANMOIPAWFECT
              <span>-{discount.toLocaleString('vi-VN')}đ</span>
            </li>
            <li>
              FREESHIPBANMOI
              <span>-{discount.toLocaleString('vi-VN')}đ</span>
            </li>
          </ul>
        </div>

        <div className={styles.payment}>
          <h3>Phương thức thanh toán</h3>
          <div className={styles.method}>
            <ButtonComponent 
              title="Momo"
              iconSmall
              icon={momo}
              margin="30px 0 0"
              width="220px"
              height="80px"
            />
            <ButtonComponent 
              title="Thẻ tín dụng/ghi nợ"
              iconSmall
              icon={visa}
              margin="30px 0 0"
              width="220px"
              height="80px"
            />
            <ButtonComponent 
              title="ApplePay"
              iconSmall
              icon={applePay}
              margin="30px 0 0"
              width="220px"
              height="80px"
            />
            <ButtonComponent 
              title="Thanh toán khi nhận hàng"
              iconSmall
              margin="30px 0 0"
              width="220px"
              height="80px"
              showIcon={false}
            />
          </div>
        </div>

        <div className={styles.sumary}>
          <h3>Tổng kết</h3>
          <div className={styles.total}>
            <p className={styles.normal}>
              Tổng tiền hàng: 
              <span>{totalItemsPrice.toLocaleString('vi-VN')}₫</span>
            </p>
            <p className={styles.normal}>
              Tổng tiền phí vận chuyển: 
              <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
            </p>
            <p className={styles.normal}>
              Tổng cộng mã giảm giá: 
              <span>-{discount.toLocaleString('vi-VN')}₫</span>
            </p>
            <p className={styles.final}>
              Tổng thanh toán: 
              <span>{totalAmount.toLocaleString('vi-VN')}₫</span>
            </p>
          </div>
          <ButtonComponent 
            title="Đặt hàng"
            width="500px"
            primary
          />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage