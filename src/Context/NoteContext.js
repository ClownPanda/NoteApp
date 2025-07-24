import React, { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteBtnClick, setNoteBtnClick] = useState(false);
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );
  const [newNoteGroup, setNewNoteGroup] = useState({
    id: "",
    name: "",
    notes: [],
    color: "",
  });
  const [selectedNote, setSelectedNote] = useState({}); 
  const [isMobile, setIsMobile] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addNoteToGroup = (groupId, newNote) => {
    if (!groupId) return;

    const updatedGroups = [...noteGroups];
    const index = updatedGroups.findIndex((g) => g.id === groupId);
    if (index === -1) return;

    updatedGroups[index].notes.push(newNote);
    setNoteGroups(updatedGroups);
    localStorage.setItem("noteGroups", JSON.stringify(updatedGroups));
  };

  return (
    <NoteContext.Provider
      value={{
        noteGroups,
        setNoteGroups,
        selectedNote,
        setSelectedNote,
        noteBtnClick,
        setNoteBtnClick,
        display,
        setDisplay,
        isMobile,
        newNoteGroup,
        setNewNoteGroup,
        addNoteToGroup,
        selectedGroupId: selectedNote?.id || "", 
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
