import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 내 노트 리스트를 보여주는 함수
export default function NoteList() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/note/').then((res) => setNote(res.data));
  }, []);
  return (
    <div className="note-list">
      <ul>
        {note.map((element) => (
          <div>{element.title}</div>
        ))}
      </ul>
    </div>
  );
}
