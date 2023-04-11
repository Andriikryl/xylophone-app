import "./App.css";
import notes from "./assets/notes.js";

const NoteButton = (props) => {
  return (
    <button onClick={() => new Audio(props.note.file).play()}>
      {props.note.name}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <div className="page">
        <h1>Create your react xylophone</h1>
        <div className="xylophone">
          {notes.map((note) => {
            return <NoteButton note={note}></NoteButton>;
          })}
        </div>
        {/* <button>Replay</button> */}
        {/* <button>Clear</button> */}
      </div>
    </div>
  );
}

export default App;
