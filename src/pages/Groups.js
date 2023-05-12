import React from 'react';
import '../main.css';
import GroupCarousel from '../components/groupsComponents/GroupsCarousel';

export default function Groups() {
  return (
    <div className="main">
      <GroupCarousel />
      <p>스터디 그룹</p>
    </div>
  );
}
