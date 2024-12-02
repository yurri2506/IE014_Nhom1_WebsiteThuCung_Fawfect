import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Typography, Row, Col } from "antd";
import { useNavigate} from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./VerificationForm.css";

const { Text } = Typography;

const VerificationForm = ({ email, onVerificationSuccess }) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [canSubmit, setCanSubmit] = useState(false);

  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (newCode.every((item) => item.trim() !== "")) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleResendCode = () => {
    setTimer(30);
    setCode(Array(6).fill(""));
    setCanSubmit(false);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleSubmit = () => {
    const isVerified = true; // Giả sử mã xác minh luôn hợp lệ
    if (isVerified) {
      navigate("/account/profile"); // Điều hướng đến trang Hồ sơ tài khoản
    }
  };

  return (
    <div className="verification-form-container">
      <div className="verification-form-content">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{
            position: "relative",
            color: '#e87428',
            left: '-70px',
            border: 'none',
            right: '0px',
          }}
        ></Button>
        <Text className="verification-form-title">Nhập mã xác nhận</Text>
        <p className="verification-form-description">
          Mã xác minh đã được gửi đến thiết bị của bạn <br />
        </p>
        <Row gutter={8} justify="center" className="verification-form-row">
          {code.map((digit, index) => (
            <Col key={index}>
              <Input
                ref={(el) => (inputsRef.current[index] = el)}
                maxLength={1}
                className="verification-form-input"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </Col>
          ))}
        </Row>
        <Text className="verification-form-timer">
          Vui lòng chờ {timer} giây để gửi lại.
        </Text>
        <div className="verification-form-buttons">
          <Button
            type="primary"
            disabled={!canSubmit}
            onClick={handleSubmit}
            className={`verification-form-submit ${canSubmit ? "active" : ""}`}
          >
            Kế tiếp
          </Button>
        </div>
        {timer === 0 && (
          <Button
            type="link"
            className="verification-form-resend"
            onClick={handleResendCode}
          >
            Gửi lại mã
          </Button>
        )}
      </div>
    </div>
  );
};

export default VerificationForm;
