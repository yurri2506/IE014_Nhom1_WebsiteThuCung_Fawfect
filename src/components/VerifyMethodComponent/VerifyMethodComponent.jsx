import React, { useState } from 'react'
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
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.step}>
          <StatusComponent
            number="1"
            title="Xác minh số điện thoại"
            success
          />
          <NextArrowComponent
            position = "absolute"
            top = "30px"
            left = "330px"
          />
          <StatusComponent 
            number="2"
            title="Tạo mật khẩu"
            unSuccess
          />
          <NextArrowComponent 
            position = "absolute"
            top = "30px"
            left = "660px"
          />
          <StatusComponent 
            number="✔"
            title="Hoàn thành"
            unSuccess
          />
        </div>
        <div className={styles.form}>
          <FormComponent 
            width="650px"
            height="500px"
            background="rgba(255, 255, 255, 0.8)"
            borderRadius="20px"
            border="1px solid #000"
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
                  fontSize="2.5rem"
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
              />
              <ButtonComponent 
                title="Tin nhắn SMS"
                iconLarge
                icon={SMS}
                margin="30px 0 0"
                onClick={onClick}
              />
              <ButtonComponent 
                title="Cuộc gọi thoại"
                iconLarge
                icon={phone}
                margin="30px 0 0"
                onClick={onClick}
              />
            </div>
          </FormComponent>
        </div>
        </div>
      </div>
  )
}

export default VerifyAccountComponent