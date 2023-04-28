import React from 'react';
import '../main.css';
import MarkdownViewer from '../components/MarkdownViewer';

export default function Note() {
  return (
    <div>
      <p>이것은 노트입니다.</p>
      <MarkdownViewer />
    </div>
  );
}
