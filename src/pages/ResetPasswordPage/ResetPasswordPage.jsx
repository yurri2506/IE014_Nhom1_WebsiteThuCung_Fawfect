import React, { useState } from 'react'

import styles from './ResetPasswordPage.module.scss'
import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent'
import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent'
import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent'
import FormComponent from '../../components/FormComponent/FormComponent'
import BackButtonComponent from '../../components/BackButtonComponent/BackButtonComponent'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import { MdPhonePaused } from 'react-icons/md'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'

const ResetPasswordPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleResetPassword = () => {
        // Xử lý gửi mã xác minh, rồi chuyển bước
        handleNextStep();
    };

    const handleVerifyMethod = () => {
        //Xử lý chọn hình thức verify
        handleNextStep();
    }

    const handleSetPassword = () => {
        //Xử lý chọn hình thức verify
        handleNextStep();
    }

  return (
   <div>
    {currentStep === 1 && (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.support}>
                    <Link to={""}>
                        Bạn cần trợ giúp?
                    </Link>
                </div>
                <div className={styles.form}>
                <FormComponent
                    width="650px"
                    height="330px"
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
                                title="Đặt lại mật khẩu"
                                textTransform="none"
                                textAlign="center"
                                fontSize="4rem"
                            />
                        </div>
                    </div>
                    <InputFormComponent
                        type="tel"
                        placeholder="Số điện thoại"
                        icon={<MdPhonePaused />}
                        margin="20px 0 30px"
                        positionProps={{
                            mainSpan: { top: "36px", left: "165px" }
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <ButtonComponent 
                        title="TIẾP THEO"
                        primary
                        margin="15px 0 15px"
                        onClick={handleResetPassword}
                    />
                </FormComponent>
                </div>
            </div>
        </div>
    )}

    {currentStep === 2 && 
        <VerifyMethodComponent 
            onClick={handleVerifyMethod}
            phoneNumber={phoneNumber}
        />}

    {currentStep === 3 && 
        <SetPasswordComponent 
            onClick={handleSetPassword}
        />}                                                                            

    {currentStep === 4 && <SuccessNotifyComponent />}                                                                           
   </div>
  )
}

export default ResetPasswordPage