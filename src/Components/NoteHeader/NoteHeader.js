import React, { useContext } from 'react';
import "./NoteHeaderStyles.css";
import { NoteContext } from '../../Context/NoteContext';

const NoteHeader = () => {
  const {
    selectedNote,
    isMobile,
    setDisplay
  } = useContext(NoteContext);

  const { name = "", color = "#ccc" } = selectedNote || {};

  return (
    <div className="note-header flex flex-row justify-start">
      {isMobile && (
        <svg
          onClick={() => setDisplay(false)}
          style={{ marginRight: "1.5rem", cursor: "pointer" }}
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="..." 
            fill="#5C5C5C"
          />
        </svg>
      )}
      <div
        className="header-note-icon circle flex"
        style={{ marginRight: "1.5rem", backgroundColor: color }}
      >
        {name.substring(0, 2).toUpperCase()}
      </div>
      <p className="header-note-title">{name}</p>
    </div>
  );
};

export default NoteHeader;
