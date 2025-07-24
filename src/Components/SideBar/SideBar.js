import React, { useContext } from "react";
import { NoteContext } from "../../Context/NoteContext";
import "./SideBarStyles.css"

const Sidebar = () => {
  const {
    noteGroups,
    setNoteBtnClick,
    setSelectedNote,
    selectedNote,
    isMobile,
    display,
    setDisplay,
  } = useContext(NoteContext);
    const handleSelect = (note) => {
    if (isMobile) {
      setDisplay(true);
    }
    setSelectedNote(note);
  };



  return (
   
    <>
    <div
      className={` sidebar ${isMobile ? "mob-sidebar" : ""}`}
      style={{ display: isMobile && display ? "none" : "" }}
    >
      <div className="sidebar-heading ">
        <p className="sidebar-title">Pocket Notes</p>
        
      </div>
      <div className="sidebar-notes-list flex justify-start">
        {noteGroups &&
          noteGroups.map((note, index) => {
            const notes = note.name.split(" ");
            const firstLetters = notes.map((word) => word.charAt(0).toUpperCase());
            return (
              <div
                className={`sidebar-note-element flex flex-row  justify-start ${
                  note.id === selectedNote.id ? "note-selected" : ""
                }`}
                key={index}
                onClick={() => handleSelect(note)}
              >
                <div
                  className="circle note-list-icon flex"
                  style={{ marginRight: "0.5rem", backgroundColor: note.color }}
                >
                  {firstLetters[0]}
                  {firstLetters[firstLetters.length - 1]}
                </div>
                <p className="sidebar-note-title">{note.name}</p>
            
              </div>
            );
          })}
      </div>
         
    </div>
       <button className="create-note-btn" onClick={() => setNoteBtnClick(true)}>
  +
</button>
    </>
  );
};

export default Sidebar;
