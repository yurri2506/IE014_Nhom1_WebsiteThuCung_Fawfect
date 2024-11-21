import React, { Fragment, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes/routes'
import axios from 'axios'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { useQuery } from '@tanstack/react-query'

function App() {
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const data = {
        phone: "0354982378",
        password: "12345678"
      }
      const res = await axios.post(`http://localhost:3001/api/user/signIn`, data);
      return res.data;
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };  

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  console.log(query);
  

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              }/>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App;

