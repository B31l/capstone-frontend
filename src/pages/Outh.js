import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Auth({ social }) {
  const [data, setData] = useState();
  let temp = '';
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/kakao')
  //     .then((res) => setData(JSON.stringify(res)))
  //     .catch((err) => console.error('에러:', err));
  // }, []);
  fetch('http://localhost:8000/').then((res) => setData(JSON.stringify(res)));
  return (
    <div class="res">
      <p>{data ? data : 'ㅂㅇ'}</p>
    </div>
  );
}
