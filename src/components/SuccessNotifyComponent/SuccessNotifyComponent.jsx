import React from 'react'

import styles from './SuccessNotifyComponent.module.scss'
import StatusComponent from '../StatusComponent/StatusComponent'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import FormComponent from '../FormComponent/FormComponent'
import orangeLogo from '../../assets/images/orangeLogo.svg'

const SuccessNotifyComponent = () => {
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
            success
          />
          <NextArrowComponent 
            position = "absolute"
            top = "30px"
            left = "660px"
          />
          <StatusComponent 
            number="✔"
            title="Hoàn thành"
            success
          />
        </div>
        <div className={styles.form}>
            <FormComponent 
                width="650px"
                height="450px"
                background="rgba(255, 255, 255, 0.8)"
                borderRadius="20px"
                border="1px solid #000"
            >
            <div className={styles.choice}>
                <div className={styles.title}>
                    <TitleComponent
                        title="Đăng ký thành công"
                        textTransform="none"
                        textAlign="center"
                        fontSize="2.5rem"
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
            <div className={styles.img}>
              <img src={orangeLogo} alt="" />
            </div>
          </FormComponent>
        </div>
      </div>
    </div>
  )
}

export default SuccessNotifyComponent