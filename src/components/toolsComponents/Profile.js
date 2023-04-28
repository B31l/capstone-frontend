import React from 'react';
function Profile({ name, profileImage }) {

  return (
    <div className="profile" >
        <img src={profileImage} alt={name} />  <strong>{name}</strong>
      
    </div>
  );
}

export default Profile;
