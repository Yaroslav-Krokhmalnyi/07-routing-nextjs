// components/NotePreview/NotePreview.tsx

"use client";

// Styles
import css from "./NotePreview.module.css";

// Types
import { Note } from "@/types/note";

interface NotePreviewProps {
  note: Note,
  onBack: () => void,
}

function NotePreview({ note, onBack }: NotePreviewProps) {
  const createDate = new Date(note.createdAt).toLocaleDateString();
  const updateDate = new Date(note.updatedAt).toLocaleDateString();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <p className={css.tag}>{note.tag}</p>
        </div>
        <p className={css.content}>{note.content}</p>
        <p
          className={css.date}
        >{`Create date: ${createDate} | Update date: ${updateDate}`}</p>
        <button className={css.backBtn} type="button" onClick={ onBack }>
          Back
        </button>
      </div>
    </div>
  );
}

export default NotePreview;
