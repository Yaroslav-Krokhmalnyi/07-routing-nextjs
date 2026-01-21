// app/notes/filter/[...slug]/page.tsx

// Constants
import TAGS from "@/constants/noteTags";

import { notFound } from "next/navigation";
import type { NoteTag } from "@/types/note";

interface NotesByCategoryParams {
  slug: string[],
}

const NotesByCategory = async ({ params }: { params: Promise<NotesByCategoryParams> }) => {
   const { slug } = await params;
   const filter = slug[0];

  // Check if the filter is included NoteTag
  function isNoteTag(value: string): value is NoteTag {
    return TAGS.includes(value as NoteTag);
  }

  if (filter === "all") {

  } else if (isNoteTag(filter)) {
    
  } else {
    notFound();
  }
  return (
    <div>
      <h1>Notes List</h1>
    </div>
  );
};

export default NotesByCategory;
