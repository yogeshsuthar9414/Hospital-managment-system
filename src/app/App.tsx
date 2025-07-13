import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/authentication/form/Login';
import { ForgotPassword } from './pages/authentication/form/ForgotPassword';
import { OTPVerification } from './pages/authentication/form/OTPVerification';
import { NewPassword } from './pages/authentication/form/NewPassword';
import { CreateAccount } from './pages/authentication/form/CreateAccount';
import { Layout } from './layouts/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import { useDispatch } from 'react-redux';
import { handleScreenWidth } from './redux/layout';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const screenWidth = () => {
      dispatch(handleScreenWidth(window.innerWidth));
    };
    window.addEventListener("resize", screenWidth);
    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, [window.innerWidth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verify" element={<OTPVerification />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="create-account" element={<CreateAccount />} />

        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
