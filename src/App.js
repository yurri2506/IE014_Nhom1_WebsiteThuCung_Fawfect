import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { useDispatch } from "react-redux";
import { resetUser } from "./redux/slices/userSlice";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { getUserDetails, ensureValidToken } from "./services/User.service";
import Loading from './components/LoadingComponent/LoadingComponent' // Giả sử bạn có hàm này để đảm bảo token hợp lệ
 
function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken'); // Lấy refresh token từ localStorage
        if (!refreshToken) return; // Nếu không có refreshToken, không làm gì cả

        const token = await ensureValidToken(refreshToken); // Giả sử bạn có hàm này để lấy token hợp lệ
        const decoded = JSON.parse(atob(token.split(".")[1])); // Giải mã JWT để lấy payload

        if (decoded?.id) {
          const userDetails = await getUserDetails(decoded.id, token); // Lấy thông tin người dùng từ API
          dispatch(resetUser(userDetails)); // Lưu thông tin người dùng vào Redux
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    loadUserDetails();
  }, [dispatch]);

  return (
    <div>
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