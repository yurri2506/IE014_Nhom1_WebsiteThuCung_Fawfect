import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./SignInPage.module.scss";
import TitleComponent from "../../components/TitleComponent/TitleComponent";
import UnderLineComponent from "../../components/UnderLineComponent/UnderLineComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import FormComponent from "../../components/FormComponent/FormComponent";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import { MdPhonePaused } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import PopupComponent from "../../components/PopupComponent/PopupComponent";
import { loginUser, getUserDetails } from "../../services/User.service"; // Hàm gọi API đăng nhập
import Cookies from "js-cookie";
import facebook_2 from "../../assets/images/facebook_2.svg";
import google from "../../assets/images/google.svg";
import { updateUser } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useMutationHooks } from '../../hooks/useMutationHook'

const SignInPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const mutation = useMutationHooks((data) =>
    loginUser(data.identifier, data.password)
  );
  const { data, isLoading, isSuccess, isError, error } = mutation;

  // Theo dõi thay đổi Redux Store
  useEffect(() => {
    console.log("Redux Store updated:", user);
  }, [user]);

  // Xử lý khi đăng nhập thành công
  useEffect(() => {
    if (isSuccess) {
      console.log("Login success, data received:", data);

      // Lưu Access Token
      if (data?.ACCESS_TOKEN) {
        localStorage.setItem("accessToken", data.ACCESS_TOKEN);
      }

      // Lưu Refresh Token vào Cookie
      Cookies.set("refreshToken", data.REFRESH_TOKEN, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });

      // Lấy thông tin người dùng
      if (data?.ACCESS_TOKEN) {
        const decoded = jwtDecode(data.ACCESS_TOKEN);
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
    }

    if (isError) {
      setErrorMessage(error.message.message || "Đăng nhập thất bại.");
      setShowPopup(true);
    }
  }, [isSuccess, isError, data, error]);

  // Lấy thông tin người dùng từ API
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
      setShowPopup(true);
      return;
    }

    mutation.mutate({ identifier, password });
  };

  const closePopup = () => {
    setShowPopup(false);
    setErrorMessage("");
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
    <div className={styles.main}>
      {/* Hiển thị trạng thái đang tải */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%", 
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #fff",
              borderTop: "5px solid #007bff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      )}
  
      <div className="grid wide">
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
              className={styles.form}
            >
              <TitleComponent
                title="Đăng nhập"
                textTransform="none"
                textAlign="center"
                fontSize={isInMobile ? "3rem" : "4.5rem"}
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
                  width={isInMobile ? "70%" : "350px"}
                  borderRadius={isInMobile ? "10px" : "30px"}
                  className={styles.input}
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
                  width={isInMobile ? "70%" : "350px"}
                  borderRadius={isInMobile ? "10px" : "30px"}
                  className={styles.input}
                />
                <ButtonComponent
                  title={isLoading ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
                  primary
                  margin="0 0 15px"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={styles.btn}
                  showIcon={false}
                />
              </form>
              <span>
                <Link to={"/reset"}>Quên mật khẩu?</Link>
              </span>
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
                  className={styles.btnOp}
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
      {showPopup && (
        <PopupComponent message={errorMessage} onClose={closePopup} />
      )}
    </div>
  );  
};

export default SignInPage;