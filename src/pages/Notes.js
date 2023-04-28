import React from 'react';
import '../main.css';
import MarkdownViewer from '../components/MarkdownViewer';

export default function Notes() {
  return (
    <div>
      <p>노트를 저장할 수 있습니다.</p>
      <MarkdownViewer />
    </div>
  );
}
