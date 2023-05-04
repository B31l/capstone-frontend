import React, { useState } from "react";
import { marked } from "marked";
import "../styles/Mviewer.css"

import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineBgColors} from 'react-icons/ai';
import TabKeyHandler from "./notesComponents/tabkeypress";
import EnterKeyHandler from "./notesComponents/enterkeypress";
import BoldKeyHandler from "./notesComponents/Bold";
import ItalicKeyHandler from "./notesComponents/Italic";
import UnderlineKeyHandler from "./notesComponents/Underline";
import BackspaceKeyHandler from "./notesComponents/backspace";




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
  const handleTabKeyPress = (event) => {
    TabKeyHandler(event, markdownText, setMarkdownText);
  };

  // 엔터키로 줄바꿈
  const handleEnterKeyPress = (event) => {
    EnterKeyHandler(event, markdownText, setMarkdownText);
  };

  // 굵은 글씨
  const handleBoldKeyPress = (event) => {
    BoldKeyHandler(event, markdownText, setMarkdownText,selection ,setSelection);
  };

  // 기울임 글씨
  const handleItalicKeyPress = (event) => {
    ItalicKeyHandler(event, markdownText, setMarkdownText,selection ,setSelection);
  };

  // 밑줄
  const handleUnderlineKeyPress = (event) => {
    UnderlineKeyHandler(event, markdownText, setMarkdownText,selection ,setSelection);
  };

  // 백스페이스로 탭, 엔터 지우기
  const handleBackspaceKeyPress = (event) => {
    BackspaceKeyHandler(event, markdownText, setMarkdownText)
  };


  // 색상 변경 함수
  const handleChangecolorButtonClick = () => {
    const start = selection.start;
    const end = selection.end;
    const text = markdownText;
    const newText = text.substring(0, start) + '<span style="color: ;background-color: ;">' 
                    + text.substring(start, end) 
                    + "</span>" + text.substring(end);
    setMarkdownText(newText);
    setSelection({start: end + 1, end: end + 1});
  };

  // 드래그한 선택영역의 시작점과 끝점을 state에 저장
  const handleSelectionChange = (event) => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    if (start !== end) {
      setSelection({start: start, end: end});
    }
  };

  return (
    <>
    <div className="toolbar">
          <button className="toolbar-button" onClick={handleChangecolorButtonClick}><AiOutlineBgColors/></button>
          <button className="toolbar-button" onClick={handleBoldKeyPress}><AiOutlineBold /></button>
          <button className="toolbar-button" onClick={handleItalicKeyPress}><AiOutlineItalic/></button>
          <button className="toolbar-button" onClick={handleUnderlineKeyPress}><AiOutlineUnderline/></button>
      </div>
    <div class="markdown-viewer">
      
      <textarea
        className="textarea"
        value={markdownText}
        onChange={handleMarkdownChange}
        onKeyDown={(event) => {
          if (event.keyCode === 9) {
            handleTabKeyPress(event);
          } else if (event.keyCode === 13) {
            handleEnterKeyPress(event);
          } else if(event.ctrlKey && event.keyCode === 66){
            handleBoldKeyPress(event);
          } else if(event.ctrlKey && event.keyCode === 73){
            handleItalicKeyPress(event);
          } else if (event.ctrlKey && event.keyCode === 85) {
            handleUnderlineKeyPress(event);
          } else if (event.keyCode === 8) {
            handleBackspaceKeyPress(event);
          }
        }}
        onSelect={handleSelectionChange}
      />
      <pre dangerouslySetInnerHTML={{ __html: htmlResult }} />
    </div>
    </>
  );
}
