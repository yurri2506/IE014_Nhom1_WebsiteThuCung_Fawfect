// import React, { useState, useRef, useEffect } from "react";
// import { Input, Button, Typography, Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeftOutlined } from "@ant-design/icons";
// import "./VerificationForm.css";
// import { verifyOtp } from "../../services/Email.service";
// import { editUser } from "../../services/User.service";
// import { useDispatch } from "react-redux";

// const { Text } = Typography;

// const VerificationForm = ({ email, onVerificationSuccess }) => {
//   const [code, setCode] = useState(Array(6).fill(""));
//   const [timer, setTimer] = useState(30);
//   const [canSubmit, setCanSubmit] = useState(false);
//   const { newEmail } = location.state || {};
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();

//   const inputsRef = useRef([]);
//   const navigate = useNavigate();

//   const handleInputChange = (value, index) => {
//     const newCode = [...code];
//     newCode[index] = value.slice(-1);
//     setCode(newCode);

//     if (newCode.every((item) => item.trim() !== "")) {
//       setCanSubmit(true);
//     } else {
//       setCanSubmit(false);
//     }

//     if (value && index < inputsRef.current.length - 1) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   const handleResendCode = () => {
//     setTimer(30);
//     setCode(Array(6).fill(""));
//     setCanSubmit(false);
//   };

//   useEffect(() => {
//     if (timer > 0) {
//       const countdown = setTimeout(() => setTimer(timer - 1), 1000);
//       return () => clearTimeout(countdown);
//     }
//   }, [timer]);

//   const handleSubmit = () => {
//     const isVerified = true; // Giả sử mã xác minh luôn hợp lệ
//     if (isVerified) {
//       navigate("/account/profile"); // Điều hướng đến trang Hồ sơ tài khoản
//     }
//   };

//   const handleVerifyOtp = async() => {
//     const otpCode = code.join(""); // Ghép tất cả các ký tự thành chuỗi OTP
//     if (otpCode.length !== 6) {
//       setError("Mã OTP không hợp lệ. Vui lòng kiểm tra lại.");
//     }
//     try {
//       const res = await verifyOtp(newEmail, otpCode)
//       console.log(res)
//       if (res?.status === 'OK') {
//         const userData = { user_email: newEmail };
//         handleUpdateUser(userData);
//       }else {
//         setError('Mã OTP không hợp lệ.');
//       }
//     } catch (error) {
//       setError(error.message || 'Có lỗi xảy ra.');
//     }
//   }

//   const handleUpdateUser = async(userData) =>{
//     try {
//       console.log('user',userData)
//       const res = await editUser(_id, access_token, userData);
//       console.log("Fetched update user", res);
//       dispatch(
//         updateUser({
//           ...res?.data
//         })
//       );

//     } catch (error) {
//       console.error("Error in handleUpdate:", error);
//     }
//   }

//   return (
//     <div className="verification-form-container">
//       <div className="verification-form-content">
//         <Button
//           icon={<ArrowLeftOutlined />}
//           onClick={() => navigate(-1)}
//           style={{
//             position: "relative",
//             color: '#e87428',
//             left: '-70px',
//             border: 'none',
//             right: '0px',
//           }}
//         ></Button>
//         <Text className="verification-form-title">Nhập mã xác nhận</Text>
//         <p className="verification-form-description">
//           Mã xác minh đã được gửi đến thiết bị của bạn <br />
//         </p>
//         <Row gutter={8} justify="center" className="verification-form-row">
//           {code.map((digit, index) => (
//             <Col key={index}>
//               <Input
//                 ref={(el) => (inputsRef.current[index] = el)}
//                 maxLength={1}
//                 className="verification-form-input"
//                 value={digit}
//                 onChange={(e) => handleInputChange(e.target.value, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//               />
//             </Col>
//           ))}
//         </Row>
//         <Text className="verification-form-timer">
//           Vui lòng chờ {timer} giây để gửi lại.
//         </Text>
//         <div className="verification-form-buttons">
//           <Button
//             type="primary"
//             disabled={!canSubmit}
//             onClick={handleSubmit}
//             className={`verification-form-submit ${canSubmit ? "active" : ""}`}
//           >
//             Kế tiếp
//           </Button>
//         </div>
//         {timer === 0 && (
//           <Button
//             type="link"
//             className="verification-form-resend"
//             onClick={handleResendCode}
//           >
//             Gửi lại mã
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerificationForm;


import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Typography, Row, Col } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./VerificationForm.css";
import { verifyOtp } from "../../services/Email.service";
import { editUser } from "../../services/User.service";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";

const { Text } = Typography;

const VerificationForm = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [canSubmit, setCanSubmit] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {_id} = useSelector(
    (state) => state.user
  );
  const access_token = localStorage.getItem("accessToken")
  const { newEmail } = location?.state || {};

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
    setError("");
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleSubmit = async () => {
    const otpCode = code.join("");
    console.log(otpCode)
    console.log(newEmail)
    if (otpCode.length !== 6) {
      setError("Mã OTP không hợp lệ. Vui lòng kiểm tra lại.");
      return;
    }

    try {
      const res = await verifyOtp(newEmail, otpCode);
      if (res?.status === "OK") {
        const userData = { user_email: newEmail };
        handleUpdateUser(userData);
        navigate("/account/profile");
      } else {
        setError("Mã OTP không hợp lệ."); 
      }
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra khi xác minh OTP.");
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const res = await editUser(_id, access_token, userData);
      dispatch(updateUser({ ...res?.data }));
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Có lỗi xảy ra khi cập nhật thông tin người dùng.");
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
            color: "#e87428",
            left: "-70px",
            border: "none",
            right: "0px",
          }}
        ></Button>
        <Text className="verification-form-title">Nhập mã xác nhận</Text>
        <p className="verification-form-description">
          Mã xác minh đã được gửi đến email {newEmail} <br />
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
        {error && (
        <Text
          className="verification-form-error"
          style={{ color: "red", marginTop: "10px", textAlign: "center" }}
        >
          {error}
        </Text>
      )}
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
