import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function WhsiwygMenu({ modified = false, last_updated = '2023-05-08' }) {
  return (
    <div className="whsiwyg-menu">
      <div className="whsiwyg-menu-status">{modified ? '모든 변경사항이 저장됨' : last_updated + '에 최종 수정됨'}</div>
      {/* <button>Save</button> */}
    </div>
  );
}
