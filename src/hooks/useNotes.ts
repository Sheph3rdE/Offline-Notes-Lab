import { useCallback, useEffect, useState } from "react";

export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: number;
}

const STORAGE_KEY = "secret-shelf:notes";

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Note[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(loadNotes);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      /* ignore quota errors */
    }
  }, [notes]);

  const addNote = useCallback((title: string, body: string) => {
    const note: Note = {
      id: crypto.randomUUID(),
      title: title.trim(),
      body: body.trim(),
      createdAt: Date.now(),
    };
    setNotes((prev) => [note, ...prev]);
  }, []);

  const removeNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return { notes, addNote, removeNote };
}
