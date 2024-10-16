import React from "react";
import {getInitialData} from "./utils/index.js";
import Notes from "./components/Notes.jsx";
import Input from "./components/Input.jsx";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searching: ''
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onSearchHandler(event) {
    this.setState({searching: event.target.value});
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      prevState: prevState.notes.map((note) => note.id === id ? (note.archived = !note.archived) : note),
    }))
  }

  onAddNotesHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false
          }
        ]
      }
    })
  }

  render() {
    const activeNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searching.toLowerCase())
    );

    const archiveNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searching.toLowerCase())
    );
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Search Notes ..."
              value={this.state.searching}
              onChange={this.onSearchHandler}
            />
          </div>
        </header>
        <main className={"note-app__body"}>
          <div className="note-input">
            <h2>New Notes</h2>
            <Input addNotes={this.onAddNotesHandler}/>
          </div>

          <h2>Active Note</h2>
          {this.state.notes.filter((note) => !note.archived).length > 0 ? (
            <Notes
              notes={activeNotes}
              status={false}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          ) : <div className="note-list__empty-message">Active Notes Empty</div>}


          <h2>Archive Note</h2>
          {this.state.notes.filter((note) => note.archived).length > 0 ? (
            <Notes
              notes={archiveNotes}
              status={true}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          ) : <div className="note-list__empty-message">Archive Notes Empty</div>
          }
        </main>
        <footer className={"legacy"}>&copy; Iqbal M Fauzan</footer>
      </div>
    );
  }
}

export default MyApp;