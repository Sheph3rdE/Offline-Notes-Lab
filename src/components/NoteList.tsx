import type { Note } from "../hooks/useNotes";

interface NoteListProps {
  notes: Note[];
  onRemove: (id: string) => void;
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function NoteList({ notes, onRemove }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">&#10070;</div>
        <p>The shelf is empty. Jot your first note above.</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <article key={note.id} className="note-card">
          <div className="note-meta">
            <h3 className="note-title">
              {note.title || "Untitled"}
            </h3>
            <time className="note-date">{formatDate(note.createdAt)}</time>
          </div>
          {note.body && <p className="note-body">{note.body}</p>}
          <div className="note-footer">
            <button
              className="btn-remove"
              onClick={() => onRemove(note.id)}
            >
              Remove
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
