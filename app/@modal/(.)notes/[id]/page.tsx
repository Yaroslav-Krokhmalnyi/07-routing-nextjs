// app/@modal/(.)notes/[id]/page.tsx

// Styles
import css from './NotePreview.module.css';


// API
import { fetchNoteById } from "@/lib/api";

//Components
import Modal from "@/components/Modal/Modal";

// Types
type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

    const createDate = new Date(note.createdAt).toLocaleDateString();
    const updateDate = new Date(note.updatedAt).toLocaleDateString();

  return (
    <Modal>
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
