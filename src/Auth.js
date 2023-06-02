import * as React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const REST_API_KEY = '50e0a36d16e7640df3908f7f6406099c';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const CLIENT_SECRET = 'HUElKQSXVLvRyjh5TioFFzYMemG2i37q';
  const code = new URL(window.location.href).searchParams.get('code'); // calllback으로 받은 인가코드
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      const res = await axios.post('https://kauth.kakao.com/oauth/token', payload); // access token 가져오기
      window.Kakao.init(REST_API_KEY); // Kakao Javascript SDK 초기화
      window.Kakao.Auth.setAccessToken(res.data.access_token); // access token 설정
      const kakao = await window.Kakao.API.request({
        url: '/v2/user/me', // Kakao SDK API를 이용해 사용자 정보 획득
      });
      const kakao_email = kakao.kakao_account.email;
      const user = await axios.get(`http://localhost:8000/users/ube/${kakao_email}?social=kakao`);
      console.log(user.data.name);
      navigate(
        `/${user.data.uid}`,
        { replace: true },
        {
          state: {
            name: user.data.name,
            uid: user.data.uid,
            info: user.data.info,
            email: user.data.email,
            notes: user.data.notes,
            social: user.data.social,
            schedules: user.data.schedules,
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return null;
}
