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
            <small style={{ color: "grey" }}>{note.date}</small>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
