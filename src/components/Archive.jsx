import React from 'react';

function Archive({id, onArchive, isArchived}) {
  return (
      <button className={"note-item__archive-button"} onClick={() => onArchive(id)}>
        {isArchived ? 'Restore' : 'Archive'}
      </button>
  );
}

export default Archive;