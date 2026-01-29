  "use client";

import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

interface NotePreviewProps {
  note: Note;
}

const NotePreview = ({ note }: NotePreviewProps) => {
  return (
    <div className={css.preview}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
      <span className={css.tag}>{note.tag}</span>
    </div>
  );
};

export default NotePreview;
