import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
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
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth >= 740 && window.innerWidth <= 1023);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.header}>
        <div className="grid wide">
            <div className={clsx('row', styles.wrapper)}>
              <div className={clsx('col l-4 m-5')}>
                <TitleComponent 
                  title="Pawfect petcare center"
                  textAlign="left"
                  textTransform="uppercase"
                  fontSize="3rem"
                  color="#fff"
                  margin="20px 0"
                  className={styles.title}
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
              {
                isTabletView ? (
                  <div className='col l-3 m-3'>
                    <div className={styles.about}>
                      <TitleComponent 
                        title="Về PAWFECT"
                        textAlign="left"
                        textTransform="none"
                        fontSize="3rem"
                        color="#fff"
                        margin='20px 0 10px'
                        className={styles.title2}
                      />
                      <UnderLineComponent 
                        width="150px"
                        height="3px"
                        background="#fff"
                        borderRadisus="2px"
                      />
                      <div className={styles.more}>
                        <Link to={"/"}>
                          Giới thiệu về PAWFECT
                        </Link>
                        <Link to={"/general-terms"}>
                          Điều khoản chung
                        </Link>
                        <Link to={"/privacy-policy"}>
                          Chính sách bảo mật
                        </Link>
                        <Link to={"/"}>
                          Trung tâm trợ giúp
                        </Link>
                        <Link to={"/guarantee"}>
                          Chính sách bảo hành
                        </Link>
                        <Link to={"/return-policy"}>
                          Chính sách trả hàng và hoàn tiền
                        </Link>
                        <Link to={"/"}>
                          FAQ+
                        </Link>
                      </div>
                    </div>
                  </div>
                ) :
                (
                  <>
                  <div className='col l-2-5'>
                    <div className={styles.about}>
                      <TitleComponent 
                        title="Về PAWFECT"
                        textAlign="left"
                        textTransform="none"
                        fontSize="3rem"
                        color="#fff"
                        margin='20px 0 10px'
                      />
                      <UnderLineComponent 
                        width="150px"
                        height="3px"
                        background="#fff"
                        borderRadisus="2px"
                      />
                      <div className={styles.more}>
                        <Link to={"/"}>
                          Giới thiệu về PAWFECT
                        </Link>
                        <Link to={"/general-terms"}>
                          Điều khoản chung
                        </Link>
                        <Link to={"/privacy-policy"}>
                          Chính sách bảo mật
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col l-2-5'>
                    <div className={styles.support}>
                      <TitleComponent 
                        title="Hỗ trợ"
                        textAlign="left"
                        textTransform="none"
                        fontSize="3rem"
                        color="#fff"
                        margin='20px 0 10px'
                      />
                      <UnderLineComponent 
                        width="150px"
                        height="3px"
                        background="#fff"
                        borderRadisus="2px"
                      />
                      <div className={styles.more}>
                        <Link to={"/"}>
                          Trung tâm trợ giúp
                        </Link>
                        <Link to={"/guarantee"}>
                          Chính sách bảo hành
                        </Link>
                        <Link to={"/return-policy"}>
                          Chính sách trả hàng và hoàn tiền
                        </Link>
                        <Link to={"/"}>
                          FAQ+
                        </Link>
                      </div>
                    </div>
                  </div>
                  </>
                )
              }
              <div className={clsx('col l-3 m-4')}>
                <div className={styles.location}>
                  <TitleComponent 
                    title="Địa chỉ cửa hàng"
                    textAlign="left"
                    textTransform="none"
                    fontSize="3rem"
                    color="#fff"
                    margin='20px 0 10px'
                    className={styles.title2}
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
        </div>
        <div className={styles.copyRight}>
          <p>2024 - Bản quyền thuộc Công ty PAWFECT PETCARE CENTER</p>
        </div>
    </div>
  )
}

export default FooterComponent