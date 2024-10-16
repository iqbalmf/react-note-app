import React from 'react';
import {showFormattedDate} from "../utils/index.js";
import Delete from "./Delete.jsx";
import Archive from "./Archive.jsx";

function NoteItem({id, title, body, isArchived, createdAt, onDelete, onArchive}) {
  return (
    <div className={"note-item"}>
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <Delete id={id} onDelete={onDelete}/>
        <Archive id={id} onArchive={onArchive} isArchived={isArchived}/>
      </div>
    </div>
  )
}

export default NoteItem;