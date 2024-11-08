import React, { useState } from 'react'
import dogAndCat from '../../assets/images/dogAndCat.svg'
import styles from './SignInPage.module.scss'
import TitleComponent from '../../components/TitleComponent/TitleComponent'
import UnderLineComponent from '../../components/UnderLineComponent/UnderLineComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom'
import FormComponent from '../../components/FormComponent/FormComponent'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { MdPhonePaused } from 'react-icons/md'
import facebook_2 from '../../assets/images/facebook_2.svg'
import google from '../../assets/images/google.svg'
import { RiLockPasswordFill } from "react-icons/ri";


const SignInPage = () => {
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const negative = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Ngăn chặn reload trang

//     try {
//         // Gọi API đăng nhập với fetch
//         const response = await fetch('http://localhost:3001/api/user/signIn', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ phone, password }) // Gửi dữ liệu người dùng nhập vào
//         });

//         if (response.ok) {
//             const data = await response.json();
            
//             // Lưu accessToken và refreshToken vào localStorage
//             localStorage.setItem('accessToken', data.accessToken);
//             localStorage.setItem('refreshToken', data.refreshToken);

//             // Chuyển hướng người dùng đến trang dashboard hoặc thực hiện hành động khác
//             console.log('Đăng nhập thành công');
//             window.location.href = '/dashboard';
//         } else {
//             const errorData = await response.json();
//             console.error('Đăng nhập thất bại:', errorData.message);
//             alert('Đăng nhập thất bại: ' + errorData.message);
//         }
//     } catch (error) {
//         console.error('Lỗi khi gọi API đăng nhập:', error);
//         alert('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
//     }
// };




// const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    // State để lưu trữ các lỗi
    const [errorMessage, setErrorMessage] = useState({});

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:3001/api/user/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone, password })
        });

        if (response.ok) {
            console.log('Đăng nhập thành công');
            setErrorMessage({}); // Xóa sạch lỗi khi đăng nhập thành công
        } else {
            const errorData = await response.json();
            
                    if (errorData.status === 'ERROR') {
                    // Đặt lỗi vào state dựa vào field trả về
                    const errorMessages = {};
                    if (errorData.errors) {
                        // Nếu lỗi từ controller, cấu trúc lỗi là errors[field]: message
                        Object.keys(errorData.errors).forEach(field => {
                            errorMessages[field] = errorData.errors[field];
                        });
                    } else if (errorData.field) {
                        // Nếu lỗi từ userService, cấu trúc lỗi là { field: 'field_name', message: 'message' }
                        errorMessages[errorData.field] = errorData.message;
                    }
                    setErrorMessage(errorMessages);
                    console.log("errors", errorMessage)
                }
    }
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
    }
};


  //   const handleSubmit = async (event) => {
  //     event.preventDefault(); // Ngăn chặn reload trang
  
  //     try {
  //         // Gọi API đăng nhập với fetch
  //         const response = await fetch('http://localhost:3001/api/user/signIn', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({ phone, password }) // Gửi dữ liệu người dùng nhập vào
  //         });
  
  //         if (response.ok) {
  //             const data = await response.json();
              
  //             // Lưu accessToken và refreshToken vào localStorage
  //             localStorage.setItem('accessToken', data.accessToken);
  //             localStorage.setItem('refreshToken', data.refreshToken);
  
  //             // Chuyển hướng người dùng đến trang dashboard hoặc thực hiện hành động khác
  //             console.log('Đăng nhập thành công');
  //             window.location.href = '/sign-up';
  //         } else {
  //             const errorData = await response.json();
  //             if (errorData.status === 'ERROR') {
  //               setErrors(errorData.errors || {});
  //           }
  //         }
  //     } catch (error) {
  //         console.error('Lỗi khi gọi API đăng nhập:', error);
  //         alert('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
  //     }
  // };


  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.signIn}>
          <div className={styles.introduce}>
            <div className={styles.title}>
              <TitleComponent 
                title="Chào mừng bạn"
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
                Tiếp tục Đăng Nhập nào!!! <br />
                Trải nghiệm thời gian mua sắm hiện đại và <br />
                tiện ích mà chúng tôi mang lại <br />
              </p>
              </div>
            </div>
          </div>
          <div className={styles.formSignIn}>
            <FormComponent 
              width="500px"
              height="650px"
              background="#fff"
              borderRadius="20px"
              border="1px solid #000"
            >
              <TitleComponent
                title="Đăng nhập"
                textTransform="none"
                textAlign="center"
                fontSize="4.5rem"
                margin="50px 0 30px"
              />
              <form>
                <InputFormComponent
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại/Email"
                  icon={<MdPhonePaused />}
                  margin="0 0 20px"
                  positionProps={{
                    mainSpan: { top: "16px", left: "90px" }
                  }}
                />
                <InputFormComponent
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Mật khẩu"
                  icon={<RiLockPasswordFill />}
                  margin="0 0 30px"
                  positionProps={{
                    mainSpan: { top: "16px", left: "90px" },
                    otherSpan: {top: "16px", left: "385px"}
                  }}
                />
                <ButtonComponent 
                  title="ĐĂNG NHẬP"
                  primary
                  margin="0 0 15px"
                  onClick={handleSubmit}
                />
              </form>
              <span>
                <Link to={"/reset"}>
                  Quên mật khẩu?
                </Link>
              </span>
              <div className={styles.other}>
                <UnderLineComponent 
                  width="190px"
                  height="1px"
                  background="#B7B6B5"
                />
                <span>HOẶC</span>
                <UnderLineComponent 
                  width="190px"
                  height="1px"
                  background="#B7B6B5"
                />
              </div>
              <div className={styles.differentOption}>
                <ButtonComponent 
                  title="Facebook"
                  iconSmall
                  icon={facebook_2}
                  margin="30px 0 0"
                />
                <ButtonComponent 
                  title="Google"
                  iconSmall
                  icon={google}
                  margin="30px 0 0"
                />
              </div>
              <div className={styles.footer}>
                <div className={styles.doNotHaveAccount}>
                  <p>Bạn mới đến PAWFECT?&nbsp;
                    <Link to={"/sign-up"}>
                      Đăng Ký
                    </Link>
                  </p>
                </div>
              </div>
            </FormComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage