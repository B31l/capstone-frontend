import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { TfiYoutube } from 'react-icons/tfi';
import ReactDOM from 'react-dom';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import chart from '@toast-ui/editor-plugin-chart';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import createYoutubePopup from './createYoutubePopup.js';


export default function WhsiwygBody({ content = '' }) {

  const editorRef = useRef();

  const myCustomEl = document.createElement('span');
  myCustomEl.style = 'cursor: pointer;'

  const icon = <TfiYoutube size={32} />;
  ReactDOM.render(icon, myCustomEl);
  const youtubePopup = createYoutubePopup(editorRef);


  return (
    <div className="whsiwyg-body">
      <Editor
        placeholder={content || '노트의 내용을 입력하세요'}
        previewStyle="vertical"
        height="100%"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        language="ko"
        ref={editorRef}
        // plugins 주석처리시 ResizeObserver loop limit exceeded 오류 없어짐
        // 무시 가능
        plugins={[colorSyntax, chart ]}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
      // 유튜브 삽입을 위해 툴바 버튼 커스터마이징
          [{
              name: 'Youtube',
              tooltip: 'Youtube',
              el: myCustomEl,
              popup: {
                  body: youtubePopup,
                  style: { width: 'auto' },
                }
          }]
      ]}

      customHTMLRenderer={{
        htmlBlock: {
          iframe(node) {
            return [
              {
                type: "openTag",
                tagName: "iframe",
                outerNewLine: true,
                attributes: node.attrs,
              },
              { type: "html", content: node.childrenHTML },
              { type: "closeTag", tagName: "iframe", outerNewLine: false }
            ];
        }}
      }}
        
      />
    </div>
  );
}
