import React from 'react';
import '../main.css';
import MarkdownViewer from '../components/MarkdownViewer';
import NoteList from '../components/notesComponents/NoteList';
import Whsiwhg from '../components/whsiwhg';

export default function Notes() {
  return (
    <div className="main">
      <div className="note-wrapper">
        <NoteList />
        {/* <MarkdownViewer /> */}
        <Whsiwhg/>
      </div>
    </div>
  );
}
