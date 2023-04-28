import React from 'react';
import '../main.css';

export default function NavWing({ closed, onClick }) {
  console.log(closed);
  return (
    <button className="nav-wing" onClick={onClick} style={closed ? { left: '5rem' } : { left: '12rem' }}>
      {closed ? <div>열기</div> : <div>닫기</div>}
    </button>
  );
}
