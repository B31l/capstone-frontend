import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Profile() {
  let { user } = useParams();
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
  console.log('uid', user);

  return (
    <div className="main">
      <p>{user}</p>
    </div>
  );
}
