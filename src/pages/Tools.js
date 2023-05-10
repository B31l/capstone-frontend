import React, { useState } from 'react';
import Profile from '../components/toolsComponents/Profile';
import Goal from '../components/toolsComponents/Goal';
import StudyGroup from '../components/toolsComponents/StudyGroup';
import StudyTime from '../components/toolsComponents/StudyTime';
import Todolist from '../components/toolsComponents/Todolist';
import Schedule from '../components/toolsComponents/Schedule';
import Cal from '../components/toolsComponents/calendar';

export default function Tools() {
  const [userGroups] = useState(['정처기 그룹', '컴활 그룹', '컴공학부 그룹']);
  const [userStudyTime] = useState(120);
  
  function MoveToEdit(e) {
    window.location.href = './edit';
    return <button onClick={MoveToEdit}></button>;
  }

  return (
    <div>
      <p></p>
      <Profile></Profile>
      <Goal></Goal>
      <div className="myLists">
        <StudyGroup groups={userGroups} a href></StudyGroup>
        {/* <Todolist></Todolist> */}
        <Cal></Cal>
      </div>
      <p></p>
      <Schedule></Schedule>
      <StudyTime studyTime={userStudyTime}></StudyTime>
      <button onClick={MoveToEdit}>수정</button>
    </div>
  );
}
