import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <div className="header-title">
        <img src={logo} alt="logo" />
        <Link to="/" className="header-button home">
          PROJECT
        </Link>
      </div>

      <div className="header-item go-sign">
        <Link to="/sign" className="header-button sign-in">
          로그인
        </Link>
      </div>
    </header>
  );
}
