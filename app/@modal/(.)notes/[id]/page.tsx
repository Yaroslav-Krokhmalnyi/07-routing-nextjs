// app/@modal/(.)notes/[id]/page.tsx

// Styles
import css from './NotePreview.module.css';

// API
import { fetchNoteById } from "@/lib/api";

//Components
import NotePreviewClient from '@/app/@modal/(.)notes/[id]/NotePreview.client'

// Types
type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NotePreviewClient note={note}/>
  );
};

export default NotePreview;
