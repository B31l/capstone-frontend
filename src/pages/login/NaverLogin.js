import * as React from 'react';

export default function NaverLogin() {
  React.useEffect(() => {
    window.open('http://localhost:8000/naver');
  }, []);
  return <div class="res"></div>;
}
