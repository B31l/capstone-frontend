import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../main.css';
import SignInput from '../components/SignInput';

export default function Sign() {
  const [form] = useState({
    id: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/hello').then((res) => setMessage(res.data.message));
  }, []);

  return (
    <div className="sign">
      <h1>로그인</h1>
      <SignInput placeholder="아이디를 입력해주세요" value={form.id} />
      <SignInput placeholder="패스워드를 입력해주세요" value={form.password} />
      카카오, 네이버, 구글 등으로 로그인
      <p>{message}</p>
    </div>
  );
}
