// app/notes/filter/(.)notes/[id]/page.tsx

import { fetchNoteById } from '@/lib/api'
import { notFound } from 'next/navigation'
import ModalNoteClient from "@/components/ModalNoteClient/ModalNoteClient";
import NotePreview from '@/components/NotePreview/NotePreview'
interface ModalNotePageProps {
  params: {
    id: string;
  };
}

const ModalNotePage = async ({ params }: ModalNotePageProps) => {
  const { id } = params;

const modalData = await fetchNoteById(id);

  if (!modalData) {
    return notFound();
  } else {
    return (
      <ModalNoteClient>
        <NotePreview note={modalData} onBack={() => {} } />
      </ModalNoteClient>
    );
  }
}

export default ModalNotePage;
