import React, { useState, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function Whsiwhg() {
    return (
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
    );
}
  

export default Whsiwhg;
