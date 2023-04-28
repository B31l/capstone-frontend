import React from 'react';

function StudyGroup({ groups }) {
  return (
    <div class="studygroup">
      <h2>My Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            <a href={"/groups/"+index}>{group}</a></li>
        ))}
      </ul>
      
    </div>
  );
}

export default StudyGroup;