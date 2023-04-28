import React from 'react';

export default function MoveTo(e) {
  window.location.href = './edit';
  return <button onClick={MoveTo}></button>;
}
