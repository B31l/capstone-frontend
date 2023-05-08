import React, { useState } from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import notes from '../assets/images/notes.png';
import my from '../assets/images/my.png';
import tools from '../assets/images/tools.png';
import group from '../assets/images/group.png';

const nav_list = [
  {
    name: 'my',
    title: '마이',
    image: my,
  },
  {
    name: 'notes',
    title: '노트',
    image: notes,
  },
  {
    name: 'group',
    title: '그룹',
    image: group,
  },
  {
    name: 'tools',
    title: '도구',
    image: tools,
  },
];

export default function Nav() {
  const [visibility, setVisibility] = useState([false, false, false, false]);
  const onMouse = (index) => {
    let temp = [...visibility];
    temp.fill(false);
    if (index !== -1) {
      temp[index] = true;
    }
    setVisibility(temp);
  };

  return (
    <nav>
      {nav_list.map((element, index) => (
        <div className="nav-item">
          <Link
            to={'/' + element.name}
            class="nav-link"
            onMouseOver={() => onMouse(index)}
            onMouseOut={() => onMouse(-1)}>
            <img src={element.image} alt="my" />
            {visibility[index] && <span>{nav_list[index].title}</span>}
          </Link>
        </div>
      ))}
    </nav>
  );
}
