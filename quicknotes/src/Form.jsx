import { useState } from "react";

export default function Form() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      text: noteText.trim(),
      date: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setNoteText("");
  };

  const handleDeleteNote = (indexToDelete) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete your note?"
    );
    if (!shouldDelete) return;
    const filteredNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(filteredNotes);
  };

  return (
    <div className="container">
      <div className="text-container">
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
            <p className="text-note">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
