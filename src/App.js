import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/headerComponents/Header';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Notes from './pages/Notes';
import My from './pages/My';
import Groups from './pages/Groups';
import Edit from './pages/Edit';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';

import GoogleLogin from './pages/login/GoogleLogin';
import KakaoLogin from './pages/login/KakaoLogin';
import NaverLogin from './pages/login/NaverLogin';
import Profile from './pages/Profile';

import Auth from './Auth';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />

        <Route path="/sign/google" element={<GoogleLogin />} />
        <Route path="/sign/kakao" element={<KakaoLogin />} />
        <Route path="/sign/naver" element={<NaverLogin />} />

        <Route path="/notes" element={<Notes />} />
        <Route path="/my" element={<My />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/profile/:uid" element={<Profile />} />

        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
