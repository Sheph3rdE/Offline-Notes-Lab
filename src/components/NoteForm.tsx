import { useState } from "react";

interface NoteFormProps {
  onAdd: (title: string, body: string) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !body.trim()) return;
    onAdd(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="note-title">Title</label>
        <input
          id="note-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="A working title…"
        />
      </div>
      <div className="field">
        <label htmlFor="note-body">Note</label>
        <textarea
          id="note-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Jot it down before it slips away…"
        />
      </div>
      <div className="form-actions">
        <button
          type="submit"
          className="btn-primary"
          disabled={!title.trim() && !body.trim()}
        >
          File this note
        </button>
      </div>
    </form>
  );
}
