import React, { useState } from 'react';
import Profile from '../components/toolsComponents/Profile';
import defaultImage from '../assets/images/default_profile.png';
import Goal from '../components/toolsComponents/Goal';
import StudyGroup from '../components/toolsComponents/StudyGroup';
import StudyTime from '../components/toolsComponents/StudyTime';
import Todolist from '../components/toolsComponents/Todolist';
import MoveTo from '../components/toolsComponents/MoveTo';
import Schedule from '../components/toolsComponents/Schedule';

export default function Tools() {
  const [userName] = useState('user');
  const [imgUrl] = useState(defaultImage);
  const [userGoal] = useState('정처기 자격증 따기');
  const [userGroups] = useState(['정처기 그룹', '컴활 그룹', '컴공학부 그룹']);
  const [userStudyTime] = useState(120);
  const [userEdit] = useState('수정');

  return (
    <div>
      <p></p>
      <Profile name={userName} profileImage={imgUrl}></Profile>
      <Goal goal={userGoal}></Goal>
      <div className="myLists">
        <StudyGroup groups={userGroups} a href></StudyGroup>
        <Todolist></Todolist>
      </div>
      <p></p>
      <Schedule></Schedule>
      <StudyTime studyTime={userStudyTime}></StudyTime>
      <button onClick={MoveTo}>{userEdit}</button>
    </div>
  );
}
