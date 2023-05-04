const UnderlineKeyHandler = (event, text,setMarkdownText,selection ,setSelection) => {
    event.preventDefault();
    const start = selection.start;
    const end = selection.end;
    const selectedText = text.substring(start, end);
    const isUline = selectedText.startsWith("<u>") && selectedText.endsWith("</u>");
    if (isUline){
      // 지우기
      setMarkdownText(text.substring(0, start) + selectedText.substring(3, selectedText.length - 4) + text.substring(end));
      setSelection({start: start + 3, end: end - 4});
    } else{
      // 기울기
      setMarkdownText(text.substring(0, start) + "<u>" + text.substring(start, end) + "</u>" + text.substring(end));
      setSelection({start: end + 4, end: end + 4});
    }
    };
    
    export default UnderlineKeyHandler;
    