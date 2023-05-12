import * as React from 'react';

export default function GoogleLogin() {
  const url = 'http://localhost:8000/google';
  React.useEffect(() => {
    window.open(url);
  }, []);
  return <div class="res"></div>;
}
