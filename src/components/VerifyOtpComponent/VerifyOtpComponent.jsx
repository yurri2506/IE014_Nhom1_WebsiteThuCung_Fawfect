import React, { useEffect, useState } from 'react';
import styles from './VerifyOtpComponent.module.scss';
import { verifyOtp } from '../../services/Email.service';

const VerifyOtpComponent = ({ onClick, email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));  // Mảng OTP với 6 ô
  const [error, setError] = useState('');  // Lỗi nếu có trong quá trình nhập OTP
  const [isLoading, setIsLoading] = useState(false); // Quản lý trạng thái tải khi gửi OTP

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

  return (
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
              onChange={(e) => handleChange(e.target, index)}  // Gọi handleChange khi giá trị thay đổi
              onKeyDown={(e) => handleKeyDown(e, index)}  // Xử lý khi nhấn phím
              onFocus={(e) => e.target.select()}  // Chọn nội dung khi focus vào ô
            />
          ))}
        </div>

        {/* Hiển thị lỗi nếu có */}
        {error && <p className={styles.error}>{error}</p>}

        {/* Nút xác nhận */}
        <button className={styles.verifyButton} onClick={() => handleVerify(otp.join(''))} disabled={isLoading}>
          {isLoading ? 'Đang xác minh...' : 'Xác nhận'}
        </button>
      </div>
    </div>
  );
};

export default VerifyOtpComponent;
