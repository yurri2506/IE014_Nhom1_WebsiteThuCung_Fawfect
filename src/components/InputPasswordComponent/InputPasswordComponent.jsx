import React, { useState, useEffect } from 'react';
import InputFormComponent from '../InputFormComponent/InputFormComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import styles from './Style.module.scss';
import { RiLockPasswordFill } from 'react-icons/ri';
import { forgetAndSetPassword } from '../../services/User.service';
import PopupComponent from "../../components/PopupComponent/PopupComponent";

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

  const handleSubmit = async() => {
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
      <div className={styles.forms}>
        <div className={styles.title}>
          <h2>Thiết lập mật khẩu mới</h2>
        </div>
        <InputFormComponent
          placeholder="Mật khẩu mới"
          icon={<RiLockPasswordFill />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          width={isInMobile ? '70%' : '350px'}
          borderRadius={isInMobile ? '10px' : '30px'}
          className={styles.input}
        />
        <InputFormComponent
          placeholder="Xác nhận mật khẩu mới"
          icon={<RiLockPasswordFill />}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleSubmit}
          className={styles.btn}
        />
        {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
      </div>
    </div>
  );
};

export default InputPasswordComponent;
