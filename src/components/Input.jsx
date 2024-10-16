import React, {useState} from 'react';

function Input({addNotes}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const charLimit = 50;

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addNotes({
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  const charRemaining = charLimit - title.length;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Char left: {charRemaining}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="your note title..."
          required
          value={title}
          onChange={handleTitleChange}
          maxLength={charLimit}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="your notes ..."
          required
          spellCheck="false"
          value={body}
          onChange={handleBodyChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Input;