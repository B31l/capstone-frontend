import React from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import notes from '../assets/images/notes.png';
import my from '../assets/images/my.png';
import tools from '../assets/images/tools.png';
import group from '../assets/images/group.png';

export default function Nav() {
  return (
    <nav>
      <div to="/note" className="nav-item">
        <img src={notes} alt="notes" />
        <Link to="/notes" class="nav-link">
          노트
        </Link>
      </div>
      <div className="nav-item">
        <img src={my} alt="my" />
        <Link to="/my" class="nav-link">
          마이
        </Link>
      </div>
      <div className="nav-item">
        <img src={group} alt="groups" />
        <Link to="/groups" class="nav-link">
          그룹
        </Link>
      </div>
      <div className="nav-item">
        <img src={tools} alt="tools" />
        <Link to="/tools" class="nav-link">
          도구
        </Link>
      </div>
    </nav>
  );
}
