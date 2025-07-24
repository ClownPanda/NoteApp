import React, { useContext } from "react";
import { NoteContext } from "../../Context/NoteContext";
import "./NotesStyles.css"
import Home from "../Home/Home";
import NoteView from "../NoteView/NoteView";

const Notes = () => {
  const { selectedNote,
     isMobile, 
     display,
    setDisplay,
  noteBtnClick } = useContext(NoteContext);

  return (
    <>
       {selectedNote && selectedNote.notes ? (
        <NoteView
          id={selectedNote.id}
          name={selectedNote.name}
          color={selectedNote.color}
          notes={selectedNote.notes}
          isMobile={isMobile}
          display={display}
          setDisplay={setDisplay}
        />
      ) : (
        <Home noteBtnClick={noteBtnClick}  isMobile={isMobile} />
      )}
    </>
  );
};

export default Notes;
