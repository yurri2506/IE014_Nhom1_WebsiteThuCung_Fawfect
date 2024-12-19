import React, { useEffect, useState } from 'react'

import styles from './SuccessNotifyComponent.module.scss'
import StatusComponent from '../StatusComponent/StatusComponent'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import FormComponent from '../FormComponent/FormComponent'
import orangeLogo from '../../assets/images/orangeLogo.svg'
import { useNavigate } from 'react-router-dom'

const SuccessNotifyComponent = ({title1, title2 = "Tạo mật khẩu", title3 = "Hoàn thành", notify}) => {

  const [isInMobile, setisInMobile] = useState(false);
  const [countdown, setCountdown] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); // Giảm giá trị đếm ngược mỗi giây
    }, 1000);

    // Khi đếm ngược về 0, chuyển sang trang đăng nhập
    if (countdown === 0) {
      clearInterval(timer); // Dừng interval
      navigate('/sign-in'); // Thay '/sign-in' bằng đường dẫn trang đăng nhập của bạn
    }

    return () => clearInterval(timer); // Xóa timer khi component unmount
  }, [countdown, navigate]);

  const isOTP = title1 === "Xác minh mã OTP"

  return (
    <div className={styles.main}>
      <div className="grid wide">
        <div className={styles.step} style={isOTP ? {marginLeft: "100px"} : null}>
          <StatusComponent
            number="1"
            title={title1}
            success
            className={styles.stt}
          />
          <NextArrowComponent
            position = "absolute"
            className={styles.arrow1}
            left={isOTP ? "280px" : "330px"}
          />
          <StatusComponent 
            number="2"
            title={title2}
            success
            className={styles.stt}
          />
          <NextArrowComponent 
            position = "absolute"
            className={styles.arrow2}
            left={isOTP ? "580px" : "660px"}
          />
          <StatusComponent 
            number="✔"
            title={title3}
            success
            className={styles.stt}
          />
        </div>
        <div className={styles.forms}>
            <FormComponent 
                width="650px"
                height="450px"
                background="#fff"
                borderRadius="20px"
                border="1px solid #000"
                className={styles.form}
            >
            <div className={styles.choice}>
                <div className={styles.title}>
                    <TitleComponent
                        title={notify}
                        textTransform="none"
                        textAlign="center"
                        fontSize={isInMobile ? "2rem" : "2.5rem"}
                    />
                </div>
            </div>
            <div className={styles.icon}>
              <StatusComponent
                number="✔"
                otherSuccess
                margin="0"
              />
            </div>
            {/* <div className={styles.img}>
              <img src={orangeLogo} alt="" />
            </div> */}
            <div className={styles.error}>
              <p>Bạn sẽ được chuyển sang trang đăng nhập sau <strong><span>{countdown}</span></strong> giây</p>
              <p onClick={() => navigate("/sign-in")}>Đăng nhập ngay</p>
            </div>
          </FormComponent>
        </div>
      </div>
    </div>
  )
}

export default SuccessNotifyComponent