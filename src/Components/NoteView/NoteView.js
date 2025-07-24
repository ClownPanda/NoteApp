

import React, { useContext, useState, useEffect } from "react";
import { NoteContext } from "../../Context/NoteContext";
import "./NoteViewStyles.css";

import NoteHeader from "../NoteHeader/NoteHeader";
import Input from "../Input/Input";

const NoteView = () => {
  const {
    selectedNote,
    noteGroups,
    setNoteGroups,
    isMobile,
    display,
    setDisplay,
  } = useContext(NoteContext);

  const [notes, setNotes] = useState([]);
  const [groupId, setGroupId] = useState("");

  useEffect(() => {
    if (!selectedNote?.id) return;

    const group = noteGroups.find((group) => group.id === selectedNote.id);
    if (!group) return;

    setGroupId(group.id);
    setNotes(group.notes || []);
  }, [selectedNote, noteGroups]);

  const handleNewNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);

    const updatedGroups = noteGroups.map((group) =>
      group.id === selectedNote.id
        ? { ...group, notes: updatedNotes }
        : group
    );
    setNoteGroups(updatedGroups);
    localStorage.setItem("noteGroups", JSON.stringify(updatedGroups));
  };

  // Format date as "9 Mar 2025 • 10:10 AM"
  const formatDateTime = (dateStr, timeStr) => {
    const dt = new Date(`${dateStr} ${timeStr}`);
    return dt.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).replace(",", " •");
  };


  return (
  <div
    className="note-view-container"
    style={{ display: isMobile && !display ? "none" : "" }}
  >
    <NoteHeader />

    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <div key={index} className="note-card">
            <p className="note-text">{note?.content}</p>
            <div className="note-footer">
              <span>
                {formatDateTime(note?.date, note?.time).toUpperCase()}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="example-txt">Write Your First Note!</p>
      )}
    </div>

    <Input id={selectedNote.id} handleNewNote={handleNewNote} />
  </div>
);
};

export default NoteView;

