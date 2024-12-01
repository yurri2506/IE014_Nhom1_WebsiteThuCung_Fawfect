// import React, { useEffect, useState } from 'react'
// import styles from './ResetPasswordPage.module.scss'
// import VerifyMethodComponent from '../../components/VerifyMethodComponent/VerifyMethodComponent'
// import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent'
// import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent'
// import FormComponent from '../../components/FormComponent/FormComponent'
// import BackButtonComponent from '../../components/BackButtonComponent/BackButtonComponent'
// import TitleComponent from '../../components/TitleComponent/TitleComponent'
// import { MdPhonePaused } from 'react-icons/md'
// import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
// import { Link } from 'react-router-dom'

// const ResetPasswordPage = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [phoneNumber, setPhoneNumber] = useState("");

//     const handleNextStep = () => {
//         setCurrentStep(currentStep + 1);
//     };

//     const handleResetPassword = () => {
//         // Xử lý gửi mã xác minh, rồi chuyển bước
//         handleNextStep();
//     };

//     const handleVerifyMethod = () => {
//         //Xử lý chọn hình thức verify
//         handleNextStep();
//     }

//     const handleSetPassword = () => {
//         //Xử lý chọn hình thức verify
//         handleNextStep();
//     }

//     const [isInMobile, setisInMobile] = useState(false);
//     useEffect(() => {
//         const mediaQuery = window.matchMedia('(max-width: 739px)');
//         const handleViewportChange = () => setisInMobile(mediaQuery.matches);

//         handleViewportChange();
//         mediaQuery.addEventListener('change', handleViewportChange);

//         return () => {
//         mediaQuery.removeEventListener('change', handleViewportChange);
//         };
//     }, []);

//   return (
//    <div>
//     {currentStep === 1 && (
//         <div className={styles.main}>
//             <div className="grid wide">
//                 <div className={styles.support}>
//                     <Link to={""}>
//                         Bạn cần trợ giúp?
//                     </Link>
//                 </div>
//                 <div className={styles.forms}>
//                     <FormComponent
//                         width="650px"
//                         height="330px"
//                         background="#fff"
//                         borderRadius="20px"
//                         border="1px solid #000"
//                         className={styles.form}
//                     >
//                     <div className={styles.choice}>
//                         <div className={styles.backButton}>
//                             <BackButtonComponent />
//                         </div>
//                         <div className={styles.title}>
//                             <TitleComponent
//                                 title="Đặt lại mật khẩu"
//                                 textTransform="none"
//                                 textAlign="center"
//                                 fontSize={isInMobile ? "2rem" : "2.5rem"}
//                             />
//                         </div>
//                     </div>
//                     <InputFormComponent
//                         type="tel"
//                         placeholder="Số điện thoại"
//                         icon={<MdPhonePaused />}
//                         margin="20px 0 30px"
//                         positionProps={{
//                             mainSpan: { top: "36px", left: "165px" }
//                         }}
//                         value={phoneNumber}
//                         onChange={(e) => setPhoneNumber(e.target.value)}
//                         width={isInMobile ? "70%" : "350px"}
//                         borderRadius={isInMobile ? "10px" : "30px"}
//                         className={styles.input}
//                     />
//                     <ButtonComponent 
//                         title="TIẾP THEO"
//                         primary
//                         margin="15px 0 15px"
//                         onClick={handleResetPassword}
//                         className={styles.btn}
//                     />
//                 </FormComponent>
//                 </div>
//             </div>
//         </div>
//     )}

//     {currentStep === 2 && 
//         <VerifyMethodComponent 
//             onClick={handleVerifyMethod}
//             phoneNumber={phoneNumber}
//         />}

//     {currentStep === 3 && 
//         <SetPasswordComponent 
//             onClick={handleSetPassword}
//         />}                                                                            

//     {currentStep === 4 && <SuccessNotifyComponent />}                                                                           
//    </div>
//   )
// }

// export default ResetPasswordPage



import React, { useEffect, useState } from 'react';
import styles from './ResetPasswordPage.module.scss';
import VerifyOtpComponent from '../../components/VerifyOtpComponent/VerifyOtpComponent';
import SetPasswordComponent from '../../components/SetPasswordComponent/SetPasswordComponent';
import SuccessNotifyComponent from '../../components/SuccessNotifyComponent/SuccessNotifyComponent';
import FormComponent from '../../components/FormComponent/FormComponent';
import BackButtonComponent from '../../components/BackButtonComponent/BackButtonComponent';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import { MdPhonePaused } from 'react-icons/md';
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';
import { sendOtp } from '../../services/Email.service';
import InputPasswordComponent from '../../components/InputPasswordComponent/InputPasswordComponent';

const ResetPasswordPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [identifier, setIdentifier] = useState('');
    const [error, setError] = useState('');

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const validateInput = (value) => {
        const phoneRegex = /^\d{10,15}$/; // Số điện thoại từ 10 đến 15 chữ số
        const emailRegex = /^\S+@\S+\.\S+$/; // Email theo định dạng tiêu chuẩn

        if (phoneRegex.test(value)) {
            return 'phone'; // Giá trị là số điện thoại hợp lệ
        } else if (emailRegex.test(value)) {
            return 'email'; // Giá trị là email hợp lệ
        } else if (/^\d+$/.test(value)) {
            return 'invalidPhone'; // Là số nhưng không đúng định dạng số điện thoại
        } else {
            return 'invalidEmail'; // Không phải email hợp lệ
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setIdentifier(value);

        const validationResult = validateInput(value);
        if (validationResult === 'invalidPhone') {
            setError('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
        } else if (validationResult === 'invalidEmail') {
            setError('Email không hợp lệ. Vui lòng nhập lại.');
        } else {
            setError(''); // Xóa lỗi nếu đầu vào hợp lệ
        }
    };

    const handlesendOtp = async (email) => {
        try {
          const response = await sendOtp(email);
          console.log(response)
        } catch (error) {
          setError(error.message || "Có lỗi xảy ra.");
          //setShowPopup(true);
        }
      };

    const handleVerifyOtp = () => {
        if (!error && identifier) {
            const validationResult = validateInput(identifier);

            if (validationResult === 'email') {

                handlesendOtp(identifier);
                handleNextStep(); // Chuyển đến currentStep 2 để xác thực OTP
            } else if (validationResult === 'phone') {
                setCurrentStep(3); // Bỏ qua bước xác thực OTP và chuyển thẳng đến currentStep 3
            }
        }
    };

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
                    <div className="grid wide">
                        <div className={styles.support}>
                            <Link to={''}>Bạn cần trợ giúp?</Link>
                        </div>
                        <div className={styles.forms}>
                            <FormComponent
                                width="650px"
                                height="330px"
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
                                            title="Đặt lại mật khẩu"
                                            textTransform="none"
                                            textAlign="center"
                                            fontSize={isInMobile ? '2rem' : '2.5rem'}
                                        />
                                    </div>
                                </div>
                                <InputFormComponent
                                    type="tel"
                                    placeholder="Email/Số điện thoại"
                                    icon={<MdPhonePaused />}
                                    margin="20px 0 30px"
                                    positionProps={{
                                        mainSpan: { top: '36px', left: '165px' },
                                    }}
                                    value={identifier}
                                    onChange={handleInputChange}
                                    width={isInMobile ? '70%' : '350px'}
                                    borderRadius={isInMobile ? '10px' : '30px'}
                                    className={styles.input}
                                />
                                {error && <p className={styles.error}>{error}</p>}
                                <ButtonComponent
                                    title="TIẾP THEO"
                                    primary
                                    margin="15px 0 15px"
                                    onClick={handleVerifyOtp}
                                    className={styles.btn}
                                    showIcon={false}
                                    disabled={
                                        !! error || 
                                        validateInput(identifier) === "invalidPhone" || 
                                        validateInput(identifier) === "invalidEmail"
                                    }
                                />
                            </FormComponent>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 2 && (
                <VerifyOtpComponent onClick={handleNextStep} email={identifier} />
            )}

            {currentStep === 3 && (<InputPasswordComponent onClick={handleNextStep} identifier={identifier}/>)}

            {currentStep === 4 && 
                <SuccessNotifyComponent 
                    title1="Xác minh mã OTP"
                    notify="Đặt lại mật khẩu thành công"
                />
            }
        </div>
    );
};

export default ResetPasswordPage;

