import React from 'react';
import '../main.css';
import NoteList from '../components/notesComponents/NoteList';
import WhsiwygTitle from '../components/notesComponents/WhsiwygTitle';
import WhsiwygBody from '../components/notesComponents/WhsiwygBody';
import WhsiwygMenu from '../components/notesComponents/WhsiwygMenu';

export default function Notes() {
  const last_updated = '2023-05-08 16:08:03';
  return (
    <div className="main ">
      <div className="note-wrapper">
        <NoteList />
        <div className="whsiwyg-wrapper">
          <WhsiwygTitle />
          <WhsiwygBody />
          <WhsiwygMenu last_updated={last_updated} />
        </div>
      </div>
    </div>
  );
}
