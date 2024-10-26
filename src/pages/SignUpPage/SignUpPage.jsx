import React from 'react'
import orangeLogo from '../../assets/images/orangeLogo.svg'
import orangeLogo2 from '../../assets/images/orangeLogo2.svg'
import dogAndCat from '../../assets/images/dogAndCat.svg'
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

const RegisterPage = () => {
  return (
    <div className={styles.main}>
      <div className='container'>
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
                placeholder="Số điện thoại"
                icon={<MdPhonePaused />}
                margin="0 0 30px"
              />
              <ButtonComponent 
                title="TIẾP THEO"
                primary
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
  )
}

export default RegisterPage