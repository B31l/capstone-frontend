const BackspaceKeyHandler = (event, text, setMarkdownText) => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    const beforeCursor = text.substring(0, start);
    const afterCursor = text.substring(end);
    const lastFourChars = beforeCursor.substring(beforeCursor.length - 4);
    const last2Chars = beforeCursor.substring(beforeCursor.length - 1, beforeCursor.length);
    if (lastFourChars === "    ") {
    event.preventDefault();
    setMarkdownText(beforeCursor.substring(0, beforeCursor.length - 4) + afterCursor);
    event.target.selectionStart = event.target.selectionEnd = start - 4;
    }if (last2Chars === "\n"){
    setMarkdownText(beforeCursor.substring(0, beforeCursor.length - 2) + afterCursor);
    event.target.selectionStart = event.target.selectionEnd = start - 2;
    }
  };
  
  export default BackspaceKeyHandler;