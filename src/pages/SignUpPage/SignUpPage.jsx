// import React from 'react'
// import { useState } from 'react'
// import styles from './SignUpPage.module.scss'
// import TitleComponent from '../../components/TitleComponent/TitleComponent'
// import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
// import { Link } from 'react-router-dom'
// import FormComponent from '../../components/FormComponent/FormComponent'
// import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
// import { MdPhonePaused } from 'react-icons/md'
// import facebook_2 from '../../assets/images/facebook_2.svg'
// import google from '../../assets/images/google.svg'
// import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent'
// import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent'
// import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent'

// const RegisterPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handleSubmitPhone = () => {
//     // Xử lý gửi mã xác minh, rồi chuyển bước
//     handleNextStep();
//   };

//   const handleVerifyMethod = () => {
//     //Xử lý chọn hình thức verify
//     handleNextStep();
//   }

//   const handleSetPassword = () => {
//     //Xử lý chọn hình thức verify
//     handleNextStep();
//   }

//   return (
//     <div>
//       {currentStep === 1 && (
//       <div className={styles.main}>
//         <div className='container'>
//           <div className={styles.signUp}>
//             <div className={styles.introduce}>
//               <div className={styles.title}>
//                 <TitleComponent 
//                   title="Tạo tài khoản mới"
//                   textTransform="none"
//                   textAlign="left"
//                   fontSize="5rem"
//                   margin="0 0 20px"
//                   fontWeight="800"
//                 />
//                 <UnderLineComponent 
//                   width="150px"
//                   height="1px"
//                   background="#000"
//                 />
//                 <div className={styles.paragraph}>
//                   <p>
//                     Hãy Đăng Ký ngay!!! <br />
//                     Trải nghiệm thời gian mua sắm hiện đại và <br />
//                     tiện ích mà chúng tôi mang lại <br />
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.formRegister}>
//               <FormComponent 
//                 width="500px"
//                 height="650px"
//                 background="rgba(255, 255, 255, 0.8)"
//                 borderRadius="20px"
//                 border="1px solid #000"
//               >
//                 <TitleComponent
//                   title="Đăng ký"
//                   textTransform="none"
//                   textAlign="center"
//                   fontSize="4.5rem"
//                   margin="50px 0 30px"
//                 />
//                 <InputFormComponent 
//                   type="tel"
//                   placeholder="Số điện thoại"
//                   icon={<MdPhonePaused />}
//                   margin="0 0 30px"
//                   positionProps={{
//                     mainSpan: { top: "16px", left: "90px" }
//                   }}
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//                 <ButtonComponent 
//                   title="TIẾP THEO"
//                   primary
//                   onClick={handleSubmitPhone}
//                 />
//                 <div className={styles.other}>
//                   <UnderLineComponent 
//                     width="190px"
//                     height="1px"
//                     background="#B7B6B5"
//                   />
//                   <span>HOẶC</span>
//                   <UnderLineComponent 
//                     width="190px"
//                     height="1px"
//                     background="#B7B6B5"
//                   />
//                 </div>
//                 <div className={styles.differentOption}>
//                   <ButtonComponent 
//                     title="Facebook"
//                     iconSmall
//                     icon={facebook_2}
//                     margin="30px 0 0"
//                   />
//                   <ButtonComponent 
//                     title="Google"
//                     iconSmall
//                     icon={google}
//                     margin="30px 0 0"
//                   />
//                 </div>
//                 <div className={styles.footer}>
//                   <div className={styles.agreeTerms}>
//                     <p>
//                       Bằng việc đăng ký, bạn đã đồng ý với <span>Pawfect </span> về&nbsp;
//                       <a href='/'>Điều khoản dịch vụ</a> &&nbsp;
//                       <a href='/'>Chính sách bảo mật</a>
//                     </p>
//                   </div>
//                   <div className={styles.haveAccount}>
//                     <p>Bạn đã có tài khoản?&nbsp;
//                       <Link to={"/sign-in"}>
//                         Đăng Nhập
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </FormComponent>
//             </div>
//           </div>
//         </div>
//       </div>
//       )}

//       {currentStep === 2 && 
//         <VerifyMethodComponent 
//           onClick={handleVerifyMethod}
//         />
//       }

//       {currentStep === 3 && 
//         <SetPasswordComponent 
//           onClick={handleSetPassword}
//         />
//       }

//       {currentStep === 4 && <SuccessNotifyComponent />}
//     </div>
//   )
// }

// export default RegisterPage



//-------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import styles from './SignUpPage.module.scss';
// import TitleComponent from '../../components/TitleComponent/TitleComponent';
// import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import FormComponent from '../../components/FormComponent/FormComponent';
// import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
// import { MdPhonePaused } from 'react-icons/md';
// import facebook_2 from '../../assets/images/facebook_2.svg';
// import google from '../../assets/images/google.svg';
// import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent';
// import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent';
// import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent';
// import PopupComponent from "../../components/PopupComponent/PopupComponent";
// import { signUpPhone } from "../../services/User.service"; // Hàm gọi API đăng nhập


// const RegisterPage = () => {
//   const [currentStep, setCurrentStep] = useState(1); // Bước hiện tại
//   const [phoneNumber, setPhoneNumber] = useState(''); // Số điện thoại người dùng nhập
//   const [errorMessage, setErrorMessage] = useState(''); // Thông báo lỗi
//   const [name, setName] = useState(''); // State để lưu họ và tên
//   const [password, setPassword] = useState(''); // State để lưu mật khẩu
//   const [confirmPassword, setConfirmPassword] = useState(''); // State để xác nhận mật khẩu
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   const handleNameChange = (value) => setName(value);
//   const handlePasswordChange = (value) => setPassword(value);
//   const handleConfirmPasswordChange = (value) => setConfirmPassword(value);

//   const handleSubmitPassword = () => {
//     if (password === confirmPassword) {
//       console.log('Đăng ký thành công:', { name, password });
//       handleNextStep();
//     } else {
//       alert('Mật khẩu không khớp!');
//     }
//   };
//   // Kiểm tra số điện thoại hợp lệ
//   const isValidPhoneNumber = (phone) => {
//     const regex = /^(03|07|08|09)\d{8}$/; // Quy tắc số điện thoại Việt Nam
//     return regex.test(phone);
//   };

//   // Xử lý khi người dùng nhập số điện thoại
//   const handlePhoneChange = (e) => {
//     const value = e.target.value; // Giá trị hiện tại
//     setPhoneNumber(value);

//     // Cập nhật thông báo lỗi
//     if (value && !isValidPhoneNumber(value)) {
//       setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập lại!');
//     } else {
//       setErrorMessage(''); // Xóa lỗi nếu hợp lệ
//     }
//   };

//   const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handleSubmitPhone = () => {
//     if (isValidPhoneNumber(phoneNumber)) {
//       setErrorMessage(''); // Xóa thông báo lỗi nếu hợp lệ
//       handleNextStep();
//     }
//   };

//   const handleVerifyMethod = () => {
//     //Xử lý chọn hình thức verify
//     handleNextStep();
//   }

//   const handleSignUp = async(event) => {
//     event.preventDefault();

//     try {
//       const response = await signUpPhone(phoneNumber, name, password, confirmPassword)
//       if(response){
//         handleNextStep(); 
//       }
//     } catch (error) {
//       console.log(error)
//       setErrorMessage(error.message.message || "Có lỗi xảy ra khi đăng nhập.");
//       setShowPopup(true);
//     }
//   }

//    // Đóng popup thông báo lỗi
//    const closePopup = () => {
//     setShowPopup(false);
//     setErrorMessage("");
//   };

//   return (
//     <div>
//       {currentStep === 1 && (
//         <div className={styles.main}>
//           <div className="container">
//             <div className={styles.signUp}>
//               <div className={styles.introduce}>
//                 <div className={styles.title}>
//                   <TitleComponent
//                     title="Tạo tài khoản mới"
//                     textTransform="none"
//                     textAlign="left"
//                     fontSize="5rem"
//                     margin="0 0 20px"
//                     fontWeight="800"
//                   />
//                   <UnderLineComponent
//                     width="150px"
//                     height="1px"
//                     background="#000"
//                   />
//                   <div className={styles.paragraph}>
//                     <p>
//                       Hãy Đăng Ký ngay!!! <br />
//                       Trải nghiệm thời gian mua sắm hiện đại và <br />
//                       tiện ích mà chúng tôi mang lại <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.formRegister}>
//                 <FormComponent
//                   width="500px"
//                   height="650px"
//                   background="rgba(255, 255, 255, 0.8)"
//                   borderRadius="20px"
//                   border="1px solid #000"
//                 >
//                   <TitleComponent
//                     title="Đăng ký"
//                     textTransform="none"
//                     textAlign="center"
//                     fontSize="4.5rem"
//                     margin="50px 0 30px"
//                   />
//                   <InputFormComponent
//                     type="tel"
//                     placeholder="Số điện thoại"
//                     icon={<MdPhonePaused />}
//                     margin="0 0 10px"
//                     positionProps={{
//                       mainSpan: { top: '16px', left: '90px' },
//                     }}
//                     value={phoneNumber}
//                     onChange={handlePhoneChange} // Gọi hàm kiểm tra hợp lệ
//                   />
//                   {/* Hiển thị thông báo lỗi */}
//                   {errorMessage && (
//                     <p className={styles.errorMessage}>{errorMessage}</p>
//                   )}
//                   <ButtonComponent
//                     title="TIẾP THEO"
//                     primary
//                     onClick={handleSubmitPhone}
//                     disabled={!phoneNumber || !!errorMessage} // Không cho phép nhấn khi không hợp lệ
//                   />
//                   <div className={styles.other}>
//                     <UnderLineComponent
//                       width="190px"
//                       height="1px"
//                       background="#B7B6B5"
//                     />
//                     <span>HOẶC</span>
//                     <UnderLineComponent
//                       width="190px"
//                       height="1px"
//                       background="#B7B6B5"
//                     />
//                   </div>
//                   <div className={styles.differentOption}>
//                     <ButtonComponent
//                       title="Facebook"
//                       iconSmall
//                       icon={facebook_2}
//                       margin="30px 0 0"
//                     />
//                     <ButtonComponent
//                       title="Google"
//                       iconSmall
//                       icon={google}
//                       margin="30px 0 0"
//                     />
//                   </div>
//                   <div className={styles.footer}>
//                     <div className={styles.agreeTerms}>
//                       <p>
//                         Bằng việc đăng ký, bạn đã đồng ý với <span>Pawfect </span>{' '}
//                         về&nbsp;
//                         <a href="/">Điều khoản dịch vụ</a> &&nbsp;
//                         <a href="/">Chính sách bảo mật</a>
//                       </p>
//                     </div>
//                     <div className={styles.haveAccount}>
//                       <p>
//                         Bạn đã có tài khoản?&nbsp;
//                         <Link to={'/sign-in'}>Đăng Nhập</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </FormComponent>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {currentStep === 2 && (
//         <VerifyMethodComponent onClick={handleVerifyMethod} />
//       )}

//       {currentStep === 3 && (
//         <SetPasswordComponent
//         name={name}
//         password={password}
//         confirmPassword={confirmPassword}
//         onNameChange={handleNameChange}
//         onPasswordChange={handlePasswordChange}
//         onConfirmPasswordChange={handleConfirmPasswordChange}
//         onClick={handleSignUp}
//        />
//       )}

//       {currentStep === 4 && <SuccessNotifyComponent />}
//       {/* Popup Thông Báo */}
//       {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
//     </div>
//   );
// };

// export default RegisterPage;

//-------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import styles from './SignUpPage.module.scss';
// import TitleComponent from '../../components/TitleComponent/TitleComponent';
// import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import FormComponent from '../../components/FormComponent/FormComponent';
// import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
// import { MdPhonePaused } from 'react-icons/md';
// import facebook_2 from '../../assets/images/facebook_2.svg';
// import google from '../../assets/images/google.svg';
// import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent';
// import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent';
// import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent';
// import PopupComponent from "../../components/PopupComponent/PopupComponent";
// import { signUpPhone, signInGoogle } from "../../services/User.service"; // Thêm signInGoogle
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const RegisterPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleNextStep = () => setCurrentStep(currentStep + 1);

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     if (value && !/^(03|07|08|09)\d{8}$/.test(value)) {
//       setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập lại!');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await signUpPhone(phoneNumber, name, password, confirmPassword);
//       if (response) {
//         handleNextStep();
//       }
//     } catch (error) {
//       setErrorMessage(error.message || "Có lỗi xảy ra.");
//       setShowPopup(true);
//     }
//   };

//   const handleSignInGoogle = async (response) => {
//     try {
//       console.log(response)
//       let result = await signInGoogle(response.credential); // Gửi mã token từ Google
//       console.log(result)
//       if (result) {
//         navigate('/'); // Điều hướng sau khi đăng nhập thành công
//       }
//     } catch (error) {
//       setErrorMessage(error.message || "Đăng nhập Google thất bại.");
//       setShowPopup(true);
//     }
//   };

//   const handleGoogleFailure = () => {
//     alert("Đăng nhập Google thất bại. Vui lòng thử lại!");
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setErrorMessage("");
//   };

//   return (

//     <div>
//       {currentStep === 1 && (
//         <div className={styles.main}>
//           <div className="container">
//             <div className={styles.signUp}>
//               <div className={styles.introduce}>
//                 <div className={styles.title}>
//                   <TitleComponent
//                     title="Tạo tài khoản mới"
//                     textTransform="none"
//                     textAlign="left"
//                     fontSize="5rem"
//                     margin="0 0 20px"
//                     fontWeight="800"
//                   />
//                   <UnderLineComponent
//                     width="150px"
//                     height="1px"
//                     background="#000"
//                   />
//                   <p>
//                     Đăng ký ngay để trải nghiệm thời gian mua sắm hiện đại mà chúng tôi mang lại!
//                   </p>
//                 </div>
//               </div>
//               <div className={styles.formRegister}>
//                 <FormComponent
//                   width="500px"
//                   height="650px"
//                   background="rgba(255, 255, 255, 0.8)"
//                   borderRadius="20px"
//                   border="1px solid #000"
//                 >
//                   <TitleComponent
//                     title="Đăng ký"
//                     textTransform="none"
//                     textAlign="center"
//                     fontSize="4.5rem"
//                     margin="50px 0 30px"
//                   />
//                   <InputFormComponent
//                     type="tel"
//                     placeholder="Số điện thoại"
//                     icon={<MdPhonePaused />}
//                     value={phoneNumber}
//                     onChange={handlePhoneChange}
//                   />
//                   {errorMessage && (
//                     <p className={styles.errorMessage}>{errorMessage}</p>
//                   )}
//                   <ButtonComponent
//                     title="TIẾP THEO"
//                     primary
//                     onClick={handleNextStep}
//                     disabled={!phoneNumber || !!errorMessage}
//                   />
//                   <div className={styles.other}>
//                     <UnderLineComponent width="190px" height="1px" />
//                     <span>HOẶC</span>
//                     <UnderLineComponent width="190px" height="1px" />
//                   </div>
//                   <div className={styles.differentOption}>
//                     <ButtonComponent
//                       title="Facebook"
//                       iconSmall
//                       icon={facebook_2}
//                     />
//                     <GoogleLogin
//                       id="google-login-btn"
//                       buttonText="Google"
//                       onSuccess={handleSignInGoogle}
//                       onError={handleGoogleFailure}
//                       style={{ display: 'none' }} // Ẩn nút mặc định Google
//                     />

//                   </div>
//                   <div className={styles.footer}>
//                     <p>
//                       Bằng việc đăng ký, bạn đồng ý với
//                       <span> Điều khoản </span> và
//                       <span> Chính sách bảo mật.</span>
//                     </p>
//                     <p>
//                       Bạn đã có tài khoản? <Link to="/sign-in">Đăng Nhập</Link>
//                     </p>
//                   </div>
//                 </FormComponent>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {currentStep === 2 && <VerifyMethodComponent onClick={handleNextStep} />}
//       {currentStep === 3 && (
//         <SetPasswordComponent
//           name={name}
//           password={password}
//           confirmPassword={confirmPassword}
//           onNameChange={setName}
//           onPasswordChange={setPassword}
//           onConfirmPasswordChange={setConfirmPassword}
//           onClick={handleSignUp}
//         />
//       )}
//       {currentStep === 4 && <SuccessNotifyComponent />}
//       {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
//     </div>

//   );
// };

// export default RegisterPage;


// import necessary libraries and components
// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import styles from './SignUpPage.module.scss';
// import TitleComponent from '../../components/TitleComponent/TitleComponent';
// import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent';
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
// import FormComponent from '../../components/FormComponent/FormComponent';
// import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
// import { MdPhonePaused } from 'react-icons/md';
// import facebook_2 from '../../assets/images/facebook_2.svg';
// import google from '../../assets/images/google.svg';
// import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent';
// import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent';
// import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent';
// import PopupComponent from "../../components/PopupComponent/PopupComponent";
// import { signUpPhone } from "../../services/User.service";
// import { GoogleLogin } from 'react-google-login';

// const RegisterPage = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleNameChange = (value) => setName(value);
//   const handlePasswordChange = (value) => setPassword(value);
//   const handleConfirmPasswordChange = (value) => setConfirmPassword(value);

//   const handleSubmitPassword = () => {
//     if (password === confirmPassword) {
//       console.log('Đăng ký thành công:', { name, password });
//       handleNextStep();
//     } else {
//       alert('Mật khẩu không khớp!');
//     }
//   };

//   const isValidPhoneNumber = (phone) => {
//     const regex = /^(03|07|08|09)\d{8}$/;
//     return regex.test(phone);
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);

//     if (value && !isValidPhoneNumber(value)) {
//       setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập lại!');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handleSubmitPhone = () => {
//     if (isValidPhoneNumber(phoneNumber)) {
//       setErrorMessage('');
//       handleNextStep();
//     }
//   };

//   const handleVerifyMethod = () => {
//     handleNextStep();
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await signUpPhone(phoneNumber, name, password, confirmPassword);
//       if (response) {
//         handleNextStep();
//       }
//     } catch (error) {
//       console.log(error);
//       setErrorMessage(error.message.message || "Có lỗi xảy ra khi đăng nhập.");
//       setShowPopup(true);
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setErrorMessage("");
//   };

//   const handleGoogleSuccess = (response) => {
//     console.log('Đăng nhập Google thành công:', response);
//     // Bạn có thể gửi token lên server của bạn để xử lý đăng nhập Google
//     handleNextStep();
//   };

//   const handleGoogleFailure = (error) => {
//     console.error('Đăng nhập Google thất bại:', error);
//     setErrorMessage('Đăng nhập Google thất bại. Vui lòng thử lại.');
//     setShowPopup(true);
//   };

//   return (
//     <div>
//       {currentStep === 1 && (
//         <div className={styles.main}>
//           <div className="container">
//             <div className={styles.signUp}>
//               <div className={styles.introduce}>
//                 <div className={styles.title}>
//                   <TitleComponent
//                     title="Tạo tài khoản mới"
//                     textTransform="none"
//                     textAlign="left"
//                     fontSize="5rem"
//                     margin="0 0 20px"
//                     fontWeight="800"
//                   />
//                   <UnderLineComponent
//                     width="150px"
//                     height="1px"
//                     background="#000"
//                   />
//                   <div className={styles.paragraph}>
//                     <p>
//                       Hãy Đăng Ký ngay!!! <br />
//                       Trải nghiệm thời gian mua sắm hiện đại và <br />
//                       tiện ích mà chúng tôi mang lại <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.formRegister}>
//                 <FormComponent
//                   width="500px"
//                   height="650px"
//                   background="rgba(255, 255, 255, 0.8)"
//                   borderRadius="20px"
//                   border="1px solid #000"
//                 >
//                   <TitleComponent
//                     title="Đăng ký"
//                     textTransform="none"
//                     textAlign="center"
//                     fontSize="4.5rem"
//                     margin="50px 0 30px"
//                   />
//                   <InputFormComponent
//                     type="tel"
//                     placeholder="Số điện thoại"
//                     icon={<MdPhonePaused />}
//                     margin="0 0 10px"
//                     positionProps={{
//                       mainSpan: { top: '16px', left: '90px' },
//                     }}
//                     value={phoneNumber}
//                     onChange={handlePhoneChange}
//                   />
//                   {errorMessage && (
//                     <p className={styles.errorMessage}>{errorMessage}</p>
//                   )}
//                   <ButtonComponent
//                     title="TIẾP THEO"
//                     primary
//                     onClick={handleSubmitPhone}
//                     disabled={!phoneNumber || !!errorMessage}
//                   />
//                   <div className={styles.other}>
//                     <UnderLineComponent
//                       width="190px"
//                       height="1px"
//                       background="#B7B6B5"
//                     />
//                     <span>HOẶC</span>
//                     <UnderLineComponent
//                       width="190px"
//                       height="1px"
//                       background="#B7B6B5"
//                     />
//                   </div>
//                   <div className={styles.differentOption}>
//                     <ButtonComponent
//                       title="Facebook"
//                       iconSmall
//                       icon={facebook_2}
//                       margin="30px 0 0"
//                     />
//                     <div className={styles.googleLogin}>
//                       {/* Google Login */}
//                       <GoogleLogin
//                         clientId="900722406945-4dlftqiq3j65ehjafhpvhg80b77liihq.apps.googleusercontent.com"
//                         buttonText="Đăng nhập với Google"
//                         onSuccess={handleGoogleSuccess}
//                         onFailure={handleGoogleFailure}
//                         cookiePolicy={'single_host_origin'}
//                         isSignedIn={true}
//                         render={(renderProps) => (
//                           <ButtonComponent
//                             title="Đăng nhập với Google"
//                             iconSmall
//                             margin="30px 0 0"
//                             onClick={renderProps.onClick}
//                             disabled={renderProps.disabled}
//                           />
//                         )}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.footer}>
//                     <div className={styles.agreeTerms}>
//                       <p>
//                         Bằng việc đăng ký, bạn đã đồng ý với <span>Pawfect </span>{' '}
//                         về&nbsp;
//                         <a href="/">Điều khoản dịch vụ</a> &&nbsp;
//                         <a href="/">Chính sách bảo mật</a>
//                       </p>
//                     </div>
//                     <div className={styles.haveAccount}>
//                       <p>
//                         Bạn đã có tài khoản?&nbsp;
//                         <Link to={'/sign-in'}>Đăng Nhập</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </FormComponent>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {currentStep === 2 && (
//         <VerifyMethodComponent onClick={handleVerifyMethod} />
//       )}

//       {currentStep === 3 && (
//         <SetPasswordComponent
//           name={name}
//           password={password}
//           confirmPassword={confirmPassword}
//           onNameChange={handleNameChange}
//           onPasswordChange={handlePasswordChange}
//           onConfirmPasswordChange={handleConfirmPasswordChange}
//           onClick={handleSignUp}
//         />
//       )}

//       {currentStep === 4 && <SuccessNotifyComponent />}
//       {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import styles from './SignUpPage.module.scss';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import FormComponent from '../../components/FormComponent/FormComponent';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import { MdPhonePaused } from 'react-icons/md';
import facebook_2 from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import { signUpPhone, signInGoogle, getUserDetails } from "../../services/User.service";
import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent';
import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent';
import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent';
import PopupComponent from "../../components/PopupComponent/PopupComponent";
import Cookies from "js-cookie";
import { updateUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { jwtDecode } from 'jwt-decode';

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const isDisabled = !phoneNumber || !!errorMessage;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (value && !/^(03|07|08|09)\d{8}$/.test(value)) {
      setErrorMessage('Số điện thoại không hợp lệ. Vui lòng nhập lại!');
    } else {
      setErrorMessage('');
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await signUpPhone(phoneNumber, name, password, confirmPassword);
      if (response) {
        handleNextStep();
      }
    } catch (error) {
      setErrorMessage(error.message.message || "Có lỗi xảy ra.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setErrorMessage("");
  };

  const handleGoogleLoginSuccess = async (access_token) => {
    console.log("Google token: ", access_token);
    try {
      const result = await signInGoogle(access_token);
      console.log(result)
      localStorage.setItem("accessToken", result.ACCESS_TOKEN);

      // Lưu refreshToken vào cookie
      Cookies.set("refreshToken", result.REFRESH_TOKEN, {
        expires: 1, // Token có hiệu lực trong 1 ngày
        secure: true, // Chỉ gửi qua HTTPS
        sameSite: "Strict", // Ngăn chặn CSRF
      });
      //dispatch(updateUser(result));
      
      console.log("Access Token (localStorage):", result.ACCESS_TOKEN);
      console.log("Refresh Token (Cookie):", Cookies.get("refreshToken"));
      // if (result) {
      //   navigate('/'); // Điều hướng sau khi đăng nhập thành công
      // }

      if (result?.ACCESS_TOKEN) {
        const decoded = jwtDecode(result.ACCESS_TOKEN);
        if (decoded?.id) {
          handleGetDetailsUser(decoded.id);
        } else {
          console.error("Decoded token does not have an id.");
        }
      } else {
        console.error("ACCESS_TOKEN is missing in the response data.");
      }

      // Điều hướng sau khi đăng nhập
      if (location?.state) {
        navigate(location.state);
      } else {
        navigate("/");
      }
    

    } catch (error) {
      setErrorMessage(error.message || "Đăng nhập Google thất bại.");
      setShowPopup(true);
    }
  };

  const handleGetDetailsUser = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await getUserDetails(id, accessToken);
      console.log("Fetched user details:", res.data);

      const refreshToken = Cookies.get("refreshToken");
      dispatch(
        updateUser({
          ...res?.data,
          access_token: accessToken,
          refreshToken: refreshToken,
        })
      );
    } catch (error) {
      console.error("Error in handleGetDetailsUser:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google login successful, token:', response.access_token); // In token ra để kiểm tra
      handleGoogleLoginSuccess(response.access_token);
    },
    onError: () => {
      setErrorMessage("Đăng nhập Google thất bại.");
      setShowPopup(true);
    },
  });

  const [isInMobile, setisInMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setisInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);
  
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
                className={styles.form}
              >
                <TitleComponent
                  title="Đăng ký"
                  textTransform="none"
                  textAlign="center"
                  fontSize={isInMobile ? "3rem" : "4.5rem"}
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
                  width={isInMobile ? "70%" : "350px"}
                  borderRadius={isInMobile ? "10px" : "30px"}
                  className={styles.input}
                  onChange={handlePhoneChange}
                  />
                {<p className={styles.error}>{errorMessage}</p>}
                <ButtonComponent 
                  title="TIẾP THEO"
                  primary
                  className={styles.btn}
                  showIcon={false}
                  disabled={isDisabled}
                  onClick={isDisabled ? null : handleNextStep}
                />
                <div className={styles.other}>
                  <UnderLineComponent 
                    width="190px"
                    height="1px"
                    background="#B7B6B5"
                    className={styles.under}
                  />
                  <span>HOẶC</span>
                  <UnderLineComponent 
                    width="190px"
                    height="1px"
                    background="#B7B6B5"
                    className={styles.under}
                  />
                </div>
                <div className={styles.differentOption}>
                  <ButtonComponent 
                    title="Facebook"
                    iconSmall
                    icon={facebook_2}
                    margin="30px 0 0"
                    className={styles.btnOp}
                  />
                  <ButtonComponent 
                    title="Google"
                    iconSmall
                    icon={google}
                    margin="30px 0 0"
                    onClick={googleLogin}
                    className={styles.btnOp}
                  />
                </div>
                <div className={styles.footer}>
                  <div className={styles.agreeTerms}>
                    <p>
                      Bằng việc đăng ký, bạn đã đồng ý với <span>Pawfect </span> về&nbsp;
                      <a href='/general-terms'>Điều khoản dịch vụ</a> &&nbsp;
                      <a href='/privacy-policy'>Chính sách bảo mật</a>
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

        {/* Các bước tiếp theo */}
        {currentStep === 2 && <VerifyMethodComponent onClick={handleNextStep}/>}
        {currentStep === 3 && (
          <SetPasswordComponent
            name={name}
            password={password}
            confirmPassword={confirmPassword}
            onNameChange={setName}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onClick={handleSignUp}
          />
        )}
        {currentStep === 4 && 
          <SuccessNotifyComponent 
            title1="Xác minh số điện thoại"
            notify="Đăng ký thành công"
          />
        }
        {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
      </div>
  );
};

export default RegisterPage;