import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function WhsiwygBody({ content = '' }) {
  return (
    <div className="whsiwyg-body">
      <Editor
        placeholder={content || '노트의 내용을 입력하세요'}
        previewStyle="vertical"
        height="100%"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        language="ko"
      />
    </div>
  );
}
