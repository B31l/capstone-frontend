import React from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import notes from '../assets/images/notes.png';
import my from '../assets/images/my.png';
import group from '../assets/images/group.png';

export default function Nav() {
  return (
    <nav>
      <Link to="/note" className="nav-item">
        <img src={notes} alt="notes" />
        <div>노트</div>
      </Link>
      <div className="nav-item">
        <img src={my} alt="my" />
        <div>마이</div>
      </div>
      <div className="nav-item">
        <img src={group} alt="group" />
        <div>스터디</div>
      </div>
    </nav>
  );
}
