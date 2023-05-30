import * as React from 'react';
import '../main.css';
import SignInput from '../components/signComponents/SignInput';
import SocialButton from '../components/signComponents/SocialButton';

export default function Sign() {
  return (
    <div className="main">
      <h1>로그인</h1>
      <div className="sign">
        <div className="sign-section">
          <SocialButton social="google" />
          <SocialButton social="kakao" />
          <SocialButton social="naver" />
        </div>
      </div>
    </div>
  );
}
