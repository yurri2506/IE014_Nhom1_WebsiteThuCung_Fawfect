import React, { Fragment, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes/routes'
import axios from 'axios'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { useQuery } from '@tanstack/react-query'
import { gapi } from 'gapi-script'
import LoginGoogle from './components/Login/LoginGoogle'


function App() {
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