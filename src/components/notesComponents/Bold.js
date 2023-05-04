const BoldKeyHandler = (event, text,setMarkdownText,selection ,setSelection) => {
    event.preventDefault();
    const start = selection.start;
    const end = selection.end;
    const selectedText = text.substring(start, end);
    const isBold = selectedText.startsWith("**") && selectedText.endsWith("**");

    if (isBold){
      // 지우기
      setMarkdownText(text.substring(0, start) + selectedText.substring(2, selectedText.length - 2) + text.substring(end));
      setSelection({start: start + 2, end: end - 2});
    } else{
      // 굵게
      setMarkdownText(text.substring(0, start) + "**" + text.substring(start, end) + "**" + text.substring(end));
      setSelection({start: end + 2, end: end + 2});
    }
  };
  
  export default BoldKeyHandler;