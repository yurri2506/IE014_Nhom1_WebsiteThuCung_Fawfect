import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./routes/routes";
import { useDispatch } from "react-redux";
import { logout, resetUser, updateUser } from "./redux/slices/userSlice";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { getUserDetails, ensureValidToken } from "./services/User.service";
import Loading from "./components/LoadingComponent/LoadingComponent"; // Giả sử bạn có hàm này để đảm bảo token hợp lệ
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const loadUserDetails = async () => {
  //     try {
  //       const refreshToken = localStorage.getItem('refreshToken'); // Lấy refresh token từ localStorage
  //       if (!refreshToken) return; // Nếu không có refreshToken, không làm gì cả

  //       const token = await ensureValidToken(dispatch, resetUser); // Giả sử bạn có hàm này để lấy token hợp lệ
  //       const decoded = JSON.parse(atob(token.split(".")[1])); // Giải mã JWT để lấy payload

  //       if (decoded?.id) {
  //         const userDetails = await getUserDetails(decoded.id, token); // Lấy thông tin người dùng từ API
  //         dispatch(resetUser(userDetails)); // Lưu thông tin người dùng vào Redux
  //       }
  //     } catch (error) {
  //       console.error('Error loading user details:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   loadUserDetails();
  // }, [dispatch]);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        // Lấy refreshToken từ cookies
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) {
          dispatch(resetUser());
          return;
        }
  
        // Giải mã refreshToken để lấy thông tin expiration
        const decodedRefreshToken = JSON.parse(atob(refreshToken.split(".")[1]));
        const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây
  
        // Kiểm tra xem refreshToken có hết hạn không
        if (decodedRefreshToken.exp < currentTime) {
          dispatch(logout());
          // navigate('/sign-in')
          return;
        }

        const token = await ensureValidToken(dispatch, resetUser, refreshToken); // Kiểm tra và làm mới accessToken nếu cần
        if (token) { console.log(token); }
        // Sau khi có accessToken hợp lệ, lấy thông tin người dùng
        const decoded = JSON.parse(atob(refreshToken.split(".")[1]));
        if (decoded?.id) {
          const userDetails = await getUserDetails(decoded.id, token);
          dispatch(updateUser(userDetails));
        }
      } catch (error) {
        console.error("Error loading user details:", error);
      } finally {
        setIsLoading(false); // Đảm bảo kết thúc quá trình tải
      }
    };

    loadUserDetails();
  
    // Thiết lập lại kiểm tra mỗi 5 phút
    const interval = setInterval(() => {
      loadUserDetails();
    }, 30 * 60 * 1000 - 1); // Kiểm tra và làm mới mỗi 5 phút
  
    // Cleanup interval khi component unmount
    return () => clearInterval(interval);
  }, [dispatch, resetUser]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Loading isLoading={isLoading}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;

              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Loading>
    </div>
  );
}

export default App;
