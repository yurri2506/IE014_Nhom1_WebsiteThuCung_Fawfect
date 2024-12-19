import React, { useState, useEffect } from 'react';
import InputFormComponent from '../InputFormComponent/InputFormComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import styles from './InputPasswordComponent.module.scss';
import { RiLockPasswordFill } from 'react-icons/ri';
import { forgetAndSetPassword } from '../../services/User.service';
import PopupComponent from "../../components/PopupComponent/PopupComponent";
import { MdDriveFileRenameOutline } from 'react-icons/md';
import TitleComponent from '../TitleComponent/TitleComponent';
import BackButtonComponent from '../BackButtonComponent/BackButtonComponent';
import StatusComponent from '../StatusComponent/StatusComponent';
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent';
import FormComponent from '../FormComponent/FormComponent';

const InputPasswordComponent = ({ onClick, identifier }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isInMobile, setisInMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp!');
    } else if (password.length < 8 || password.length > 16) {
      setErrorMessage('Mật khẩu phải từ 8 đến 16 ký tự.');
    } else {
      setErrorMessage('');
      try {
        console.log(identifier)
        const response = await forgetAndSetPassword(identifier, password, confirmPassword);
        console.log(response);
        if (response?.status === 'SUCCESS') {
          onClick();  // Gọi hàm từ component cha khi xác thực thành công
        } else {
          setErrorMessage('Đặt lại mật khẩu không thành công.');
        }
      } catch (error) {
        setErrorMessage(error.message || 'Có lỗi xảy ra.');
        setShowPopup(true);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setErrorMessage("");
  };

  return (
    <div className={styles.main}>
      <div className='grid wide'>
        <div className={styles.step}>
          <StatusComponent
            number="1"
            title="Xác minh mã OTP"
            success
            className={styles.stt}
          />
          <NextArrowComponent
            className={styles.arrow1}
          />
          <StatusComponent
            number="2"
            title="Tạo mật khẩu"
            success
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
            <div className={styles.backButton}>
              <BackButtonComponent />
            </div>
            <div className={styles.title}>
              <TitleComponent
                title="Thiết lập mật khẩu mới"
                textTransform="none"
                textAlign="center"
                fontSize={isInMobile ? '2rem' : '2.5rem'}
              />
            </div>
          </div>
          <div className={styles.suggest}>
            <span>Bước cuối! Đặt lại mật khẩu mới để hoàn thành việc lấy lại mật khẩu</span>
          </div>
          <InputFormComponent
            placeholder="Mật khẩu mới"
            icon={<RiLockPasswordFill />}
            margin="30px 0 0"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            positionProps={{
              mainSpan: { top: '45px', left: '165px' },
              otherSpan: { top: '45px', left: '460px' },
            }}
            width={isInMobile ? '70%' : '350px'}
            borderRadius={isInMobile ? '10px' : '30px'}
            className={styles.input}
          />
          <InputFormComponent
            placeholder="Xác nhận mật khẩu mới"
            icon={<RiLockPasswordFill />}
            margin="30px 0 0"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

            positionProps={{
              mainSpan: { top: '45px', left: '165px' },
              otherSpan: { top: '45px', left: '460px' },
            }}
            width={isInMobile ? '70%' : '350px'}
            borderRadius={isInMobile ? '10px' : '30px'}
            className={styles.input}
          />
          {errorMessage && (
            <div className={styles.error}>
              <span>{errorMessage}</span>
            </div>
          )}
          <ButtonComponent
            title="XÁC NHẬN"
            primary
            margin="20px 0 0"
            onClick={handleSubmit}
            showIcon={false}
            className={styles.btn}
          />
          {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
        </FormComponent>
      </div>
    </div>
  );
};

export default InputPasswordComponent;