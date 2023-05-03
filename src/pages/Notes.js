import React from 'react';
import '../main.css';
import MarkdownViewer from '../components/MarkdownViewer';
import NoteList from '../components/notesComponents/NoteList';

export default function Notes() {
  return (
    <div className="main">
      <div className="note-wrapper">
        <NoteList />
        <MarkdownViewer />
      </div>
    </div>
  );
}
