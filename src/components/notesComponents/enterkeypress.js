const EnterKeyHandler = (event, text, setMarkdownText) => {
    event.preventDefault();
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    setMarkdownText(text.substring(0, start) + "  \n" + text.substring(end));
    event.target.selectionStart = event.target.selectionEnd = start + 1;
  };
  
  export default EnterKeyHandler;
  