import React from 'react'
import { useState } from 'react'
import styles from './SignUpPage.module.scss'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Link } from 'react-router-dom'
import FormComponent from '../../components/FormComponent/FormComponent'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { MdPhonePaused } from 'react-icons/md'
import facebook_2 from '../../assets/images/facebook_2.svg'
import google from '../../assets/images/google.svg'
import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent'
import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent'
import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent'
import LoginGoogle from '../../components/Login/LoginGoogle'

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitPhone = () => {
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
        <div className='grid wide'>
          <div className={styles.signUp}>
            <div className={styles.introduce}>
              <div className={styles.title}>
                <TitleComponent 
                  title="Tạo tài khoản mới"
                  textTransform="none"
                  textAlign="left"
                  fontSize="5rem"
                  margin="0 0 20px"
                  fontWeight="800"
                />
                <UnderLineComponent 
                  width="150px"
                  height="1px"
                  background="#000"
                />
                <div className={styles.paragraph}>
                  <p>
                    Hãy Đăng Ký ngay!!! <br />
                    Trải nghiệm thời gian mua sắm hiện đại và <br />
                    tiện ích mà chúng tôi mang lại <br />
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.formRegister}>
              <FormComponent 
                width="500px"
                height="650px"
                background="#fff"
                borderRadius="20px"
                border="1px solid #000"
              >
                <TitleComponent
                  title="Đăng ký"
                  textTransform="none"
                  textAlign="center"
                  fontSize="4.5rem"
                  margin="50px 0 30px"
                />
                <InputFormComponent 
                  type="tel"
                  placeholder="Số điện thoại"
                  icon={<MdPhonePaused />}
                  margin="0 0 30px"
                  positionProps={{
                    mainSpan: { top: "16px", left: "90px" }
                  }}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <ButtonComponent 
                  title="TIẾP THEO"
                  primary
                  onClick={handleSubmitPhone}
                />
                <div className={styles.other}>
                  <UnderLineComponent 
                    width="190px"
                    height="1px"
                    background="#B7B6B5"
                  />
                  <span>HOẶC</span>
                  <UnderLineComponent 
                    width="190px"
                    height="1px"
                    background="#B7B6B5"
                  />
                </div>
                <div className={styles.differentOption}>
                  <ButtonComponent 
                    title="Facebook"
                    iconSmall
                    icon={facebook_2}
                    margin="30px 0 0"
                  />
                  <ButtonComponent 
                    title="Google"
                    iconSmall
                    icon={google}
                    margin="30px 0 0"
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.agreeTerms}>
                    <p>
                      Bằng việc đăng ký, bạn đã đồng ý với <span>Pawfect </span> về&nbsp;
                      <a href='/'>Điều khoản dịch vụ</a> &&nbsp;
                      <a href='/'>Chính sách bảo mật</a>
                    </p>
                  </div>
                  <div className={styles.haveAccount}>
                    <p>Bạn đã có tài khoản?&nbsp;
                      <Link to={"/sign-in"}>
                        Đăng Nhập
                      </Link>
                    </p>
                  </div>
                </div>
              </FormComponent>
            </div>
          </div>
        </div>
      </div>
      )}

      {currentStep === 2 && 
        <VerifyMethodComponent 
          onClick={handleVerifyMethod}
        />
      }

      {currentStep === 3 && 
        <SetPasswordComponent 
          onClick={handleSetPassword}
        />
      }

      {currentStep === 4 && <SuccessNotifyComponent />}
    </div>
  )
}

export default RegisterPage