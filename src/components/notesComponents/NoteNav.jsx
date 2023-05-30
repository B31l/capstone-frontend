import * as React from 'react';

const saveNote = ({ text }) => {
  console.log(text);
};

export default function NoteNav() {
  return <button onClick={(data) => saveNote(data)}>Save</button>;
}
