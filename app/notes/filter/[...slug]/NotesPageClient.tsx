// app/notes/filter/[...slug]/NotesPageClient.tsx
"use client";

// Styles (можеш використати ті самі стилі, що і для /notes)
import css from "@/app/notes/Notes.module.css";

// React
import { useState } from "react";

// Debounce
import { useDebounce } from "use-debounce";

// TanStack
import { useQuery, keepPreviousData } from "@tanstack/react-query";

// API
import { fetchNotes } from "@/lib/api";

// Components
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";

// Types
import type { NoteTag } from "@/types/note";

interface NotesPageClientProps {
  tag?: NoteTag;
}

const PER_PAGE = 12;

export default function NotesPageClient({ tag }: NotesPageClientProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [debouncedSearch] = useDebounce(search, 500);

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "notes",
      { page, perPage: PER_PAGE, tag, search: debouncedSearch },
    ],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: PER_PAGE,
        tag,
        search: debouncedSearch,
      }),
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Something went wrong</p>;

  return (
    <div className={css.container}>
      <div className={css.header}>
        <SearchBox value={search} onChange={handleSearchChange} />
        <button type="button" className={css.addButton} onClick={openModal}>
          Add note
        </button>
      </div>

      {data.notes.length > 0 ? (
        <NoteList notes={data.notes} />
      ) : (
        <p>No notes found.</p>
      )}

      {data.totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm
            onCancel={closeModal}
            onCreated={() => {
              setPage(1);
            }}
          />
        </Modal>
      )}
    </div>
  );
}
