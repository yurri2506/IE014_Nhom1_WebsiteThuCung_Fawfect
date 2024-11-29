import React, { useEffect, useState } from 'react'
import StatusComponent from '../StatusComponent/StatusComponent'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
import styles from './VerifyMethodComponent.module.scss'

import TitleComponent from '../TitleComponent/TitleComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FormComponent from '../FormComponent/FormComponent'
import zaloVerify from '../../assets/images/zaloVerify.svg'
import SMS from '../../assets/images/SMS.svg'
import phone from '../../assets/images/phone.svg'
import BackButtonComponent from '../BackButtonComponent/BackButtonComponent'

const VerifyAccountComponent = ({onClick, phoneNumber}) => {
  const [isInMobile, setisInMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);
  
  return (
    <div className={styles.main}>
      <div className="grid wide">
        <div className={styles.step}>
          <StatusComponent
            number="1"
            title="Xác minh số điện thoại"
            success
            className={styles.stt}
          />
          <NextArrowComponent
            className={styles.arrow1}
          />
          <StatusComponent 
            number="2"
            title="Tạo mật khẩu"
            unSuccess
            className={styles.stt}
          />
          <NextArrowComponent 
            className={styles.arrow2}
          />
          <StatusComponent 
            number="✔"
            title="Hoàn thành"
            unSuccess
            className={styles.stt}
          />
        </div>
        <div className={styles.forms}>
          <FormComponent 
            width="650px"
            height="500px"
            background="#fff"
            borderRadius="20px"
            border="1px solid #000"
            className={styles.form}
          >
            <div className={styles.choice}>
              <div className={styles.backButton}>
                <BackButtonComponent />
              </div>
              <div className={styles.title}>
                <TitleComponent
                  title="Chọn phương thức xác minh"
                  textTransform="none"
                  textAlign="center"
                  fontSize={isInMobile ? "2rem" : "2.5rem"}
                />
              </div>
            </div>
            <div className={styles.suggest}>
              <span>
                Chọn một trong các phương thức bên dưới 
                để gửi mã xác minh đến {phoneNumber}
              </span>
            </div>
            <div className={styles.differentOption}>
              <ButtonComponent 
                title="Tin nhắn Zalo"
                iconLarge
                icon={zaloVerify}
                margin="30px 0 0"
                onClick={onClick}
                className={styles.btn}
              />
              <ButtonComponent 
                title="Tin nhắn SMS"
                iconLarge
                icon={SMS}
                margin="30px 0 0"
                onClick={onClick}
                className={styles.btn}
              />
              <ButtonComponent 
                title="Cuộc gọi thoại"
                iconLarge
                icon={phone}
                margin="30px 0 0"
                onClick={onClick}
                className={styles.btn}
              />
            </div>
          </FormComponent>
        </div>
        </div>
      </div>
  )
}

export default VerifyAccountComponent