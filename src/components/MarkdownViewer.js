import React, { useState } from 'react';
import '../main.css';
import { marked } from 'marked';

export default function MarkdownViewer() {
  const [markdownText, setMarkdownText] = useState('');
  const [selection, setSelection] = useState({
    start: 0,
    end: 0,
  });
  const renderer = new marked.Renderer();

  const handleMarkdownChange = (e) => {
    let markdown = e.target.value;
    setMarkdownText(markdown);
  };

  renderer.heading = (text, level) => {
    if (level > 4) {
      return `<h4>${text}</h4>`;
    }
    return `<h${level}>${text}</h${level}>`;
  };

  renderer.strong = (text) => {
    return `<strong>${text}</strong>`;
  };

  // 마크다운 옵션 설정
  const options = {
    renderer,
  };
  const htmlResult = marked(markdownText, options);

  //tab키
  const handleTabKeyPress = (e) => {
    e.preDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const text = e.target.value;
    setMarkdownText(text.substring(0, start) + '    \t' + text.substring(end));
    e.target.selectionStart = e.target.selectionEnd = start + 1;
  };

  // 엔터키로 줄바꿈
  const handleEnterKeyPress = (e) => {
    e.preDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const text = e.target.value;
    setMarkdownText(text.substring(0, start) + '  \n' + text.substring(end));
    e.target.selectionStart = e.target.selectionEnd = start + 1;
  };

  // 굵은 글씨
  const handleBoldKeyPress = (e) => {
    if (e.keyCode === 66 && e.ctrlKey) {
      e.preDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const text = e.target.value;
      setMarkdownText(text.substring(0, start) + '**' + text.substring(start, end) + '**' + text.substring(end));
      e.target.selectionStart = start + 2;
      e.target.selectionEnd = end + 2;
    }
  };

  // 기울임 글씨
  const handleItalicKeyPress = (e) => {
    e.preDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const text = e.target.value;
    setMarkdownText(text.substring(0, start) + '*' + text.substring(start, end) + '*' + text.substring(end));
    e.target.selectionStart = e.target.selectionEnd = end + 2;
  };

  // 밑줄
  const handleUnderlineKeyPress = (e) => {
    e.preDefault();
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    const text = e.target.value;
    setMarkdownText(text.substring(0, start) + '<u>' + text.substring(start, end) + '</u>' + text.substring(end));
    e.target.selectionStart = e.target.selectionEnd = start + 3;
  };

  // 백스페이스로 탭, 엔터 지우기
  const handleBackspaceKeyPress = (e) => {
    if (e.keyCode === 8) {
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const text = e.target.value;
      const beforeCursor = text.substring(0, start);
      const afterCursor = text.substring(end);
      const lastFourChars = beforeCursor.substring(beforeCursor.length - 4);
      const last2Chars = beforeCursor.substring(beforeCursor.length - 1, beforeCursor.length);
      if (lastFourChars === '    ') {
        e.preDefault();
        setMarkdownText(beforeCursor.substring(0, beforeCursor.length - 4) + afterCursor);
        e.target.selectionStart = e.target.selectionEnd = start - 4;
      }
      if (last2Chars === '\n') {
        setMarkdownText(beforeCursor.substring(0, beforeCursor.length - 2) + afterCursor);
        e.target.selectionStart = e.target.selectionEnd = start - 2;
      }
    }
  };

  // 네비게이션에서 버튼을 눌렀을 때 호출되는 함수
  const handleAddTextButtonClick = () => {
    // const start = selection.start;
    const end = selection.end;
    const text = markdownText;
    const newText = '<span style="color: ;background-color: ;">' + text + '</span>';
    setMarkdownText(newText);
    setSelection({ start: end + 1, end: end + 1 });
  };

  // 드래그한 선택영역의 시작점과 끝점을 state에 저장
  const handleSelectionChange = (e) => {
    const start = e.target.selectionStart;
    const end = e.target.selectionEnd;
    if (start !== end) {
      setSelection({ start: start, end: end });
    }
  };

  return (
    <div class="markdown-viewer">
      <textarea
        className="textarea"
        value={markdownText}
        onChange={handleMarkdownChange}
        onKeyDown={(e) => {
          if (e.code === 'DOM_VK_TAB') {
            handleTabKeyPress(e);
          } else if (e.code === 'DOM_VK_ENTER') {
            handleEnterKeyPress(e);
          } else if (e.ctrlKey && e.code === 'DOM_VK_B') {
            handleBoldKeyPress(e);
          } else if (e.ctrlKey && e.code === 'DOM_VK_I') {
            handleItalicKeyPress(e);
          } else if (e.ctrlKey && e.code === 'DOM_VK_U') {
            handleUnderlineKeyPress(e);
          } else if (e.code === 'DOM_VK_BACK_SPACE') {
            handleBackspaceKeyPress(e);
          }
        }}
        onSelect={handleSelectionChange}
      />
      {selection.start !== selection.end && (
        <div className="navigation">
          <button onClick={handleAddTextButtonClick}>Add Text</button>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: htmlResult }} />
    </div>
  );
}
