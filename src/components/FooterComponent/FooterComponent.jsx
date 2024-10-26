import React from 'react'
import styles from './FooterComponent.module.scss'
import TitleComponent from '../TitleComponent/TitleComponent'
import UnderLineComponent from '../UnderLineComponent/UnderLineComponent'
import { MdOutlineMailOutline, MdPhonePaused } from "react-icons/md";
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import tiktok from '../../assets/images/tiktok.svg'
import zalo from '../../assets/images/zalo.svg'


const FooterComponent = () => {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className='grid_row'>
              <div className='grid_column_5'>
                <TitleComponent 
                  title="Pawfect petcare center"
                  textAlign="left"
                  textTransform="uppercase"
                  fontSize="4rem"
                  color="#fff"
                  margin="20px 0"
                />
                <div className={styles.info}>
                  <h3>Liên hệ</h3>
                  <p>CÔNG TY CỔ PHẦN DỊCH VỤ THÚ CƯNG PAWFECT</p>
                  <p>MST: 013437284</p>
                  <p>
                    313 Xô Viết Nghệ Tĩnh, Phường 24,
                    Quận Bình Thạnh, TP.HCM
                  </p>
                  <a href="tel:+843828688383">
                    <MdPhonePaused className={styles.icon}/>
                    Hotline: 0382.868.8383
                  </a>
                  <a href="mailto:contact@pawfect.vn">
                    <MdOutlineMailOutline className={styles.icon}/>
                    Email: contact@pawfect.vn
                  </a>
                </div>
                <div className={styles.contact}>
                  <Link to={"/"}>
                    <img src={facebook} alt="" />
                  </Link>
                  <Link to={"/"}>
                    <img src={instagram} alt="" />
                  </Link>
                  <Link to={"/"}>
                    <img src={tiktok} alt="" />
                  </Link>
                  <Link to={"/"}>
                    <img src={zalo} alt="" />
                  </Link>
                </div>
              </div>
              <div className='grid_column_3_5'>
                <div className={styles.support}>
                  <TitleComponent 
                    title="Hỗ trợ"
                    textAlign="left"
                    textTransform="none"
                    fontSize="3rem"
                    color="#fff"
                    margin='30px 0 10px'
                  />
                  <UnderLineComponent 
                    width="150px"
                    height="3px"
                    background="#fff"
                    borderRadisus="2px"
                  />
                  <div className={styles.more}>
                    <Link to={"/terms"}>
                      Điều khoản chung
                    </Link>
                    <Link to={"/"}>
                      Chính sách bảo mật
                    </Link>
                    <Link to={"/"}>
                      Trung tâm trợ giúp
                    </Link>
                    <Link to={"/"}>
                      Chính sách bảo hành
                    </Link>
                    <Link to={"/"}>
                      Chính sách trả hàng và hoàn tiền
                    </Link>
                  </div>
                </div>
              </div>
              <div className='grid_column_3_5'>
                <div className={styles.location}>
                  <TitleComponent 
                    title="Địa chỉ cửa hàng"
                    textAlign="left"
                    textTransform="none"
                    fontSize="3rem"
                    color="#fff"
                    margin='30px 0 10px'
                  />
                  <UnderLineComponent 
                    width="150px"
                    height="3px"
                    background="#fff"
                    borderRadisus="2px"
                  />
                  <div className={styles.more}>
                    <p>CS1: 313 Xô Viết Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP.HCM</p>
                    <p>CS2: 12 Lê Văn Việt, Phường Tăng Nhơn Phú, TP. Thủ  Đức, TP.HCM</p>
                    <p>CS3: 165 Võ Thị Sáu, Phường Võ Thị Sáu, Quận 3, TP.HCM </p>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.copyRight}>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
    </div>
  )
}

export default FooterComponent