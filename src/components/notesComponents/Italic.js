const ItalicKeyHandler = (event, text,setMarkdownText,selection ,setSelection) => {
    event.preventDefault();
    // const start = event.target.selectionStart;
    // const end = event.target.selectionEnd;
    const start = selection.start;
    const end = selection.end;
    const selectedText = text.substring(start, end);
    const isItalic = selectedText.startsWith("*") && selectedText.endsWith("*");
    // event.target.selectionStart = start + 2;
    // event.target.selectionEnd = end + 2;
    if (isItalic){
      // 지우기
      setMarkdownText(text.substring(0, start) + selectedText.substring(1, selectedText.length - 1) + text.substring(end));
      setSelection({start: start + 1, end: end - 1});
    } else{
      // 기울기
      setMarkdownText(text.substring(0, start) + "*" + text.substring(start, end) + "*" + text.substring(end));
      setSelection({start: end + 1, end: end + 1});
    }
  };
  
  export default ItalicKeyHandler;
  