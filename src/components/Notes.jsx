import React from 'react';
import NoteItem from "./NoteItem.jsx";

function Notes({notes, status, onDelete, onArchive}) {
  const filteredNotes = notes.filter(note => note.archived === status);
  return (
    <div className={"notes-list"}>
      {filteredNotes.map(
        (note) => note.archived === status && <NoteItem
          key={note.id}
          createdAt={note.createdAt}
          isArchived={note.archived}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note}/>
      )}
    </div>
  );
}

export default Notes;