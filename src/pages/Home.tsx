import { NoteForm } from "../components/NoteForm";
import { NoteList } from "../components/NoteList";
import { StatusStamp } from "../components/StatusStamp";
import { WorkshopTracker } from "../components/WorkshopTracker";
import { useNotes } from "../hooks/useNotes";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useWorkshopStep } from "../hooks/useWorkshopStep";

export function Home() {
  const { notes, addNote, removeNote } = useNotes();
  const online = useOnlineStatus();
  const { activeStep, setStep } = useWorkshopStep();

  return (
    <div className="app-shell">
      <header className="page-header">
        <h1>Secret Shelf</h1>
        <p className="subtitle">
          A private place to jot notes before they're ready for anyone else.
        </p>
      </header>

      <div className="layout">
        <main className="col-main">
          <h2 className="section-heading">Add a note</h2>
          <NoteForm onAdd={addNote} />

          <h2 className="section-heading">
            On the shelf
            {notes.length > 0 && (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--soft-ink)", marginLeft: "0.5rem" }}>
                {notes.length}
              </span>
            )}
          </h2>
          <NoteList notes={notes} onRemove={removeNote} />
        </main>

        <aside className="col-side">
          <StatusStamp online={online} />
          <WorkshopTracker activeStep={activeStep} onStepClick={setStep} />
        </aside>
      </div>
    </div>
  );
}
