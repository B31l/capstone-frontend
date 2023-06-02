import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ProfileLeft from '../components/profileComponents/ProfileLeft';
import ProfileRight from '../components/profileComponents/ProfileRight';

export default function Profile() {
  let { name, uid, info } = useParams();
  console.log(name);
  // const [user, setUser] = React.useState();

  // const getUser = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8000/users/useruid/${uid}`);
  //     setUser(res.data);
  //     console.log(user.id);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // React.useEffect(() => {
  //   axios.get(`http://localhost:8000/users/useruid/${uid}`).then((res) => {
  //     setUser(res.data);
  //     console.log(res.data);
  //     console.log(user);
  //   });
  // }, []);
  return (
    <div style={{ display: 'flex' }}>
      <ProfileLeft name={name} uid={uid} info={info} />
      <ProfileRight />
    </div>
  );
}

// 쿼리스트링으로 axios 에러 해결하기
