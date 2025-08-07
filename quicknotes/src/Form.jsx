import { useState } from "react";

export default function Form() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      title: title.trim(),
      text: noteText.trim(),
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setNoteText("");
    setTitle("");
  };

  const handleDeleteNote = (indexToDelete) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!shouldDelete) return;
    const filteredNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(filteredNotes);
  };

  return (
    <div className="container">
      <div className="text-container">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Your note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          rows={8}
        />
        <br />
        <button id="addNoteButton" onClick={handleAddNote}>
          Add Note
        </button>
      </div>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <div className="note-card" key={index}>
            <div className="date-and-x">
              <small>{note.date}</small>
              <small
                onClick={() => handleDeleteNote(index)}
                style={{ cursor: "pointer" }}
              >
                x
              </small>
            </div>
            <h4 className="title-note">{note.title}</h4>
            <p className="text-note">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
