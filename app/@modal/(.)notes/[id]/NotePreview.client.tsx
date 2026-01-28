// app/@modal/(.)notes/[id]/NotePreview.client.tsx

// Styles
import css from './NotePreview.module.css';

// Next.js components
import { useRouter } from "next/navigation";

// API
import { fetchNoteById } from "@/lib/api";

//Components
import Modal from "@/components/Modal/Modal";

// Types
type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

// Modal state
  const router = useRouter();
const previousPage = () => router.back();

  const createDate = new Date(note.createdAt).toLocaleDateString();
  const updateDate = new Date(note.updatedAt).toLocaleDateString();

  return (
    <Modal closeModal={previousPage}>
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
        </div>
      </div>
    </Modal>
  );
};

export default NotePreview;
