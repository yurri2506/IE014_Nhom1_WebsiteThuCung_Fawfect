// import React, { useEffect, useState } from 'react'
// import StatusComponent from '../StatusComponent/StatusComponent'
// import NextArrowComponent from '../NextArrowComponent/NextArrowComponent'
// import TitleComponent from '../TitleComponent/TitleComponent'
// import ButtonComponent from '../ButtonComponent/ButtonComponent'
// import FormComponent from '../FormComponent/FormComponent'
// import BackButtonComponent from '../BackButtonComponent/BackButtonComponent'
// import InputFormComponent from '../InputFormComponent/InputFormComponent'
// import styles from './SetPasswordComponent.module.scss'
// import { RiLockPasswordFill } from 'react-icons/ri'
// import { MdDriveFileRenameOutline } from "react-icons/md";

// const SetPasswordComponent = ({ name, password, confirmPassword, onNameChange, onPasswordChange, onConfirmPasswordChange, onClick, isRegister }) => {
//   const [isInMobile, setisInMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 739px)');
//     const handleViewportChange = () => setisInMobile(mediaQuery.matches);

//     handleViewportChange();
//     mediaQuery.addEventListener('change', handleViewportChange);

//     return () => {
//       mediaQuery.removeEventListener('change', handleViewportChange);
//     };
//   }, []);

//   const [isPasswordValid, setIsPasswordValid] = useState(false);

//   const validatePassword = (password) => {
//     const hasLowercase = /[a-z]/.test(password);
//     const hasUppercase = /[A-Z]/.test(password);
//     const isValidLength = password.length >= 8 && password.length <= 16;
//     const isValidChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(password);

//     return hasLowercase && hasUppercase && isValidLength && isValidChars;
//   };

//   useEffect(() => {
//     setIsPasswordValid(validatePassword(password) && password === confirmPassword);
//   }, [password, confirmPassword]);

//   return (
//     <div className={styles.main}>
//       <div className="grid wide">
//         <div className={styles.step}>
//           <StatusComponent
//             number="1"
//             title="Xác minh số điện thoại"
//             success
//             className={styles.stt}
//           />
//           <NextArrowComponent
//             className={styles.arrow1}
//           />
//           <StatusComponent 
//             number="2"
//             title="Tạo mật khẩu"
//             success
//             className={styles.stt}
//           />
//           <NextArrowComponent 
//             className={styles.arrow2}
//           />
//           <StatusComponent 
//             number="✔"
//             title="Hoàn thành"
//             unSuccess
//             className={styles.stt}
//           />
//         </div>
//         <div className={styles.forms}>
//             <FormComponent 
//                 width="650px"
//                 height={isRegister ? "650px" : "550px"}
//                 background="#fff"
//                 borderRadius="20px"
//                 border="1px solid #000"
//                 className={styles.form}
//             >
//             <div className={styles.choice}>
//               <div className={styles.backButton}>
//                 <BackButtonComponent />
//               </div>
//               <div className={styles.title}>
//                 <TitleComponent
//                   title="Thiết lập mật khẩu"
//                   textTransform="none"
//                   textAlign="center"
//                   fontSize={isInMobile ? "2rem" : "2.5rem"}
//                 />
//               </div>
//             </div>
//             <div className={styles.suggest}>
//               <span>
//                 Bước cuối! Thiết lập mật khẩu để hoàn tất việc đăng ký
//               </span>
//             </div>
//             {isRegister ? (
//               <InputFormComponent
//                 placeholder="Nhập họ và tên"
//                 margin="30px 0 0"
//                 icon={<MdDriveFileRenameOutline />}
//                 value={name} // Nhận giá trị từ props
//                 onChange={(e) => onNameChange(e.target.value)} // Gọi callback khi thay đổi
//                 positionProps={{
//                   mainSpan: { top: '45px', left: '165px' },
//                   otherSpan: { top: '45px', left: '460px' },
//                 }}
//                 width={isInMobile ? "70%" : "350px"}
//                 borderRadius={isInMobile ? "10px" : "30px"}
//                 className={styles.input}
//               />
//             ) : null}
//             <InputFormComponent
//               placeholder="Mật khẩu"
//               icon={<RiLockPasswordFill />}
//               margin="30px 0 0"
//               type="password"
//               value={password} // Nhận giá trị từ props
//               onChange={(e) => onPasswordChange(e.target.value)} // Gọi callback khi thay đổi
//               positionProps={{
//                 mainSpan: { top: '45px', left: '165px' },
//                 otherSpan: { top: '45px', left: '460px' },
//               }}
//               width={isInMobile ? "70%" : "350px"}
//               borderRadius={isInMobile ? "10px" : "30px"}
//               className={styles.input}
//             />
//             <InputFormComponent
//               placeholder="Xác nhận mật khẩu"
//               icon={<RiLockPasswordFill />}
//               margin="30px 0 0"
//               type="password"
//               value={confirmPassword} // Nhận giá trị từ props
//               onChange={(e) => onConfirmPasswordChange(e.target.value)} // Gọi callback khi thay đổi
//               positionProps={{
//                 mainSpan: { top: '45px', left: '165px' },
//                 otherSpan: { top: '45px', left: '460px' },
//               }}
//               width={isInMobile ? "70%" : "350px"}
//               borderRadius={isInMobile ? "10px" : "30px"}
//               className={styles.input}
//             />
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <div className={styles.notice}>
//                 <p>Ít nhất một ký tự viết thường.</p>
//                 <p>Ít nhất một ký tự viết hoa.</p>
//                 <p>Có 8 - 16 ký tự.</p>
//                 <p>
//                   Chỉ các chữ cái, số và ký tự phổ biến mới có thể sử dụng.
//                 </p>
//               </div>
//             </div>
//             <ButtonComponent
//               title="ĐĂNG KÝ"
//               primary
//               margin="15px 0 0"
//               onClick={onClick}
//               showIcon={false}
//               className={styles.btn}
//               disabled={!isPasswordValid}
//             />
//           </FormComponent>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetPasswordComponent


import React, { useEffect, useState } from 'react';
import StatusComponent from '../StatusComponent/StatusComponent';
import NextArrowComponent from '../NextArrowComponent/NextArrowComponent';
import TitleComponent from '../TitleComponent/TitleComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import FormComponent from '../FormComponent/FormComponent';
import BackButtonComponent from '../BackButtonComponent/BackButtonComponent';
import InputFormComponent from '../InputFormComponent/InputFormComponent';
import styles from './SetPasswordComponent.module.scss';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdDriveFileRenameOutline } from 'react-icons/md';

const SetPasswordComponent = ({ name, password, confirmPassword, onNameChange, onPasswordChange, onConfirmPasswordChange, onClick }) => {
  const [isInMobile, setIsInMobile] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 739px)');
    const handleViewportChange = () => setIsInMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  const validatePassword = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const isValidLength = password.length >= 8 && password.length <= 16;
    const isValidChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/.test(password);

    return hasLowercase && hasUppercase && isValidLength && isValidChars;
  };

  useEffect(() => {
    setIsPasswordValid(validatePassword(password) && password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <div className={styles.main}>
      <div className="grid wide">
        <div className={styles.step}>
          <StatusComponent number="1" title="Xác minh số điện thoại" success className={styles.stt} />
          <NextArrowComponent className={styles.arrow1} />
          <StatusComponent number="2" title="Tạo mật khẩu" success className={styles.stt} />
          <NextArrowComponent className={styles.arrow2} />
          <StatusComponent number="✔" title="Hoàn thành" unSuccess className={styles.stt} />
        </div>
        <div className={styles.forms}>
          <FormComponent
            width="650px"
            height="650px"
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
                  title="Thiết lập mật khẩu"
                  textTransform="none"
                  textAlign="center"
                  fontSize={isInMobile ? '2rem' : '2.5rem'}
                />
              </div>
            </div>
            <div className={styles.suggest}>
              <span>Bước cuối! Thiết lập mật khẩu để hoàn tất việc đăng ký</span>
            </div>
            <InputFormComponent
              placeholder="Nhập họ và tên"
              margin="30px 0 0"
              icon={<MdDriveFileRenameOutline />}
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              positionProps={{
                mainSpan: { top: '45px', left: '165px' },
                otherSpan: { top: '45px', left: '460px' },
              }}
              width={isInMobile ? '70%' : '350px'}
              borderRadius={isInMobile ? '10px' : '30px'}
              className={styles.input}
            />
            <InputFormComponent
              placeholder="Mật khẩu"
              icon={<RiLockPasswordFill />}
              margin="30px 0 0"
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              positionProps={{
                mainSpan: { top: '45px', left: '165px' },
                otherSpan: { top: '45px', left: '460px' },
              }}
              width={isInMobile ? '70%' : '350px'}
              borderRadius={isInMobile ? '10px' : '30px'}
              className={styles.input}
            />
            <InputFormComponent
              placeholder="Xác nhận mật khẩu"
              icon={<RiLockPasswordFill />}
              margin="30px 0 0"
              type="password"
              value={confirmPassword}
              onChange={(e) => onConfirmPasswordChange(e.target.value)}
              positionProps={{
                mainSpan: { top: '45px', left: '165px' },
                otherSpan: { top: '45px', left: '460px' },
              }}
              width={isInMobile ? '70%' : '350px'}
              borderRadius={isInMobile ? '10px' : '30px'}
              className={styles.input}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className={styles.notice}>
                <p>Ít nhất một ký tự viết thường.</p>
                <p>Ít nhất một ký tự viết hoa.</p>
                <p>Có 8 - 16 ký tự.</p>
                <p>Chỉ các chữ cái, số và ký tự phổ biến mới có thể sử dụng.</p>
              </div>
            </div>
            <ButtonComponent
              title="ĐĂNG KÝ"
              primary
              margin="15px 0 0"
              showIcon={false}
              className={styles.btn}
              disabled={!isPasswordValid}
              onClick={!isPasswordValid ? null : onClick}
            />
          </FormComponent>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordComponent;