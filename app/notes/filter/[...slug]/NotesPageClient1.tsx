// app/notes/filter/[...slug]/NotesPageClient.tsx

"use client";

// Components
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";

// React
import { useState } from "react";

// TanStack
import { useQuery } from "@tanstack/react-query";

// API
import { fetchNotes } from "@/lib/api";

// Types
import type { NoteTag } from "@/types/note";

interface NotesPageClientProps {
  tag?: NoteTag;
}

export default function NotesPageClient({ tag }: NotesPageClientProps) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", page, tag],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: 12,
        tag,
      }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Something went wrong</p>;

  return (
    <>
      {data.notes.length > 0 && <NoteList notes={data.notes} />}

      {data.totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}
    </>
  );
}
