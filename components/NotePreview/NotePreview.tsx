// components/NotePreview/NotePreview.tsx

import { Note } from "@/types/note";

interface NotePreviewProps {
  note: Note;
}

function NotePreview({ note }: NotePreviewProps) {
  return (
    <ul>
        <li key={note.id}>
          <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>{note.tag}</p>
          </div>
        </li>
    </ul>
  );
}

export default NotePreview;
