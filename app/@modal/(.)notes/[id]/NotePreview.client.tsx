// app/@modal/(.)notes/[id]/ç.tsx
"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

interface NotePreviewClientProps {
  note: Note;
}

const NotePreviewClient = ({ note }: NotePreviewClientProps) => {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Modal closeModal={handleClose}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <p className={css.tag}>{note.tag}</p>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>
            Create date: {new Date(note.createdAt).toLocaleDateString()} |{" "}
            Update date: {new Date(note.updatedAt).toLocaleDateString()}
          </p>
        </div>
        <button type="button" className={css.backBtn} onClick={handleClose}>Back</button>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;