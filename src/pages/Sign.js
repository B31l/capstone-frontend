import * as React from 'react';
import '../main.css';
import SocialButton from '../components/signComponents/SocialButton';

export default function Sign() {
  return (
    <>
      <h1>로그인</h1>
      <div className="sign">
        <div className="sign-section">
          <SocialButton social="google" />
          <SocialButton social="kakao" />
          <SocialButton social="naver" />
        </div>
      </div>
    </>
  );
}
