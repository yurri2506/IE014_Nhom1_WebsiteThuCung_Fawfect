import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.scss";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import UnderLineComponent from "../../components/UnderLineComponent/UnderLineComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import FormComponent from "../../components/FormComponent/FormComponent";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import { MdPhonePaused } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import PopupComponent from "../../components/PopupComponent/PopupComponent";
import { loginUser } from "../../services/User.service"; // Hàm gọi API đăng nhập
import Cookies from "js-cookie";
import facebook_2 from "../../assets/images/facebook_2.svg";
import google from "../../assets/images/google.svg";

const SignInPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Hàm xử lý đăng nhập
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin đăng nhập.");
      setShowPopup(true);
      return;
    }

    try {
      // Gọi API đăng nhập
      const data = await loginUser(identifier, password);

      // Lưu accessToken vào localStorage
      localStorage.setItem("accessToken", data.ACCESS_TOKEN);

      // Lưu refreshToken vào cookie
      Cookies.set("refreshToken", data.REFRESH_TOKEN, {
        expires: 1, // Token có hiệu lực trong 1 ngày
        secure: true, // Chỉ gửi qua HTTPS
        sameSite: "Strict", // Ngăn chặn CSRF
      });

      console.log("Access Token (localStorage):", data.ACCESS_TOKEN);
      console.log("Refresh Token (Cookie):", Cookies.get("refreshToken"));

      // Điều hướng qua trang chủ
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Có lỗi xảy ra khi đăng nhập.");
      setShowPopup(true);
    }
  };

  // Đóng popup thông báo lỗi
  const closePopup = () => {
    setShowPopup(false);
    setErrorMessage("");
  };

  return (
    <div className={styles.main}>
      <div className="container">
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
              <UnderLineComponent width="150px" height="1px" background="#000" />
              <div className={styles.paragraph}>
                <p>
                  Tiếp tục Đăng Nhập nào!!! <br />
                  Trải nghiệm thời gian mua sắm hiện đại và <br />
                  tiện ích mà chúng tôi mang lại
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
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="Số điện thoại/Email"
                  icon={<MdPhonePaused />}
                  margin="0 0 20px"
                  positionProps={{
                    mainSpan: { top: "16px", left: "90px" },
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
                    otherSpan: { top: "16px", left: "385px" },
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
                <Link to={"/reset"}>Quên mật khẩu?</Link>
              </span>
              <div className={styles.other}>
                <UnderLineComponent width="190px" height="1px" background="#B7B6B5" />
                <span>HOẶC</span>
                <UnderLineComponent width="190px" height="1px" background="#B7B6B5" />
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
                  <p>
                    Bạn mới đến PAWFECT?&nbsp;
                    <Link to={"/sign-up"}>Đăng Ký</Link>
                  </p>
                </div>
              </div>
            </FormComponent>
          </div>
        </div>
      </div>

      {/* Popup Thông Báo */}
      {showPopup && <PopupComponent message={errorMessage} onClose={closePopup} />}
    </div>
  );
};

export default SignInPage;