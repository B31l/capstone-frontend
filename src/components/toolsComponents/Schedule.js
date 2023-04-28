import React from 'react';
import '../../main.css';

function Schedule() {
  return (
    <table>
      <thead>
        <tr>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>데이터베이스</td>
          <td>알고리즘</td>
          <td>정보처리기사</td>
          <td>정보처리기사</td>
          <td>데이터베이스</td>
        </tr>
        <tr>
          <td>알고리즘</td>
          <td>머신러닝</td>
          <td>데이터분석</td>
          <td>운영체제</td>
          <td>딥러닝</td>
        </tr>
        <tr>
          <td>복습</td>
          <td>복습</td>
          <td>복습</td>
          <td>복습</td>
          <td>복습</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Schedule;
