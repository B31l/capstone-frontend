import React from 'react';
import '../main.css';
import NoteList from '../components/notesComponents/NoteList';
import WhsiwygTitle from '../components/notesComponents/WhsiwygTitle';
import WhsiwygBody from '../components/notesComponents/WhsiwygBody';
import WhsiwygMenu from '../components/notesComponents/WhsiwygMenu';

export default function Notes() {
  return (
    <div className="main ">
      <div className="note-wrapper">
        <NoteList />
        <div className="whsiwyg-wrapper">
          <WhsiwygTitle />
          <WhsiwygBody />
          <WhsiwygMenu />
        </div>
      </div>
    </div>
  );
}
