import * as React from 'react';

export default function KakaoLogin() {
  React.useEffect(() => {
    window.open('http://localhost:8000/kakao');
  }, []);
  return <div class="res"></div>;
}
