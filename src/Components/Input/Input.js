import React, { useContext, useState } from 'react';
import './InputStyles.css';
import { NoteContext } from '../../Context/NoteContext';

const Input = () => {
  const { selectedGroupId, addNoteToGroup } = useContext(NoteContext);
  const [note, setNote] = useState('');

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSendClick = () => {
    if (!note.trim()) return;

    const newNote = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      content: note.trim(),
      id: Math.floor(Math.random() * 100000),
    };

    addNoteToGroup(selectedGroupId, newNote);
    setNote('');
  };

  return (
    <div className="input-container">
      <div className="input-div flex flex-row">
        <textarea
          name="note"
          cols="30"
          rows="6"
          className="note-input"
          placeholder="Enter your text here..........."
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault(); 
              handleSendClick();
            }
          }}
          value={note}
        ></textarea>
        <svg
  className="send-btn"
  width="25"
  height="29"
  viewBox="0 0 35 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  onClick={handleSendClick}
  style={{ cursor: note.trim() ? "pointer" : "not-allowed" }}
>
  <path
    d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
    fill={note.trim() ? "#001F8B" : "#ABABAB"} 
  />
</svg>
      </div>
    </div>
  );
};

export default Input;
