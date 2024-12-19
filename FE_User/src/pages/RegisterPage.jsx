import React, { useState } from "react";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitPhone = () => {
    // Xử lý gửi mã xác minh, rồi chuyển bước
    handleNextStep();
  };

    const handleSubmitVerification = () => {
      // Xử lý xác nhận mã xác minh, rồi chuyển bước
      handleNextStep();
  };

  const handleSubmitPassword = () => {
    // Xử lý tạo mật khẩu, rồi chuyển bước
    handleNextStep();
  };

  return (
    <div>
      {currentStep === 1 && (
        <div>
          <h2>Đăng ký - Nhập số điện thoại</h2>
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSubmitPhone}>Tiếp tục</button>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2>Gửi mã xác minh</h2>
          <p>Mã xác minh đã gửi tới số điện thoại: {phoneNumber}</p>
          <input
            type="text"
            placeholder="Nhập mã xác minh"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={handleSubmitVerification}>Xác nhận</button>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2>Tạo mật khẩu</h2>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmitPassword}>Hoàn thành</button>
        </div>
      )}

      {currentStep === 4 && (
        <div>
          <h2>Đăng ký thành công!</h2>
          <p>Chào mừng bạn đến với ứng dụng của chúng tôi.</p>
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
