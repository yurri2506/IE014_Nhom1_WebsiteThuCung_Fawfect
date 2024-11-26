import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { useDispatch } from "react-redux";
import { resetUser } from "./redux/slices/userSlice";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { getUserDetails, ensureValidToken } from "./services/User.service";
import Loading from './components/LoadingComponent/LoadingComponent'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        setIsLoading(true);
        const token = await ensureValidToken(dispatch, resetUser); // Lấy token hợp lệ
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode payload từ JWT
        if (decoded?.id) {
          const userDetails = await getUserDetails(decoded.id, token);
          console.log("User details:", userDetails);
        }
      } catch (error) {
        console.error("Error loading user details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);

  return (
    <div style={{overflow: "hidden"}}>
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