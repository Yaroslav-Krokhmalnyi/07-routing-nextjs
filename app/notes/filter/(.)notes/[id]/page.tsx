// app/notes/filter/(.)notes/[id]/page.tsx

interface ModalNotePageProps {
  params: {
    id: string;
  };
}

const ModalNotePage = ({ params }: ModalNotePageProps) => {
  const { id } = params;
  return <div>Modal route works: {id}</div>;
};

export default ModalNotePage;