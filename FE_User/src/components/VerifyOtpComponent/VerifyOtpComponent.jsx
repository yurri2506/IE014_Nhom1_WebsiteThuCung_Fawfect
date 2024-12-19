import React, { useEffect, useState } from 'react';
import styles from './VerifyOtpComponent.module.scss';
import { verifyOtp } from '../../services/Email.service';
import StatusComponent from '../StatusComponent/StatusComponent'
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const VerifyOtpComponent = ({ onClick, email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));  // Mảng OTP với 6 ô
  const [error, setError] = useState('');  // Lỗi nếu có trong quá trình nhập OTP
  const [isLoading, setIsLoading] = useState(false); // Quản lý trạng thái tải khi gửi OTP
  const [timer, setTimer] = useState(30); // Thời gian đếm ngược gửi lại OTP
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Hàm xử lý thay đổi giá trị trong các ô OTP
  const handleChange = (element, index) => {
    const value = element.value;

    // Kiểm tra nếu giá trị nhập không phải là số
    if (!/^\d$/.test(value) && value !== '') {
      setError('Chỉ được nhập số từ 0-9');
      return;
    }

    // Xóa lỗi khi nhập đúng
    setError('');
    const newOtp = [...otp];
    newOtp[index] = value;  // Cập nhật giá trị OTP trong mảng
    setOtp(newOtp);

    // Chuyển focus sang ô tiếp theo nếu có giá trị
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }

    // Không tự động xác nhận nữa khi nhập đủ 6 chữ số
  };

  // Hàm xử lý khi nhấn phím Backspace để di chuyển focus
  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && event.target.previousSibling) {
      event.target.previousSibling.focus();  // Di chuyển focus khi Backspace
    }
  };

  // Hàm xác nhận OTP khi người dùng nhấn nút "Xác nhận"
  const handleVerify = async (otpCode) => {
    console.log(email);
    console.log(otpCode);
    if (otpCode.length !== 6) {
      setError('Mã OTP phải đủ 6 chữ số.');
      return;
    }
    setIsLoading(true); // Bắt đầu trạng thái tải khi xác thực OTP

    try {
      const response = await verifyOtp(email, otpCode);
      console.log(response);
      if (response?.status === 'OK') {
        onClick();  // Gọi hàm từ component cha khi xác thực thành công
      } else {
        setError('Mã OTP không hợp lệ.');
      }
    } catch (error) {
      setError(error.message || 'Có lỗi xảy ra.');
    } finally {
      setIsLoading(false);  // Kết thúc trạng thái tải
    }
  };

  // Tự động focus vào ô đầu tiên khi component được render
  useEffect(() => {
    document.getElementById('otp-input-0').focus();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false); 
    }
  }, [timer]);


  return (
    <div className={styles.main}>
      <div className="grid wide">
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
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Xác minh OTP</h2>
            <p className={styles.subtitle}>
              Nhập mã OTP được gửi đến email {email}.
            </p>

            <div className={styles.otpContainer}>
              {/* Tạo các ô nhập OTP */}
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  className={styles.otpInput}
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}  
                  onKeyDown={(e) => handleKeyDown(e, index)}  
                  onFocus={(e) => e.target.select()} 
                />
              ))}
            </div>

            <div style={{height: "20px", margin: "20px 0"}}>
              {error && <p className={styles.error}>{error}</p>
              }
              {isResendDisabled ? (
                <p className={styles.wait}>Vui lòng chờ {timer} giây để gửi lại</p>
              ) : (
                <div className={styles.reSend}>
                  <p>Bạn vẫn chưa nhận được mã?</p>
                  <p>Gửi lại mã</p>
                </div>
              )}
            </div>
            {/* <div className={styles.resendOtp}>
              {isResendDisabled ? (
                <p>Vui lòng chờ {timer} giây để gửi lại</p>
              ) : (
                <div>
                  <p>Bạn vẫn chưa nhận được mã?</p>
                  <p>Gửi lại</p>
                </div>
              )}
            </div> */}
            <ButtonComponent 
              title="XÁC NHẬN"
              showIcon={false}
              onClick={() => handleVerify(otp.join(''))} 
              disabled={error ? true : false}
              className={styles.verifyButton}
              margin="50px 0"
              primary
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpComponent;
