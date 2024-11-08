import React, { useState } from 'react'
import StatusComponent from '../StatusComponent/StatusComponent'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import FormComponent from '../FormComponent/FormComponent'
import BackButtonComponent from '../BackButtonComponent/BackButtonComponent'
import InputFormComponent from '../InputFormComponent/InputFormComponent'
import styles from './SetPasswordComponent.module.scss'
import { RiLockPasswordFill } from 'react-icons/ri'

const SetPasswordComponent = ({onClick}) => {
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
            unSuccess
          />
        </div>
        <div className={styles.form}>
            <FormComponent 
                width="650px"
                height="550px"
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
                        title="Thiết lập mật khẩu"
                        textTransform="none"
                        textAlign="center"
                        fontSize="2.5rem"
                    />
                </div>
            </div>
            <div className={styles.suggest}>
                <span>
                    Bước cuối! Thiết lập mật khẩu 
                    để hoàn tất việc đăng ký
                </span>
            </div>
            <InputFormComponent 
                placeholder="Mật khẩu"
                icon={<RiLockPasswordFill />}
                margin="30px 0 0"
                type="password"
                positionProps={{
                    mainSpan: { top: "45px", left: "165px" },
                    otherSpan: {top: "45px", left:"460px"}
                }}
            />
            <InputFormComponent 
                placeholder="Xác nhận mật khẩu"
                icon={<RiLockPasswordFill />}
                margin="30px 0 0"
                type="password"
                positionProps={{
                    mainSpan: { top: "45px", left: "165px" },
                    otherSpan: {top: "45px", left:"460px"}
                }}
            />
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={styles.notice}>
                    <p>Ít nhất một ký tự viết thường.</p>
                    <p>Ít nhất một ký tự viết hoa.</p>
                    <p>Có 8 - 16 ký tự.</p>
                    <p>Chỉ các chữ cái, số và ký tự phổ biến mới có thể sử dụng.</p>
                </div>
            </div>
            <ButtonComponent 
                title="ĐĂNG KÝ"
                primary
                margin="15px 0 0"
                onClick={onClick}
            />
          </FormComponent>
        </div>
        </div>
      </div>
  )
}

export default SetPasswordComponent