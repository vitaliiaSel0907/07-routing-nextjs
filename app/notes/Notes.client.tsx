'use client';

import { useQuery } from '@tanstack/react-query';
import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes } from '@/lib/api/notes';

export default function NotesClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes'],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: '',
      }),
  });

  if (isLoading) {
    return <p>Loading notes...</p>;
  }

  if (isError) {
    return <p>Failed to load notes.</p>;
  }

  return <NoteList notes={data?.notes ?? []} />;
}
