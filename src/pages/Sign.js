import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../main.css';
import SignInput from '../components/signComponents/SignInput';
import SocialButton from '../components/signComponents/SocialButton';

export default function Sign() {
  const [form] = useState({
    id: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/').then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div className="main">
      <h1>로그인</h1>
      <div className="sign">
        <div className="sign-section">
          <div className="sign-input-wrapper">
            <SignInput placeholder="아이디를 입력해주세요" value={form.id} />
            <SignInput placeholder="패스워드를 입력해주세요" value={form.password} />
          </div>
          {/* <p>{message}</p> */}
          <SocialButton social="google" />
          <SocialButton social="kakao" />
          <SocialButton social="naver" />
        </div>
      </div>
    </div>
  );
}
