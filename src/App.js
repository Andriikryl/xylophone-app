import { useState } from "react";
import "./App.css";
import notes from "./assets/notes.js";

const NoteButton = (props) => {
  return (
    <button
      className="note-button"
      style={{ height: 200 - 15 * props.index + "px" }}
      onClick={() => {
        props.setPlayNotes([...props.playedNotes, props.note]);
        new Audio(props.note.file).play();
      }}
    >
      <div className="circle" />
      {props.note.name}
      <div className="circle" />
    </button>
  );
};

function App() {
  const [playedNotes, setPlayNotes] = useState([]);

  const replayNotes = () => {
    playedNotes.map((note, idnex) => {
      window.setTimeout(() => new Audio(note.file).play(), 500 * idnex);
    });
  };

  const resetNotes = () => {
    setPlayNotes([]);
  };

  return (
    <div className="App">
      <h1>react xylophone</h1>
      <div className="page">
        <div className="xylophone">
          {notes.map((note, index) => {
            return (
              <NoteButton
                index={index}
                playedNotes={playedNotes}
                setPlayNotes={setPlayNotes}
                key={note.name}
                note={note}
              ></NoteButton>
            );
          })}
        </div>
        {JSON.stringify(playedNotes)}
        <button onClick={() => replayNotes()}>Replay</button>
        <button onClick={() => resetNotes()}>Clear</button>
      </div>
    </div>
  );
}

export default App;
