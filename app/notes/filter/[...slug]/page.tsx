// app/notes/filter/[...slug]/page.tsx

interface NotesByCategoryParams {
  slug: string[],
}

const NotesByCategory = ({ params }: { params: NotesByCategoryParams }) => {
  return (
    <div>
      <h1>Notes List</h1>
    </div>
  );
};

export default NotesByCategory;
